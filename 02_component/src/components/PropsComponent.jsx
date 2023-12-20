import React from 'react';
import Student from './Student';
import Product from './Product';

// 부모 컴포넌트에서 전달해 주는 속성은 props로 받는다.
const PropsComponent = (props) => {
    // const product = {
    //     no: 1,
    //     name: '아이폰 12 미니',
    //     amount: 4
    // }

    // 서버에서 데이터를 요청을 하면 데이터가 보통 배열 형태로 전송이 온다. 이럴때는 배열로 처리를 한다.
    // 배열 형태로 데이터 받아서 출력하기
    const products =[
        {no: 1, name: '아이폰 12 미니', amount: 4},
        {no: 2, name: '아이폰 15', amount: 24},
        {no: 3, name: '아이폰 15 Pro', amount: 47},
    ];

    return (
        <div>
            <h3>1. props</h3>
            {/* <p>안녕하세요. 제 이름은 {props.name}입니다.</p>
            <p>학번은 {props.no}번, 전공은 {props.children} 입니다.</p> */}
            <h4>학생 목록</h4>
            {/* 속성 지정 시(Student.propTypes) 잘못된 타입의 데이터를 넘겨주면 개발자 도구에서 경고 메세지가 출력된다. */}
            <Student no={1} name="홍길동" age={25}/>
            <Student no={2} name="이몽룡" age={20}/>
            {/* 필수로 전달해야 하는 속성을 생략하면 새발자 도구에서 경고 메세지가 출력된다. */}
            <Student no={3} name='성춘향'/>

            <h4>상품목록</h4>
            {/* <Product p={product}/> */}
            {/* 객체를 직접 입력해도 출력 가능 */}
            {/* <Product p={{no:2, name:'아이폰15', amount:26}}/> */}

            {/* 배열 형태로 데이터 받아서 출력하기*/}
            {/* 배열의 요소를 map()를 사용하여 <Product /> 컴포넌트를 요소로 가지는 배열을 새로 생성한다. */}
            {
                // products.map((product) => {
                //     return <Product p={product}/>;
                // })
                products.map((product) => <Product key={product.no} p={product}/>) //함수가 1줄이라 {return } 생략 가능
            }
            {/* 반복해서 컴포넌트를 그릴 때는 식별 할 수있는 중복되지 않는 키값 필요. */}
        </div>
    );
};


export default PropsComponent;