import React from 'react';
import PropTypes from 'prop-types';

//props를 매개값으로도 먼저 받을수있다.
const Student = ({no, name, age}) => {
    // console.log(props);

    // 구조분해할당 사용해서 props에서 no, name, age 값을 받아옴
    // 해당처럼 사용하면 return 구문에서 props.를 사용 안해도됨.
    // const {no, name, age} = props;

    return (
        <p>
            {/* 학번: {props.no}, 이름: {props.name}, 나이:{props.age} */}
            학번: {no}, 이름: {name}, 나이:{age}
        </p>
    );
};

// Student 기본값 설정. 아무것도 값을 입력하지 않았을 때 적용
Student.defaultProps = {
    // no: 0,
    // name: '아무개',
    //필수값으로 받아야하기 떄문에 기본값 삭제.
    age : 0  
};

Student.propTypes = {
    no: PropTypes.number.isRequired, //isRequired 필수값.
    name:PropTypes.string.isRequired,
    age:PropTypes.number
}

export default Student;