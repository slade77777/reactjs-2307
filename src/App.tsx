import './App.css'
import {useState} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
})

type UserType = {
  firstName: string
  lastName: string
  position?: number
}

const FormAdd = ({addUser}: {addUser?: (val: UserType) => void}) => {
  const { register, handleSubmit, watch, resetField, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    addUser?.({firstName: data.firstName, lastName: data.lastName})
    resetField('firstName');
    resetField('lastName');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Form Add</p>
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

const FormEdit = ({userEditing, editUser}: {userEditing?: UserType, editUser: (val: UserType) => void}) => {
  const { register, handleSubmit, watch, resetField, formState: { errors } }
    = useForm({
    resolver: yupResolver(schema),
    defaultValues: userEditing
  });

  const onSubmit = (data: any) => {
    editUser?.({firstName: data.firstName, lastName: data.lastName, position: userEditing?.position})
    resetField('firstName');
    resetField('lastName');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Form Edit</p>
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

const Result = ({userList, editUser}: {userList: Array<UserType>, editUser: (val: number) => void}) => {
  return <div>
    {
      userList.map((user, index) => <div key={index}>
        <p>Firstname: {user.firstName} - LastName: {user.lastName} - <span onClick={() => editUser(index)}>Sửa</span> - Xoá</p>
      </div>)
    }
  </div>
}

function App() {
  const [userList, setUserList] = useState<Array<UserType>>([])
  const [userEdit, setUserEdit] = useState<UserType>()

  function addUser(user: UserType) {
    setUserList([...userList, user])
  }

  function removeUser(firstName: string) {
    setUserList(userList.filter(item => item.firstName !== firstName))
  }

  function editUser(index: number) {
    setUserEdit({...userList[index], position: index})
  }

  function updateUser(user: UserType) {
    setUserEdit(undefined);
    const listUserClone = [...userList];
    listUserClone[user.position] = {
      firstName: user.firstName,
      lastName: user.lastName
    }
    setUserList(listUserClone)
  }

  return (
    <div>
      {userEdit ? <FormEdit userEditing={userEdit} editUser={updateUser} /> : <FormAdd addUser={addUser}/>}
      <Result userList={userList} editUser={editUser} />
    </div>
  )
}

export default App
