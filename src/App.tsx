
import "./App.css";
import Exercise2 from "./components/Exercise2";

function App() {
  return (
    <>
     <Exercise2/>

import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  
const handleSelectItem = (item:string)=>{
  console.log(item)
}

  return (
    <>
      <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
    </>
  );
}

export default App;
