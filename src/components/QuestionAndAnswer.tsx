import {useEffect} from "react";

const QuestionAndAnswer = ({question, answer, isOpen, changeOpenQuestion} :
                             {question: string, answer: string, isOpen: boolean, changeOpenQuestion: (val: string) => void}) => {

  useEffect(() => {

  }, [isOpen])

  return (
    <div style={{border: '1px solid white', margin: 10, padding: 10}}>
      <p>{question} <span onClick={() => changeOpenQuestion(question)} style={{marginLeft: 20, cursor: 'pointer'}}>{isOpen ? 'X' : '+'}</span></p>
      {
        isOpen && <p>{answer}</p>
      }
    </div>
  )
}

export default QuestionAndAnswer;
