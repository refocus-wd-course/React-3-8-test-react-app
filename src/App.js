import './App.css';
import Navbar from './Navbar';
import Modal from './Modal';
import Counter from './Counter';

function App() {
    // parent component
    return (
        <div className='App'>
            {/* child component */}
            {/* <Navbar />
            <Modal message='Are you sure?' /> */}
            <Counter />
        </div>
    );
}

export default App;
