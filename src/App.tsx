import './App.css'
import QuestionAndAnswer from "./components/QuestionAndAnswer.tsx";
import {useState} from "react";

function App() {
  const [questionOpening, setQuestionOpening] = useState<string>('');

  console.log(questionOpening);
  return (
    <div>
      <QuestionAndAnswer question={'cau hoi 1'} answer={'dap an 1'} isOpen={questionOpening === 'cau hoi 1'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 2'} answer={'dap an 2'} isOpen={questionOpening === 'cau hoi 2'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 3'} answer={'dap an 3'} isOpen={questionOpening === 'cau hoi 3'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 4'} answer={'dap an 4'} isOpen={questionOpening === 'cau hoi 4'} changeOpenQuestion={setQuestionOpening}/>
      <QuestionAndAnswer question={'cau hoi 5'} answer={'dap an 5'} isOpen={questionOpening === 'cau hoi 5'} changeOpenQuestion={setQuestionOpening}/>
    </div>
  )
}

export default App
