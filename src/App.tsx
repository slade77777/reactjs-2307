import './App.css'
import QuestionAndAnswer from "./components/QuestionAndAnswer.tsx";
import {useEffect, useState} from "react";

function App() {
  const [questionOpening, setQuestionOpening] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  console.log(count);

  function checkUsing() {
    setCount(0)
  }

  useEffect(() => {
    window.addEventListener('click', checkUsing)
    return () => window.removeEventListener('click', checkUsing)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      // do something
      setCount(i => i + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (count === 200) {
      alert('ban co dang o day khong?')
      setCount(0)
    }
  }, [count])

  return (
    <div>
      <QuestionAndAnswer question={'cau hoi 1'} answer={'dap an 1'} isOpen={questionOpening === 'cau hoi 1'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 2'} answer={'dap an 2'} isOpen={questionOpening === 'cau hoi 2'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 3'} answer={'dap an 3'} isOpen={questionOpening === 'cau hoi 3'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 4'} answer={'dap an 4'} isOpen={questionOpening === 'cau hoi 4'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 5'} answer={'dap an 5'} isOpen={questionOpening === 'cau hoi 5'} changeOpenQuestion={setQuestionOpening}/>
      <p><span onClick={() => setCount(count - 1)}>- </span>{count}<span onClick={() => setCount(count + 1)}> +</span></p>
    </div>
  )
}

export default App
