import { useState } from "react";
import "./App.css";
import TodoComponent from "./components/TodoComponent";

function App() {
  const [data, setData] = useState([]);

  function enterHandler(e) {
    if (e.target[0].value === "") {
      return e.preventDefault();
    }
    setData([...data, { value: e.target[0].value, id: Math.random() }]);
    e.target[0].value = "";
    e.preventDefault();
  }
  function dataHandlerFun(vv) {
    data.splice(vv, 1);
    setData([...data]);
    console.log(data);
    console.log(vv);
  }

  return (
    <div className="ajay-fra">
      <form className="first-todo" onSubmit={enterHandler}>
        <input
          type="text"
          placeholder={"Enter for to-do list"}
          className="input-focus"
        ></input>
        <button className="btn">Add</button>
      </form>
      {data.map((value, id) => {
        return (
          <TodoComponent
            veer={value}
            key={id}
            data={data}
            dataHandlerProp={dataHandlerFun}
          />
        );
      })}
    </div>
  );
}

export default App;
