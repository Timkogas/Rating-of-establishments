import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Login from './containers/Login';
import Register from './containers/Register';
import Posts from './containers/Posts'
import Post from './containers/Post';
import AddPost from './containers/AddPost';

const ProtectedRoute = ({ isAllowed, redirectUrl, children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectUrl} />
  }
  return children || <Outlet />;
};

function App() {

  const { user } = useSelector(state => state.users);

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/sign-up' element={<Register />} />
          <Route path='/log-in' element={<Login />} />

          <Route path='/' element={<Posts />} />

          <Route path='/posts' element={<Posts />} />
          <Route path='/add-post' element={
            <ProtectedRoute
              isAllowed={user}
              redirectUrl={"/log-in"}
            >
              <AddPost/>
            </ProtectedRoute>
          } />

          <Route path='/posts/:id' element={<Post />} />

          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
