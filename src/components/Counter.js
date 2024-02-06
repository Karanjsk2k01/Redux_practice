import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch()
  const storeValue = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ "type": "increment" })
  };

  const decrementHandler = () => {

    if (storeValue <= 0) {
      return;
    }

    dispatch({ "type": "decrement" })
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{storeValue}</div>
      <div>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
