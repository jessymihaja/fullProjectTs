import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import FruitList from './component/FruitLisst';
import Header from './page/header';
import Formulaire from './page/formulaire';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './page/error404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/fruits' element={<FruitList/>}></Route>
        <Route path='/formulaire' element={<Formulaire/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
