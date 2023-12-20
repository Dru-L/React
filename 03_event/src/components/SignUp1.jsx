import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const SignUp1 = () => {
    const [id, setId] = useState('ismoon');
    const [password, setPassword] = useState('');
    const [ name, setName] = useState('홍길동');
    const [address, setAddress] = useState('서울특별시');
    // 리액트에서 id 속성을 사용하는 것을 지양한다.(동일한 컴포넌트 사용시 중복)
    // 리액트에서는 컴포넌트마다 유일한 아이디를 주기 위해서 ref를 사용한다.
    const idRef = useRef(null);

    const onChangeId = (event) => {
        // console.log(event.target);
        setId(event.target.value);
    };
    
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    };
    
        const onChangeName = (event) => {
            setName(event.target.value);
        };

    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    };

    const printValue = () => {
        window.alert(`아이디: ${id}, 이름: ${name}, 주소: ${address}`);

        console.log(idRef);

        setId('');
        setPassword('');
        setName('');
        setAddress('');
        // 컴포넌트가 여러개 일때 현재 컴포넌트의 ref가 참조하는 요소를 가져온다.
        idRef.current.focus();
    }

    const onKeyUpAddress = (event) => {
        // console.log(event.key);
        // console.log(event.keyCode);
        // console.log(event.target.value);

        if(event.key === 'Enter'){
            printValue();
        }
    };


    return (
        <>
            <h3>1. 회원 가입</h3>

            <input
                type="text"
                placeholder="아이디를 입력하세요."
                onChange={onChangeId}
                value={id}
                id="userId"
                //state 값은 set을 이용하지 않으면 변경되지않음.
                ref={idRef}
            />

            <br />

            <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange = {onChangePassword}
                value={password}
            />

            <br />

            <input
                type="text"
                placeholder="이름을 입력하세요"
                onChange = {onChangeName}
                value={name}
            />

            <br />

            <input
                type="text"
                placeholder="주소를 입력하세요."
                onChange={onChangeAddress} // 값이 변경될 때
                value={address}
                onKeyUp={onKeyUpAddress} // 키가 눌렸을 때
            />

            <br /><br />

            <button onClick={printValue}>회원 가입</button>

            <h5>아이디 : {id}</h5>
            <h5>비밀번호 : {password}</h5>
            <h5>이름 : {name}</h5>
            <h5>주소 : {address}</h5>
        </>
    );
};

export default SignUp1;