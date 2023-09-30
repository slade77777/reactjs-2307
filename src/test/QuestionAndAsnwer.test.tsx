import '@testing-library/jest-dom'
import {render, fireEvent} from "@testing-library/react"
import QuestionAndAnswer from "../components/QuestionAndAnswer.tsx";

test('demo', () => {
  expect(true).toBe(true)
})

test("test match snapshot", () => {
  const renderResult = render(<QuestionAndAnswer answer={'test string'} changeOpenQuestion={(val: string) => console.log(val)} isOpen
                            question={'test question'}/>)
  expect(renderResult).toMatchSnapshot()
})

test("test render text correctly when open", async () => {
  const questionText = 'test question'
  const renderResult = render(<QuestionAndAnswer answer={'test string'}
                                                 changeOpenQuestion={(val: string) => console.log(val)}
                                                 isOpen={true}
                                                 question={questionText}/>)
  const question = await renderResult.findAllByText(questionText)
  expect(question).toBeTruthy()
  const answer = await renderResult.queryByText('test string')
  expect(answer).toBeTruthy()
})

test("test render text correctly when close", async () => {
  const questionText = 'test question'
  const renderResult = render(<QuestionAndAnswer answer={'test string'}
                                                 changeOpenQuestion={(val: string) => console.log(val)}
                                                 isOpen={false}
                                                 question={questionText}/>)
  const question = await renderResult.findAllByText(questionText)
  expect(question).toBeTruthy()
  const answer = await renderResult.queryByText('test string')
  expect(answer).toBeNull()
})

test("test render text correctly when close", async () => {
  const questionText = 'test question'
  const renderResult = render(<QuestionAndAnswer answer={'test string'}
                                                 changeOpenQuestion={(val: string) => console.log(val)}
                                                 isOpen={false}
                                                 question={questionText}/>)
  const question = await renderResult.findAllByText(questionText)
  expect(question).toBeTruthy()
  const answer = await renderResult.queryByText('test string')
  expect(answer).toBeNull()
})

test("test render show/hide answer", async () => {
  const questionText = 'test question'
  const answerText = 'answer string'
  const changeOpenQuestion = jest.fn();
  const renderResult = render(<QuestionAndAnswer answer={'answer string'}
                                                 changeOpenQuestion={changeOpenQuestion}
                                                 isOpen={true}
                                                 question={questionText}/>)
  const question = await renderResult.findAllByText(questionText)
  expect(question).toBeTruthy()
  const answer = await renderResult.queryByText(answerText)
  expect(answer).toBeTruthy()
  fireEvent.click(renderResult.getByText('X'))
  expect(changeOpenQuestion).toHaveBeenCalled();
})
