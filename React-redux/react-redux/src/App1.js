import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
        <h1>{ props.value }</h1>
        <button onClick={ props.onIncrement }>
          增加
        </button>
        <button onClick={ props.onDecrement }>
          减少
        </button>
    </div>
  );
}

export default App;
