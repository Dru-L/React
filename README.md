## 리액트(React) 개요
### 1. 리액트(React)
* 리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는 데 사용한다.
* 리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행한다.
### 2. 개발 환경 설정
#### 2.1. Node.js와 npm 설치
* Node.js 홈페이지(https://nodejs.org/en/download) 접속 후 사용 중인 OS에 맞는 Installer를 다운로드한다.
* 다운로드된 Installer를 실행하여 설치한 후 명령 프롬프트를 열고 정상적으로 설치가 되었는지 확인한다.
  ```
  > node -v
  v20.10.0

  > npm -v
  10.2.3
  ```
* Node.js에서 패키지를 관리해주는 도구인 npm이 있지만 npm 보다 빠르고 효율적인 yarn을 설치하여 사용한다.
  ```
  > npm install -global yarn
  ...

  > yarn -version
  1.22.21
  ```
### 3. 리액트 프로젝트 생성 및 실행
* `create-react-app`으로 리액트 프로젝트를 생성할 수 있다.
  ```
  > yarn create react-app 01_first
  ...
  ```
* 생성된 프로젝트를 실행하기 위해서는 명령 프롬프트에 `start` 명령을 실행한다.
  ```
  > cd 01_first
  > yarn start
  ...

  Starting the development server...
  ```
## JSX
### 1. JSX란?
* JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼다.
* JSX로 작성한 코드는 브라우저에서 실행되기 전에 자바스크립트 코드로 변환된다.
  ```js
  const element = <p>Hello, world!</p>;
  ```
* JSX에서는 `div`, `span` 같은 HTML 태그를 사용할 수 있으며 다른 컴포넌트들도 JSX 안에서 HTML 태그처럼 사용할 수 있다.
  ```js
  // index.js 파일
  root.render(
    <App />
  );
  ```
### 2. JSX 문법
#### 2.1. 여러 요소 표현
* 컴포넌트에 여러 개의 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
  ```js
  return (
    <div>
      <h1>제목</h1>
      <p>내용입니다.</p>
    </div>
  );
  ```
#### 2.2. 자바스크립트 표현
* JSX 안에서는 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 `{}`로 감싸준다.
  ```js
  const name = '홍길동';

  return (
    <h1>{name}</h1>
  );
  ```
* JSX 내부에서 `if` 문을 사용할 수 없다.
* 따라서 JSX 외부에서 `if` 문을 사용하여 사전에 값을 설정하거나 {} 안에 삼항 연산자를 사용하면 된다.
  ```js
  const name = '홍길동';

  return (
    <h1>{name === '홍길동' ? '홍길동입니다.' : '홍길동이 아닙니다.'}</h1>
  );
  ```
* and 연산자`(&&)`를 사용하여 특정 조건을 만족하지 않을 때 사용할 값을 지정할 수 있다.
  ```js
  const name = '홍길동';

  return (
    <h1>{name === '홍길동' && '홍길동입니다.'}</h1>
  );
  ```
* or 연산자`(||)`를 사용하여 특정 값이 `undefined` 일 때 사용할 값을 지정할 수 있다.
  ```js
  const name = undefined;

  return (
    <h1>{name || '아무개입니다.'}</h1>
  );
  ```
* JSX 내부에서 주석을 작성할 때는 `{/* ... */}`와 같은 형식으로 작성해야 한다.
  ```js
  return (
    <div>
      <h1>제목</h1>
      <p>내용입니다.</p>
      {/* 주석입니다. */}
    </div>
  );
  ```
#### 2.3. 인라인 스타일
* 리액트에서 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어야 한다.
  ```js
  const style = {
    color: 'red',
    fontSize: '2em',
  };

  return (
    <div>
      <h1>제목</h1>
      <p style={style}>내용입니다.</p>
    </div>
  );
  ```
#### 2.4. className
* HTML과 다르게 JSX에서는 `class` 속성을 `className`으로 설정해야 한다.
  ```js
  return (
    <div>
      <h1>제목</h1>
      <p className="content">내용입니다.</p>
    </div>
  );
  ```
## 컴포넌트(Component)
### 1. 컴포넌트
* 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수 있는 요소를 컴포넌트라 한다.
* 컴포넌트는 해당 컴포넌트가 렌더링 해야 하는 UI와 동작(기능)을 정의한다.
* 컴포넌트는 클래스 컴포넌트, 함수 컴포넌트로 선언하는 방식은 두 가지가 있다.
### 2. 컴포넌트 생성
* 확장자가 `.js` 또는 `.jsx`인 파일을 생성하고 함수 컴포넌트를 작성한다.
* `export` 구문을 사용하여 외부에서 생성한 컴포넌트를 사용할 수 있도록 설정한다.
  ```js
  import React from 'react';

  const 컴포넌트명 = () => {
      return (
        ...
      );
  };

  export default 컴포넌트명;
  ```
* `import` 구문을 사용하여 다른 컴포넌트에서 생성한 컴포넌트를 불러올 수 있다.
  ```js
  // App.js
  import 컴포넌트명 from '컴포넌트 경로';

  const App = () => {
    return (
      <컴포넌트명 />
    );
  }

  export default App;
  ```
### 3. props
* `props`는 properties를 줄인 말로 컴포넌트 속성을 설정할 때 사용하는 요소이다.
* `props`는 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.
  ```js
  // App.js
  import 컴포넌트명 from '컴포넌트 경로';

  const App = () => {
    return (
      <컴포넌트명 속성명="속성값"/>
    );
  }

  export default App;
  ```
* 자식 컴포넌트는 `props` 값을 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있다.
  ```js
  import React from 'react';

  const 컴포넌트명 = (props) => {
      return (
        <div>
          <h1>{props.속성명}</h1>
        </div>
      );
  };

  export default 컴포넌트명;
  ```
* `defaultProps`으로 `props` 값을 따로 지정하지 않았을 때 보여줄 기본값을 설정할 수 있다.
  ```js
  import React from 'react';

  const 컴포넌트명 = (props) => {
      return (
        <div>
          <h1>{props.속성명}</h1>
        </div>
      );
  };

  컴포넌트명.defaultProps = {
    속성명: '기본값'
  };

  export default 컴포넌트명;
  ```
* 컴포넌트의 필수 `props`를 지정하거나 `props`의 타입을 지정할 때는 `propTypes`를 사용한다.
* `propTypes`를 사용하려면 코드 상단에 `import` 구문을 사용하여 불러와야 한다.
  ```js
  import React from 'react';
  import PropTypes from "prop-types";

  const 컴포넌트명 = (props) => {
      return (
        <div>
          <h1>{props.속성명}</h1>
        </div>
      );
  };

  컴포넌트명.propTypes = {
    속성명: PropTypes.string.isRequired
  };

  export default 컴포넌트명;
  ```
### 4. state
* 리액트에서 `state`는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
* 리액트 16.8 이전 버전에서는 함수 컴포넌트에서 `state`를 사용할 수 없었지만, 16.8 이후부터는 `useState`라는 함수를 사용하여 함수 컴포넌트에서도 `state`를 사용할 수 있게 되었다.
* `useState` 함수의 인자에는 상태의 초깃값을 전달해 준다.
* `useState` 함수를 호출하면 배열을 반환하는데 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수이다.
  ```js
  const 컴포넌트명 = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <p>number : {number}</p>

            <button onClick={() => setNumber(number + 1)}>증가</button>
        </div>
    );
  };
  ```
* `state` 사용할 때 주의사항으로는 `state`값을 바꾸어야 할 때는 반드시 `useState` 함수를 통해 전달받은 함수를 사용해야 한다. (상태 값을 변경하고 컴포넌트를 리렌더링한다.)
## 리액트 라우터
### 1. 리액트 라우터 사용
* 리액트 라우터를 적용하려는 프로젝트에서 `react-router-dom`이라는 라이브러리를 설치해야 한다.
  ```
  > yarn add react-router-dom
    ...
    Done in 3.91s.
  ```
* 프로젝트에 리액트 라우터를 적용할 때는 `index.js` 파일에서 `react-router-dom`에 내장되어 있는 `BrowserRouter`라는 컴포넌트를 사용하여 `App` 컴포넌트를 감싸면 된다.
  ```js
  // index.js
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```
* URL 주소에 따라 원하는 컴포넌트를 보여주려면 `Route` 컴포넌트를 통해 라우트 설정을 해야 한다.
  ```xml
  <Routes>
    <Route path="/" element={<컴포넌트 />} />
  </Routes>
  ```
* 다른 페이지로 이동하는 링크를 보여줄 때는 Link 컴포넌트를 사용해야 한다.
  ```xml
  <Link to="/">홈으로</Link>
  ```
### 2. URL 파라미터
* URL 파라미터는 주소의 경로에 값을 전달하는 방법으로 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용한다.
* URL 파라미터의 이름은 라우트를 설정할 때 `Route` 컴포넌트의 `path` 프로퍼티를 통해 설정한다.
  ``` xml
  <Route path="/user/:id" element={<컴포넌트 />} />
  ```
* URL 파라미터는 컴포넌트 내에서 `useParams` 훅을 사용하여 객체 형태로 조회할 수 있다.
  ```js
   const params = useParams();
  ```
### 3. 쿼리스트링
* 쿼리스트링은 URL 주소의 뒷부분에 `?` 문자열 이후에 `key=value`로 값을 전달하는 방법으로 키워드 검색, 페이징 등 데이터 조회에 필요한 값들을 전달할 때 사용한다.
* 쿼리스트링은 컴포넌트 내에서 `useSearchParams` 훅을 통해서 사용하여 조회할 수 있다.
  ```js
  // 아래와 같이 URL에 쿼리스트링이 포함된 경우 
  // ?page=1&keyword=react
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const keyword = searchParams.get('keyword');
  ```
### 참고 문헌 : 김민준, [리액트를 다루는 기술 개정판 (2019.08.31)]
