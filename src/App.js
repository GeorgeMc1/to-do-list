import {useState} from "react";
import './App.css';
import ListItem from "./components/ListItem";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["test"]);
  const getInput = (e) => {
    setInput(e.target.value);
  }
  const addItem = () => {
    if (input !== ""){
      let clone = [...list];
      clone.push(input);
      setList(clone);
      setInput("");
    }
  }
  const removeItem = (item) => {
    let clone = [...list];
    clone.splice(item, 1);
    setList(clone);
  }
  const enterKey = (e) => {
    if (e.key === "Enter"){
      addItem();
    }
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div id="inputBox">
        <input id="input" onChange={getInput} onKeyDown={enterKey} value={input}></input>
        <button onClick={addItem}>+</button>
      </div>
      <div id="items">
        {list.map((item, i) => {
          return <ListItem key={i} label={item} click={() => removeItem(i)} enter={enterKey}/>
        })}
      </div>
    </div>
  );
}

export default App;