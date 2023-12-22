import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [member, setMember] = useState([
    {no: 1, userId: 'dfkwjl', userName:'홍길동', password:'1234', like:0},
    {no: 2, userId: 'achuu2', userName:'성춘향', password:'0000', like:0},
    {no: 3, userId: 'powerfulman', userName:'임꺽정', password:'a1092', like:0}
  ]);

  const deleteMember = (memberNo) => {
    if (window.confirm(`${memberNo}번 회원을 삭제하시겠습니까?`)){
        setMember( member.filter((m) => m.no !== memberNo));
    }
  };

  const addMember = (m) => {
    setMember([ ...member, m]);
  }

  const likeUp = (memberNo) =>{
    setMember({like: memberNo.like+1});
  }

  // const likeDown = () => {
  //   if(like <= 0){
  //     alert('0보다 작을 수 없습니다.');
  //     return;
  //   }
  //   setMember(like-1);
  // }

  return (
    <>
      <header>
        <div><Link to ="/">홈으로</Link></div>
        <div><Link to ="/memberList">회원 목록</Link></div>
        <div><Link to ="/addMember">회원 추가</Link></div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/memberList" element={<MemberListPage member={member} del={deleteMember} up={likeUp}/>}/>
        <Route path="/addMember" element={<AddMember add={addMember}/>}/>
      </Routes>
      
    </>
  );
};

const HomePage = () => {

  return(
    <main>
      <h2>회원 관리 메인페이지</h2>
    </main>
  );
}

const MemberListPage = ({member, del, up}) =>{

  

  return(
    <main>
      <h2>회원 목록</h2>
      <table border={"1"} style={{borderCollapse:'collapse',textAlign:'center'}}>
        <thead>
          <tr>
            <th width="120px">회원 번호</th>
            <th width="120px">회원 이름</th>
            <th width="160px">회원 아이디</th>
            <th width="160px">회원 비밀번호</th>
            <th width="120px">삭제</th>
            <th width="120px">추천 수</th>
          </tr>
        </thead>
        <tbody>
          {member.map((m)=>
            <tr key={m.no}>
              <td>{m.no}</td>
              <td>{m.userName}</td>
              <td>{m.userId}</td>
              <td>{m.password}</td>
              <td><button onClick={()=>del(m.no)}>삭제</button></td>
              <td>
                {m.like}<br/>
                <button onClick={()=>up(m.no)}>추천</button>
                <button >비추천</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};


const AddMember = ({add}) => {
  const[form, setForm] = useState({
    no:'',
    userId:'',
    userName:'',
    password: ''
  });
  const {no, userId, userName, password} = form;

  const onChangeForm = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setForm({...form, [key]: value});
  }

  const onSubmit= (event) =>{
    event.preventDefault();

    if(window.confirm('등록하시겠습니까?')){
      add(form);
      alert('등록이 완료되었습니다.')
      setForm({
        no:'',
        userId:'',
        userName:'',
        password: ''
      })
    };
  }

  const onReset = () =>{
    setForm({
      no:'',
      userId:'',
      userName:'',
      password: ''
    });
  };

  return(
    <main>
      <h2>회원 추가</h2>

      <form onSubmit={onSubmit}>
        <lable id="no">회원 번호</lable>
        <input
          type="text"
          placeholder="회원번호를 입력하세요."
          value={no}
          name="no"
          onChange={onChangeForm}
        />
        <br/>
        <lable id="userName">회원 이름</lable>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          value={userName}
          name="userName"
          onChange={onChangeForm}
        />
        <br/>
        <lable id="userId">회원 아이디</lable>
        <input
          type="text"
          placeholder="아이디를 입력하세요."
          value={userId}
          name="userId"
          onChange={onChangeForm}
        />
        <br/>
        <lable id="password">회원 비밀번호</lable>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          name="password"
          onChange={onChangeForm}
        />

        <br /><br />

        <input type="submit" value="등록" />
        <input type="reset" value="다시 입력" onClick={onReset} style={{'marginLeft':'10px'}}/>
      </form>
    </main>
  );
};

export default App;
