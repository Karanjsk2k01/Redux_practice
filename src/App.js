import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'

import { UseSelector, useDispatch, useSelector } from 'react-redux';

function App() {

  const storeValue = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!storeValue ? (<Auth />) : (<UserProfile />)}
      <Counter />
    </>

  );
}

export default App;
