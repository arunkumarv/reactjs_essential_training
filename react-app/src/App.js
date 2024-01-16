import './App.css';
import { useState, useEffect, useReducer, useRef } from "react";

// useEffect
function App4a() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion, secondary]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary])
  return (
    <div className="App">
      <h1>Current emotion is { emotion }</h1>
      <button onClick={() => setEmotion("Sad")}>Sad</button>
      <button onClick={() => setEmotion("Excited")}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("Grateful")}>Grateful</button>
    </div>
  );
}

//useState
function App4b() {
  const [checked, setChecked] = useState(false);
  return (
    <div className='App'>
      <input
        type='checkbox'
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <label>{checked ? 'Checked' : 'Not checked'}</label>
    </div>
  );
}

// useReducer
function App4c() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div className='App'>
      <input
        type='checkbox'
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? 'Checked' : 'Not checked'}</label>
    </div>
  );
}

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  console.log(txtTitle);
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  }
  return (
    <div className='App'>
      <form onSubmit={submit}>
        <input
         ref = {txtTitle}
         type='text'
         placeholder='color title...'
        />
        <input
         type='color' 
         ref={hexColor}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
