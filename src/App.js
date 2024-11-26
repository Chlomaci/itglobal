
import './App.css';
import Header from "./components/header";
import Menu from './components/Menu';
import Main from "./components/Main";
import Modal from './components/Modal'
import { useSelector } from 'react-redux'

function App() {
    const isModal = useSelector(state => state.main.isModal)
  return (
    <div className="App">
        <Header/>
        <div className="app__content">
            <Menu/>
            <Main/>
        </div>
        {isModal ? <Modal /> : ''}
    </div>
  );
}

export default App;
