import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
