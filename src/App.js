import './App.css';
import Header from './components/Header/Header';
import TodoCard from './common/TodoCard/TodoCard';
import Footer from './components/Footer/Footer';
import Active from './components/Active/Active';
import Complate from './components/Complated/Complated';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" component={TodoCard}/>
        <Route path="/active" component={Active}/>
        <Route path="/complate" component={Complate}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
