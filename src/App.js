import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PostContext from './contexts/PostContext'
import AppRouter from './routers/AppRouters';

function App() {
  return (
    <div className="App-container">
     <AppRouter />
    </div>
  );
}

export default App;
