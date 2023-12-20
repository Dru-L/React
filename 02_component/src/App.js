import React from 'react';
import FirstComponent from './components/FirstComponent';
import PropsComponent from './components/PropsComponent';
import StateComponent from './components/StateComponent';

const App = () => {
  return (
    <>
      <FirstComponent />
      {/* 숫자 값을 넘길 때는 중괄호를 사용한다. */}
      {/* 태그의 사이와 사이에 넣어주면 자식 요소이기 때문에 컴퓨터공학과는 children 속성*/}
      {/* <PropsComponent no={1} name="홍길동">컴퓨터공학과</PropsComponent> */}

      <PropsComponent />
      
      <StateComponent />

    </>

  );
};

export default App;
