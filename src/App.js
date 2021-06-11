import './App.css';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import TodoCard from './components/TodoCard/TodoCard';

function App() {
  return (
    <div className="App">
       <Header />
       <TodoCard/>
       <Footer />
    </div>
  );
}
export default App;

