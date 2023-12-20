import React from 'react';

const Product = (props) => {
    console.log(props);

    const{no, name, amount} = props.p;

    return (
        <p>
            {/* props에 값이 아니라 객체가 들어있기때문에 .p로 값으로 한번 더 들어간다. 매개값으로 바로 못받음*/}
            {/* 상품코드 : {props.p.no}, 상품명 : {props.p.name}, 재고 : {props.p.amount} */}
            상품코드 : {no}, 상품명 : {name}, 재고 : {amount}
        </p>
    );
};

export default Product;