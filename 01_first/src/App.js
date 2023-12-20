import { Fragment } from 'react';
import './App.css';

// 함수형 컴포넌트
// 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용을 나타낸다.
// 반환하는 내용을 보면 HTML 같지만 HTML, 문자열이 아닌 JSX라고 부른다.
let App = () => {
  const name = '홍길동';
  const nickname = undefined;
  const element = <p>Hello World!</p>;
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '2em',
    fontWeight: 'bold',
    padding: '15px'
  };

  return (
      // 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
      // <Fragment>
      <>
        {/* JSX 내부에 주석을 작성하는 방법 */}
        <h2 className='heading2'>리액트 시작</h2>

        {/* 아래와 같이 class로 설정해도 스타일이 적용된다. */}
        {/* 하지만 개발자 도구로 확인하면 경고가 나타난다. */}
        {/* <h2 class='heading2'>리액트 시작</h2> */}

        {/* {element} */}

        {/* JSX 인라인 스타일 */}
        {/* 스타일 객체를 미리 선언 후 지정하는 방법 */}
        {/* <p style={style}>Hello World!</p> */}

        {/* 스타일 객체를 바로 지정하는 방법 */}
        <p style={{
          backgroundColor: 'gray',
          color: 'white',
          fontSize: '1.5em',
          fontWeight: 'bold',
          padding: '15px'
        }}>Hello World!</p>
        
        {/* 삼항 연산자 사용 */}
        {name === '홍길동' ? (<p><b>관리자님</b> 안녕하세요.</p>) : (<p>{name}님 안녕하세요.</p>)}

        {/* && 연산자 사용 */}
        {nickname && <h3>{name}의 별명은 {nickname} 입니다.</h3>}

        {/* || 연산자 사용 */}
        {nickname || <h3>별명이 없습니다.</h3>}

        {/* JSX에서 닫는 태그가 없으면 애러가 발생한다. */}
        {/* <br/> */}
        {/* <input /> */}
      </>
      // </Fragment>
  );
}

export default App;
