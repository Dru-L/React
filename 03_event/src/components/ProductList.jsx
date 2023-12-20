import React, { useState } from 'react';
import Products from './Products';
import { useRef } from 'react';

const ProductList = () => {
    const nameRef = useRef(null);
    const[products, setProducts] = useState([
        {code:1, name:'냉장고', price:3000000},
        {code:2, name:'세탁기', price:5000000},
        {code:3, name:'컴퓨터', price:2000000}
    ]);
    const [form, setForm] = useState({
        code: 4 ,
        name:'',
        price:''
    });
    const {code, name, price} = form;

    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(window.confirm('상품을 등록할까요?')){ //confirm의 경우 window를 반드시 써주어야한다.
            setProducts([...products, form]);
            setForm({
                code: code+1,
                name:'',
                price:''
            });

            nameRef.current.focus();
        }
    }

    const onReset = () => {
        setForm({
            ...form,
            name:'',
            price:''
        });

        nameRef.current.focus();
    };

    const onDelete = (code) =>{
        if(window.confirm(`${code}번 상품을 삭제할까요?`)){
            setProducts(products.filter(product => product.code !== code));
        }
    };

    return (
        <>
            <h3>3. 상품 등록</h3>

            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="상품코드를 입력하세요."
                    value={code}
                    onChange={onChangeForm}
                    name="code"
                />

                <br />

                <input 
                    type="text"
                    placeholder="상품 이름을 입력하세요."
                    value={name}
                    onChange={onChangeForm}
                    name="name"
                    ref={nameRef}
                />

                <br />

                <input 
                    type="text"
                    placeholder="상품 가격을 입력하세요."
                    value={price}
                    onChange={onChangeForm}
                    name="price"
                />    

                <br /><br />    

                <input type="submit"  value={"상품 등록"}  style={{'margin-right':'10px'}}/>      
                <input type="reset" onClick={onReset} value={"다시 입력"} />      

            </form>

            <Products products={products} del={onDelete}/>
        </>
    );
};

export default ProductList;