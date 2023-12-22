import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([
    {no: 1, title: '홍길동전', author: '홍길동'},
    {no: 2, title: '자바의 정석', author: '남궁성'},
    {no: 3, title: '파피용', author: '베르나르 베르베르'}
  ]);

  const addBook = (book) => {
    setBooks([ ...books, book ]);
  };

  const deleteBook = (bookNo) => {
    // if(window.confirm(`${bookNo}번 책을 삭제할까요?`)){
    //   setBooks(books.filter((book)=>{
    //     return book.no !== bookNo;
    //   }));
    // }
    if(window.confirm(`${bookNo}번 책을 삭제할까요?`)){
      setBooks(books.filter((book)=>book.no !== bookNo));
    }
  }


  return (
    <>
      <header>
        <div className="container">
          <div className="box"><Link to ="/">홈으로</Link></div>
          <div className="box"><Link to ="/books">도서 목록</Link></div>
          <div className="box"><Link to ="/addBook">도서 등록</Link></div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/books" element={<BookListPage books={books} del={deleteBook}/>}/>
        <Route path="/addBook" element={<AddBookPage add={addBook}/>}/>
      </Routes>
    </>
  );
};

const HomePage = () => {
  return(
    <main>
      <h2>Home</h2>
    </main>
  );
};

const BookListPage = ({books, del}) => {
  console.log(books);

  return(
    <main>
      <h2>도서 목록</h2>

      <table border={"1"} style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>도서 번호</th>
          <th>도서 이름</th>
          <th>도서 저자</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book)=>
          <tr key={book.no}>
            <td>{book.no}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td><button onClick={()=>del(book.no)}>삭제</button></td>
          </tr>
        )}
      </tbody>
    </table>

    </main>
  );
};

const AddBookPage = ({add}) => {
  const [form, setForm] = useState({
    no: '',
    title: '',
    author: ''
  });
  const {no, title, author} = form;

  const onChangeForm = (event) => {
    const key = event.target.name;
    const value = (key === 'no') ? parseInt(event.target.value) : event.target.value; //문자를 숫자타입으로 변환하여 전달

    setForm({...form, [key]: value});
  };

  const onReset = () => {
    setForm({
      no: '',
      title: '',
      author: ''
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동)

    if(window.confirm('도서를 등록할까요?')){
      add(form);
      alert('도서 등록이 완료되었습니다.')
      setForm({
        no: '',
        title: '',
        author: ''
        });
    }
  };

  return(
    <main>
      <h2>도서 등록</h2>

      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="도서 번호를 입력하세요."
          value={no}
          name ="no"
          onChange={onChangeForm}
        />

        <br/>

        <input 
          type="text"
          placeholder="도서 제목을 입력하세요."
          value={title}
          name ="title"
          onChange={onChangeForm}
        />

        <br/>

        <input 
          type="text"
          placeholder="도서 저자를 입력하세요."
          value={author}
          name ="author"
          onChange={onChangeForm}
        />

        <br/><br/>

        <input type="submit" value="도서 등록" />
        <input type="reset" value="다시 입력" onClick={onReset} style={{'marginLeft':'10px'}}/>

      </form>
    </main>
  );
};

export default App;
