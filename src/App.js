
import React from 'react';
import './App.css';
import Add from './components/new';

class App extends React.Component {
  render() {
    return (
      <div className='body'>
        <div className='main'>
          <div className='calcu flex'>
            <div className='img'>
              <img src={require('./components/assests/calculator.jpeg')} />
            </div>
            <div>
              <calcimg />
              <h2>GST</h2>
              <p>calculator</p>

            </div>
          </div>
          <div className='link'>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>


        <div className='main-part2'>
          <div className='part2'>
          <Add/>
          </div>
        </div>
        <div className='bb flex'>
          <div className='flex'>
            <p className='pb'>Developed by Suvalakshmi</p>
          </div>
        </div>
       
      </div>
    );
  }
}



export default App;
