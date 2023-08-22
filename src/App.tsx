import './App.css'
import {useRef, useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstName: yup.string().required().email(),
  lastName: yup.string().required(),
})

type UserType = {
  firstName: string
  lastName: string
}

const Form = ({addUser}: {addUser: (val: UserType) => void}) => {
  const { register, handleSubmit, watch, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    addUser({firstName: data.firstName, lastName: data.lastName})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>First Name: </label>
      <input type='text' {...register('firstName')}  />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
      <label>Last Name: </label>
      <input type='text' {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <button type="submit">Send</button>
    </form>
    )
}

const Result = ({userList}: {userList: Array<UserType>}) => {
  return <div>
    {
      userList.map((user, index) => <div key={index}>
        <p>Firstname: {user.firstName} - LastName: {user.lastName} - Xoá</p>
      </div>)
    }
  </div>
}

function App() {
  const [userList, setUserList] = useState<Array<UserType>>([])

  function addUser(user: UserType) {
    setUserList([...userList, user])
  }

  function removeUser(firstName: string) {
    setUserList(userList.filter(item => item.firstName !== firstName))
  }

  return (
    <div>
      <Form addUser={addUser} />
      <Result userList={userList} />
    </div>
  )
}

export default App
