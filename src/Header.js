import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'


function Header() {
  
  const btn={width:30,height:39,margin:0,padding:0,textDecoration:0, marginLeft:1,marginRight:30,marginTop:1};
  
  return (
    <>
      <div className='header' >

       
        <div className='img'>
          <div className='account'>
        
          <img  className='accimg'src={require('./Vector.png') }  alt='no' />
         </div>
        
        <img src={require('./logo.png')} alt='no' />
        </div>
        <div className='searchbar'>
          <input type={'text'} className='sbt' placeholder='search'>
            

          </input>
          <div className='button'>
            <button  className='btn btn1' style={btn}></button>
            <button  className='btn btn2' style={btn}></button>
          </div>
   
         
        </div>

      </div>



    </>

  );
}


export default Header;
