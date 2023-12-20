import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//파일을 가져다가 쓰려면 반드시 import 구문을 써야함. export로 정의한 파일의 이름을 그대로 사용
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //개발자용 모드
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
