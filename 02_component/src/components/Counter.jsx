import React, { useState } from 'react';

const Counter = () => {
    // let count = 0;
    let [count, setCount] = useState(10);
    let [color, setColor] = useState('black');
    //state. 내부에서 바뀔수 있는 값. count: 현재 값, setCount : 계산식, useState(초기값)

    const onIncrease = () => {
        //count = count + 1
        setCount(count + 1);
        setColor('green');
    };

    const onDecrease = () => {
        setCount(count - 1);
        setColor('red');
    }

    const onReset = () => {
        setCount(parseInt(Math.random()*100) +1);
        setColor('black')
    }

    return (
        <div>
            <p>카운트 : <span style={{color: color, fontWeight: 'bold'}}>{count}</span></p>
            <button onClick={onIncrease}>증가</button>
            <button className='ml-3' onClick={onDecrease}>감소</button>
            <button className='ml-3' onClick={onReset}>초기화</button>
        </div>
    );
};

export default Counter;