const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const { nanoid } = require("nanoid");

const router = express.Router();

router.post("/", async (req, res) => {
    const userData = req.body;
    const user = new User({
        username: userData.username,
        password: userData.password,
        token: userData.token
    });
    try {
        user.generateToken();
        await user.save()

        res.status(201).send(user);
    } catch (e) {
        if (e.code === 11000) {
            e = {errors: {user: {message: 'Этот пользователь уже существует'}}}
        }
        res.status(422).send(e);
    }
});

router.post("/session", async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    });

    const errorMessage = {
        message: "Юзернейм или пароль введены некорректно"
    };

    if (!user) return res.status(401).send(errorMessage);

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) return res.status(401).send(errorMessage);

    user.generateToken();
    await user.save();

    res.send(user);
});

router.delete("/session", auth, async (req, res) => {
    req.body.user.token = nanoid();
    try {
        await req.body.user.save();
        res.sendStatus(204);
    } catch (e) {
        res.status(502).send({ message: "Can't logout" });
    }
});




module.exports = router;
