import React from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const getAverage = (numbers) => {
    console.log('평균값 계산 중');
    let sum = 0;
    let avg = 0;

    if(numbers.length === 0){
        return 0;
    }

    // return numbers.reduce((a,b) => a+b) / numbers.length;  //reduce()모든 요소들을 사용함
    sum = numbers.reduce((a,b) => a+b);
    avg = sum / numbers.length;
    return avg;
};


// useMemo
// - 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 수행하고 싶을 때 사용하는 Hook이다.
const Average = () => {
    const[list, setList] =useState([]);
    const[number, setNumber] = useState('')
    const numberRef = useRef(null);

    const onChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const onInsert = () =>{
        // console.log([...list, parseInt(number)]);
        setList([...list, parseInt(number)]);
        setNumber('');

        numberRef.current.focus();
    }

    // 매번 화면이 렌더링 될 때마다 평균값을 구하는 함수를 호출하지 않고 값이 변경될 떄 마다 평균값을 구하는 함수를 호출하도록 한다.
    const avg = useMemo(() => getAverage(list),[list]);

    return (
        <div>
            <h3>3. useMemo</h3>

            <input
                type="number"
                placeholder="숫자를 입력하세요."
                value={number}
                onChange={onChangeNumber}
                ref={numberRef}
            />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((number, index) => <li key={index}>{number}</li>)}
            </ul>

            {/* 매번 화면이 렌더링될 때마다 평균값을 구하는 함수를 호출한다. */}
            {/* <p>평균값: {getAverage(list)}</p> */}
            <p>평균값: {avg}</p>
        </div>
    );
};

export default Average;