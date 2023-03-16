import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './layouts/Blog/Blog'
import Redaction from './layouts/Redaction/Redaction'
import Navigation from './components/Navigation/Navigation';
import './assets/App.scss';
import Article from './layouts/Article/Article';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' Component={Blog} />
          <Route path='/redaction' Component={Redaction} />
          <Route path='/article/:id' Component={Article} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
