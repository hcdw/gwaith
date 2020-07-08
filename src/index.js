import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Nav from './components/nav'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
  <Nav />
    <div className='content'>
      <div className='copy'>
        <h1>coming soon</h1>
        <p>Find your next tech job in Wales</p>
      </div>
      <iframe className='substack' title='Substack Sign-up' src="https://gwaith.substack.com/embed" ></iframe>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
