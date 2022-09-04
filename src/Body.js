import React from 'react';
import { Button ,ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.css'
;

function Body() {
    const content={color:'white', fontSize:19};
    const author={color:'white',fontSize:20};
    const heading={color:'white',fontSize:32};

 
    var mostrecentblog={'author':'abc','heading':'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s','content':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."};
 
  return (
    <>
      <div className='bod' >
        <div className='recents'> 
        <div className='heading'>
            <h2 style={heading}>{mostrecentblog.heading}</h2>
            <sub style={author}><h3>-{mostrecentblog.author}</h3></sub>
            
        </div>
        <div className='content'>
        <p style={content}>{mostrecentblog.content}</p>
        </div>
        

        </div>

      </div>
     

    </>

  );
}


export default Body;
