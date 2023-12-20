import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// useEffect
// 컴포넌트가 랜더링 될 떄마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다.'


const Info = () => {
    const [form, setForm] = useState({
        name: '홍길동',
        nickname: '의적'
    })

    const{name, nickname} = form;

    const onChangeForm = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // //컴포넌트가 렌더링 될 때마다 실행된다.
    // useEffect( () => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name, //name: name
    //         nickname //nickname: nickname
    //     })
    // })

    // 맨 처음 렌더링 될 때만 실행됩니다.
    // useEffect( () => {
    //     console.log('맨 처음 렌더링 될 때만 실행됩니다.');
    // },[])

    //name 값이 변경될 때마다 실행된다.
    useEffect( () => {
        console.log({name,nickname});

        return() => {
            //name값이 변경되기 전에 수행해야 될 작업이 있을때 사용.
            //name 값이 업데이트 되기 직전의 값을 보여준다.
            console.log({name});
        };
    },[name]) //[변수명] : 특정 값이 변경될때마다 실행하고싶으면 변수명을 배열안에 넣는다.

    return (
        <div>
            <h3>2. useEffect</h3>

            <div>
                <input
                    type="text" 
                    placeholder="이름을 입력하세요."
                    value={name}
                    name="name"
                    onChange={onChangeForm}
                />

                <br />

                <input
                    type="text" 
                    placeholder="별명을 입력하세요."
                    value={nickname}
                    name="nickname"
                    onChange={onChangeForm}
                />
            </div>

            <h4>
                이름은 : {name}
            </h4>
            <h4>
                별명은 : {nickname}
            </h4>
        </div>
    );
};

export default Info;