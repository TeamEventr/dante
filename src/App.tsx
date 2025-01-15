import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>App Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
