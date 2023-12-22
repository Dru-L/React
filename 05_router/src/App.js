import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProfilePage from './components/ProfilePage';
import CommentsPage from './components/CommentsPage';
import PostPage from './components/PostPage';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';
import CommentsPage2 from './components/CommentsPage2';

function App() {
  return (
    <Routes>
      {/* 공통 레이아웃 컴포넌트 */}
      <Route element={<Layout />}>
        {/* path="/서버경로(home이라고 적으면 경로가 localhost:3000/home)"  element{<컴포넌트/>}*/}
        {/* <Route path="/home" element={<HomePage />}/> */}
        <Route index element={<HomePage />}/>
        <Route path ="/about" element={<AboutPage />}/>
        <Route path ="/profile/:userId" element={<ProfilePage />}/>
        <Route path ="/comments" element={<CommentsPage />}/>
        <Route path ="/post/:postId" element={<PostPage />}/>
        <Route path ="/post/:postId/comments" element={<CommentsPage2 />}/>

        <Route path ="*" element={<NotFoundPage />}/>
      </Route>

    </Routes>
  );
}

export default App;
