import {memo} from 'react'

const PureComponent = ({questionOpening} : {questionOpening: string}) => {
  console.log('pure component rerender')
  return <div>
    <p>cau hoi dang mo: {questionOpening}</p>
    this is not pure component
  </div>
}

export default memo(PureComponent)
