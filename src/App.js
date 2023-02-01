
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
          <a href='#'>https://brownbutton.io</a>
          <div className='flex'>
            <p className='pb'>Powered by</p>
            <img src='https://media.licdn.com/dms/image/C560BAQGxNL2NwrXMwA/company-logo_200_200/0/1672549434917?e=2147483647&v=beta&t=1q0cyg2gjbX815MW7cWy2cciU2NjK5P2KQi-L7BO268' className='' />
          </div>
        </div>
       
      </div>
    );
  }
}



export default App;
