import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <>
            <h2>홈 페이지</h2>   
            <p>가장 먼저 보여지는 페이지 입니다.</p>

            <ul>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/profile/1">1번 사용자 프로필</Link></li>
                <li><Link to="/profile/2">2번 사용자 프로필</Link></li>
                <li><Link to="/profile/3">3번 사용자 프로필</Link></li>
                <li><Link to="/comments?postId=1">1번 게시글 댓글 조회</Link></li>
                <li><Link to="/comments?postId=2">2번 게시글 댓글 조회</Link></li>
                <li><Link to="/post/1">1번 게시글</Link></li>
            </ul>
        </>

    );
};

export default HomePage;