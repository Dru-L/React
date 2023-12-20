import { useReducer } from 'react';
// import { useState } from 'react';
//useReducer
// -컴포넌트 상황에 따라 상태를 다른값으로 업데이트해 주고 싶을 때 사용하는 Hook이다.

//reducer 함수는 액션 값을 전달 받아 새로운 상태는 반환하는 함수이다.
const reducer = (state, action) => {
    // state:현재 상태, action: action에 해당하는 작업을 수행해서 새로운 상태 반환.
    switch(action.type){
        case 'INCREMENT' :
            return {count: state.count + 1};
        case 'DECREMENT' :
            return {count: state.count - 1};
        default:
            return state;
    }
}

const Counter = () => {
    // let [count, setCount] = useState(1);
    const[state, dispatch] = useReducer(reducer, {count: 0});

    // const countPlus = () => {
    //     if (count >= 20){
    //         alert('그만 올려');
    //         return;
    //     }
    //     setCount(count+1)
    // };

    // const countMinus = () => {
    //     if (count <= 0){
    //         alert('그만 내려');
    //         return;
    //     }
    //     setCount(count-1)
    // }

    return (
        <>
            <h3>1.useReducer</h3>

            <p>현재 카운트의 값은 {state.count} 입니다.</p>

            {/* <button onClick={countPlus}>+1 증가</button> */}
            {/* <button onClick={countMinus}>-1 감소</button> */}

            {/* dispatch 함수에 파라미터로 액션 값을 넣어주면 reducer 함수가 호출된다. */}
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1 증가</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1 감소</button>
        </>
    );
};

export default Counter;