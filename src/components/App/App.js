import { CounterTimer } from '../CounterTimer/CounterTimer';
import { UserList } from '../UserList/UserList';
import { WindowSize } from '../WindowSize/WindowSize';
function App() {
  return (
    <div className='App'>
      <CounterTimer />
      <UserList />
      <WindowSize />
    </div>
  );
}

export default App;
