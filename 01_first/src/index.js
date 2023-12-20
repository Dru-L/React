import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.html의 id가 root인 div에 App 컴포넌트를 렌더링한다.
// App 컴포넌트는 프로젝트가 실행될 때 기본으로 실행되는 컴포넌트이다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
