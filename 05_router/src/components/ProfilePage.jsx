import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    // const params = useParams();
    // const id = params.id

    //구조분해할당으로 한번에 쓰기
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const {id, name, phone, email, company} = user;
    const [loading, setLoading] = useState(false);

    // console.log(params);
    console.log(userId);

    const callApi = () => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
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
    //지금 요청은 비동기 요청이기 때문에 그렸다가 조회했다가를 반복함. 그래서 useEffect로 한번만 소환하도록 하는것임.

    if(loading){
        return <h2>로딩중입니다.</h2>
    };

    return (
        <>
            <h2>사용자 정보</h2>  
            {/* 삼항 연산자 */}
        {
            id ? (
            <div>
                <p>사용자 번호 : {id}</p>
                <p>이름: {name}</p>
                <p>이메일 : {email}</p>
                <p>전화번호: {phone}</p>
                <p>회사명: {company? company.name: null}</p>
            </div>
            ):(
            <div>
                <p>존재하지 않는 프로필입니다.</p>
            </div>
            )
        }
        </>
    );
};

export default ProfilePage;