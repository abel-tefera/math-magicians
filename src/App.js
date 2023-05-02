import {
  Routes, Route, Link, BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Welcome from './components/Welcome';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Welcome />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="quotes" element={<Quotes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
