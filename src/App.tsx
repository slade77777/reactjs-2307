import './App.css'
import {useRef, useState} from "react";

type UserType = {
  firstName: string
  lastName: string
}

const Form = ({addUser}: {addUser: (val: UserType) => void}) => {
  const [firstName, setFirstName] = useState('');
  const lastNameRef  = useRef(null);

  return (
    <div>
      <div>
      <label>First Name: </label>
      <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div>
      <label>Last Name: </label>
      <input type='text' ref={lastNameRef} />
      </div>
      <button onClick={() => {
        addUser({firstName, lastName: lastNameRef.current?.value});
        setFirstName('');
        lastNameRef.current.value = '';
      }}>Send</button>
    </div>
    )
}

const Result = ({userList}: {userList: Array<UserType>}) => {
  return <div>
    {
      userList.map((user, index) => <div>
        <p>Firstname: {user.firstName} - LastName: {user.lastName}</p>
      </div>)
    }
  </div>
}

function App() {
  const [userList, setUserList] = useState<Array<UserType>>([])

  function addUser(user: UserType) {
    setUserList([...userList, user])
  }

  return (
    <div>
      <Form addUser={addUser} />
      <Result userList={userList} />
    </div>
  )
}

export default App
