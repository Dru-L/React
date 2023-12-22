import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostPage = () => {
    const {postId} = useParams();
    const [user, setUser] = useState({});
    const {userId, id, title, body} = user;
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    console.log(postId);

    const callApi = () =>{
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setUser(json);
            setLoading(false);
        });
    }

    useEffect(() =>{
        callApi();
    },[]);

    return (
        <>
            <h2>게시글 상세 조회</h2>
            {/* <div>
                <p>{id}</p>
                <p>{title}</p>
                <p>{userId}</p>
                <p>{body}</p>
            </div> */}
            
            <table border="1px" style={{borderCollapse:'collapse', textAlign:'center'}}>
                <thead>
                    <tr>
                        <th width="50px">번호</th>
                        <td width="20px">{id}</td>
                        <th width="50px">제목</th>
                        <td width="200px">{title}</td>
                        <th width="70px">아이디</th>
                        <td width="20px">{userId}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>내용</th>
                        <td colSpan={'5'}>{body}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            {/* <button onClick={() => navigate(`/comments?postId=${postId}`)}>댓글 목록 조회</button> */}
            <button onClick={() => navigate(`/post/${postId}/comments`)}>댓글 목록 조회</button>
        </>
    );
};

export default PostPage;