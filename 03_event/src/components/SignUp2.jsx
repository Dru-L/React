import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const SignUp2 = () => {
    // 네 개의 입력을 한번에 처리하기 위해서 useState()의 초깃값으로 객체를 지정한다.
    const [form, setForm] = useState({
        id: 'hong123',
        password: '',
        name: '홍길동',
        address: '서울특별시'
    });
    const {id, password, name, address}= form;
    const idRef = useRef(null);

    const onChangeForm = (event) =>{
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log({...form, [event.target.name]: event.target.value});

        //기존 form 을 복사한 뒤 원하는 값을 덮어씌운다.
        // 객체 안에서 key을 []로 감싸면 그 안에 넣은 실제 속성 값이 key값으로 사용된다.
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };



    const printValue = () => {
        window.alert(`아이디: ${id}, 이름: ${name}, 주소: ${address}`);

        setForm({
            id: '',
            name: '',
            password: '',
            address:''
        });
        
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
                value={id}
                onChange = {onChangeForm}
                ref={idRef}
                name = "id"
            />

            <br />

            <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange = {onChangeForm}
                value={password}
                name="password"
            />

            <br />

            <input
                type="text"
                placeholder="이름을 입력하세요"
                onChange = {onChangeForm}
                value={name}
                name="name"
            />

            <br />

            <input
                type="text"
                placeholder="주소를 입력하세요."
                onChange = {onChangeForm}
                value={address}
                onKeyUp={onKeyUpAddress} // 키가 눌렸을 때
                name="text"
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

export default SignUp2;