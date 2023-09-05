import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUser() {
    const response = await fetch('https://645644b92e41ccf16918360b.mockapi.io/user', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const parsedResponse = await response.json();
    setUserList(parsedResponse);
  }

  async function removeUser(id: number) {
    try {
      // start loading
      setLoading(true);
      await fetch(`https://645644b92e41ccf16918360b.mockapi.io/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
      // refetch data
      getUser();
      setLoading(false);
      //hide loading
    } catch (e) {
      alert('something wrong')
    }
  }

  async function addNewUser() {
    try {
      //  await fetch(`https://645644b92e41ccf16918360b.mockapi.io/user`, {
      //   method: 'POST',
      //    headers: {
      //      "Content-Type": "application/json",
      //    },
      //   body: JSON.stringify({
      //     name: 'fake 1',
      //     password: 'fake password 1'
      //   })
      // });

      await axios.post('https://645644b92e41ccf16918360b.mockapi.io/user', {
        name: 'fake 2',
        password: 'fake password 2'
      })
      // refetch data
      getUser();
    } catch (e) {
      alert('something wrong')
    }
  }

  useEffect(() => {
    // call api to get list user
    getUser();
  }, [])


  return (
    <div style={{ }}>
      {/*{loading && <loading />}*/}
      <button onClick={addNewUser}>ADD NEW</button>
      {
        userList.map((user, index) => <div key={index}>
          <p>id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Password: {user.password}</p>
          <button onClick={() => removeUser(user.id)}>Delete</button>
        </div>)
      }
    </div>
  )
}

export default App
