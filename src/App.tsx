import { useState,useEffect } from "react";
import "./App.css"; 
import axios from "axios";
// import ProductList from "./components/ProductList";
interface User{
  id: number,
  name:string,
}

function App() {
const [users, setUsers] = useState<User[]>([])
const [error, setError] = useState('')
useEffect(()=>{
  axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then(res=>setUsers(res.data))
  .catch(err=>setError(err.message))
},[])
  return (
  <>
  <ul>
    {!error?users.map(user => <li key={user.id}>{user.name}</li>): <p className="text-danger">{error}</p>}
  </ul>
  </>
  );
}

export default App;
