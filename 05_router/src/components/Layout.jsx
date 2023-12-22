import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    // Link 컴포넌트를 사용하지않고 다른 페이지로 이동해야하는 상황에서 사용하는 Hook이다.
    let navigate = useNavigate();

    return (
        <>
            <header>
                <h2>Header 영역</h2>
                {/* 파라미터가 숫자 타입이라면 앞으로 가거나 뒤로 이동한다. */}
                <button onClick={()=>navigate(-1)}>뒤로가기</button>
                {/* 파라미터에 경로를 지정하면 해당하는 경로로 이동한다. */}
                {/* <button onClick={() => navigate('/about')}>소개</button> */}
                {/* {replace:true}는 페이지 이동 시 기록을 남기지 않는다. */}
                <button onClick={() => navigate('/about', {replace:true})}>소개</button>
            </header>   
            <main>
                <Outlet />
            </main>
            <footer>
                <h2>Footer영역</h2>
            </footer>
        </>
    );
};

export default Layout;