import './App.css';
import { RegisterPage, DashboardPage } from './pages'

function App() {

  return (
    <>
      <div className='App'>
        <div className='App-header'>
          <RegisterPage />
          {/* <DashboardPage /> */}
        </div>
      </div>
    </>
  );
}

export default App;