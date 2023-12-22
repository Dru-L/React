
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const CommentsPage = () => {
    // useLocation 훅은 location 객체를 반환 한다.
    // const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams();
    // const page = searchParams.get('page');
    // const keyword =searchParams.get('keyword');
    const postId = searchParams.get ('postId');
    const [comments, setComments] = useState([]);
    const[loading, setLoading] = useState(false);

    const callApi = () => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            
            setComments(json);
            setLoading(false);
        });
    }

    useEffect(() => {
        callApi();
    },[]);

    if(loading){
        return <h2><img src={'https://qi-o.qoo10cdn.com/goods_image_big/1/7/6/1/10171141761_l.jpg'}/>로딩 중 입니다..</h2>
    }

    return (
        <>
            <h2>{postId}번 게시글 댓글 목록</h2>
            {/* <p> 쿼리스트링 : {location.search}  </p>
            <p>  page : {page}, keyword : {keyword} </p> 

            <button onClick={() => setSearchParams({page: '2', keyword: 'react-router-dom'})}>쿼리스트링 변경</button> */}
            <table border={1}>
                <thead>
                    <tr>
                        <th width="80px">댓글번호</th>
                        <th width="100px">게시글번호</th>
                        <th>작성자 이메일</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.length !== 0 ? comments.map(comment =>
                        <tr key={comment.id}>
                            <td>{comment.id}</td>
                            <td>{comment.postId}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan="4">조회된 데이터가 없습니다.</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    );
};

export default CommentsPage;