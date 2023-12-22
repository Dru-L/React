import React from 'react';
import { Link } from 'react-router-dom';

//NotFoundPage는 페이지를 찾을 수 없을 때 나타나는 페이지이다.

const NotFoundPage = () => {
    return (
        <div>
            <h2>404</h2>
            <p>페이지를 찾을 수 없습니다.</p>
            <Link to="/">홈으로</Link>
        </div>
    );
};

export default NotFoundPage;