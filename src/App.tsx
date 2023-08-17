import './App.css'
import QuestionAndAnswer from "./components/QuestionAndAnswer.tsx";
import {useState} from "react";

function App() {
  const [questionOpening, setQuestionOpening] = useState<Array<string>>([]);

  // ['cau hoi 2' , 'cau hoi 3']
  function updateOpen(val: string) {
    let newListOpen;

    if (questionOpening.includes(val)) {
      //remove item from array
      newListOpen = questionOpening.filter(item => item !== val)
    } else {
      // add item into array
      newListOpen = [...questionOpening, val]
    }
    // update new data
    setQuestionOpening(newListOpen)
  }

  return (
    <div>
      <QuestionAndAnswer question={'cau hoi 1'} answer={'dap an 1'} isOpen={questionOpening.includes('cau hoi 1')} changeOpenQuestion={updateOpen}/>
      <QuestionAndAnswer question={'cau hoi 2'} answer={'dap an 2'} isOpen={questionOpening.includes('cau hoi 2')}  changeOpenQuestion={updateOpen}/>
      <QuestionAndAnswer question={'cau hoi 3'} answer={'dap an 3'} isOpen={questionOpening.includes('cau hoi 3')}  changeOpenQuestion={updateOpen}/>
      <QuestionAndAnswer question={'cau hoi 4'} answer={'dap an 4'} isOpen={questionOpening.includes('cau hoi 4')}  changeOpenQuestion={updateOpen}/>
      <QuestionAndAnswer question={'cau hoi 5'} answer={'dap an 5'} isOpen={questionOpening.includes('cau hoi 5')}  changeOpenQuestion={updateOpen}/>
    </div>
  )
}

export default App
