import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [text, setText] = React.useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function click(event) {
    setText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {text} </h1>
      <form onSubmit={click}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button onClick={click}>Submit</button>
      </form>
    </div>
  );
}

export default App;
