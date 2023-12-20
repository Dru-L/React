import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const callApi = () =>{
        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setUsers(json)
            setLoading(false);
        });
    };
    
    useEffect(() => {
        callApi();
    },[]);

    if(loading){
        return <h2>로딩중 입니다...</h2>
    }

    return (
        <div>
            <h3>4.사용자 목록</h3>

            {users.map((user)=>
                <div key={user.id}>
                    <h5>{user.name}</h5>
                    <h5>{user.email}</h5>
                    <h5>{user.phone}</h5>
                </div>
            )}
        </div>
    );
};

export default Users;