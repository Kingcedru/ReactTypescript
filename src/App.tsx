import { useState, useEffect } from "react";
import "./App.css";
import axios, { CanceledError } from "axios";
// import ProductList from "./components/ProductList";
interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/usersx/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

const addUser =()=>{
  const originalUsers =[...users]
  const newUser = {id: 0, name: 'Mosh'}
  setUsers([newUser, ...users])
  axios.post('https://jsonplaceholder.typicode.com/xusers/',newUser)
  .then(res=>setUsers([res.data,...users]))
  .catch(err=>{
    setError(err.message);
    setUsers(originalUsers)
  })
}

const updateUser=(user:User)=>{
  const originalUsers = [...users]
  const updatedUser = {...user,name:user.name+"!"}
  setUsers(users.map(u=> u.id === user.id? updatedUser:u))
  axios.patch('https://jsonplaceholder.typicode.com/users/' + user.id,updateUser)
  .catch(err=>{
    setError(err.message)
    setUsers(originalUsers)
  })
}

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {!error ? (
          users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between">
              {user.name}
              <div>
                <button className="btn btn-outline-secondary mx-1" onClick={()=>updateUser(user)}>Update</button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-danger">{error}</p>
        )}
      </ul>
    </>
  );
}

export default App;
