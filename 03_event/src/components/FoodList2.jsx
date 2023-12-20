import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const FoodList2 = () => {
    const [ foods, setFoods] = useState([
            {no: 1, name: '라면'},
            {no: 2, name: '초밥'},
            {no: 3, name: '떡볶이'},
            {no: 4, name: '짬뽕'}
    ]);

    const [foodName, setFoodName] = useState('김밥');
    const foodNameRef = useRef(null);

    const addFood = () => {
        if(foodName ===''){
            alert('음식을 입력해주세요');

            foodNameRef.current.focus();

            return;
        }

        //Spread 연산자 사용해서 다음 id 값을 구하기
        let nextNo = Math.max(...foods.map((food) => food.no))+1;

        setFoods([...foods, {no:nextNo, name:foodName}]);
        setFoodName('');
        foodNameRef.current.focus();
    };

    const removeFood = (foodNo) =>{
        setFoods(foods.filter(food => food.no !== foodNo));
    }


    return (
        <>
            <h3>2. 음식 목록</h3>
            <input
                type="text"
                placeholder='음식을 입력하세요.'
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                ref={foodNameRef}
            />
            <button onClick={addFood}>추가</button>
            <ul>{foods.map((food)=><li key={food.no} onDoubleClick={() =>removeFood(food.no)}>{food.name}</li>)}</ul>
        </>
    );
    
};

export default FoodList2;