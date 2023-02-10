import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/UI/Preloader/Preloader";
import UserForm from "../components/UserForm/UserForm";
import { registerUser, setNullRegisterError } from "../store/actions/usersActions";

function Register() {
  const [filename, setFilename] = useState("");
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerError, loading } = useSelector(state => state.users);

  useEffect(() => {
    return () => {
      dispatch(setNullRegisterError())
    }
  }, [dispatch])

  const fileChangeHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setFields(prevState => {
      return {
        ...prevState,
        [name]: file
      }
    });
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFilename(file.name);
    } else {
      setFilename("");
    }
    fileChangeHandler(e)
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };

  const buttonRegisterUser = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(fields, navigate))
  }
  const buttonLoginUser = (e) => {
    e.preventDefault();
    navigate('/log-in')
  }

  return (
    <>
      <Preloader
        showPreloader={loading}
      />
      <UserForm
        error={registerError}
        onClickFirstBtn={buttonRegisterUser}
        onClickSecondBtn={buttonLoginUser}
        filename={filename}
        onFileChange={onFileChange}
        state={fields}
        onChange={inputChangeHandler}
        buttonTextFirst={"Регистрация"}
        buttonTextSecond={"Вход"}
      />
    </>
  );
}

export default Register;