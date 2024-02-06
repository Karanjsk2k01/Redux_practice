import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';
const Counter = () => {

  const dispatch = useDispatch()
  const storeValue = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment(5))
  };

  const decrementHandler = () => {

    if (storeValue <= 0) {
      return;
    }

    dispatch(counterActions.decrement(5))
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (<div className={classes.value}>{storeValue}</div>)}
      <div>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>DecrementBy5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
