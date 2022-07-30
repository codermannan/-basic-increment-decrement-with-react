import { useState } from "react";
import styles from './App.module.css';

function App() {

  let [count,setCount] = useState(0);
  const cardValues = [17,20,30,40,50];
  const [pickedValue, setPickedValue] = useState(null)
  //console.log(pickedValue);
  const handleIncrement = (num) => {
    //alert('called');
    setCount((prevCount)=>prevCount+num);
  }

  const handleDecrement = (num) => {
    setCount((prevCount) => prevCount - num);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <>
    <div className="container">
        <h2>Count : {count}</h2>
        <button onClick={() => handleIncrement(5)}>Increment</button>
        <button onClick={() => handleDecrement(5)}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    <IsOddorEvent count={count} pickedValue={pickedValue}/>
    <RandomCard cardValues={cardValues} setPickedValue={setPickedValue} />
    </>
  );
}

const IsOddorEvent = ({count, pickedValue}) => { //onsole.log("pickedValue",pickedValue);
  //return <h3>Number is {count % 2 === 0 ? 'Even':'Odd'}</h3>
  const oddOrEven = pickedValue && pickedValue % 2 ===0 ? 'even':'odd';

  return <h3>Number is {pickedValue && 
    (
      <span className={oddOrEven === 'even' ? styles.even : styles.odd}>{oddOrEven}</span>
    )
  } </h3>
}

function RandomCard({ cardValues, setPickedValue }) {
  return (
    <div>
      {cardValues.map((cardValue, index) => {
        return (
          <div
           className={styles.box}
            key={index}
            onClick={() => setPickedValue(cardValue)}
          >
            {cardValue}
          </div>
        )
      })}
    </div>
  )
}

export default App;
