import React from 'react';

const FoodList1 = () => {
    // const foods = ['라면', '초밥', '떡볶이', '짬뽕']
    const foods = [
        {no: 1, name: '라면'},
        {no: 2, name: '초밥'},
        {no: 3, name: '떡볶이'},
        {no: 4, name: '짬뽕'}
    ];
    return (
        <>
            <h3>2. 음식 목록</h3>
            {/* 배열의 요소를 map() 메소드를 사용하여 jsx 코드로 된 배열을 새로 생성한다. */}
            {/* <ul>{foods.map((food)=><li>{food}</li>)}</ul> */}

            {/* 배열을 반복해서 컴포넌트를 그릴 때는 식별 할 수 있는 키를 지정해야한다. */}
            {/* <ul>{foods.map((food, index)=><li key={index}>{food}</li>)}</ul> */}

            {/* index 값을 사용하는 것 보다 고유한 값을 만들어서 key를 지정하는것이 더 효율적이다 */}
            <ul>{foods.map((food, index)=><li key={food.no}>{food.name}</li>)}</ul>

        </>
    );
};

export default FoodList1;