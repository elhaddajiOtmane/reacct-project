import React from 'react';
import "./Book.css"

const  Books =(props) =>{
  const {books}=props;
  const list=books.map(book=>{
    return(
      <div className='list' style={{display:'inline-table',marginLeft:'10%',marginTop:'5%'}} key={book.idB}>
        <div><label style={{color:'purpule',fontSize:'18px',fontWeight:'400'}}>Nom: </label>{book.NameB}</div>
        <div><label style={{color:'purpule',fontSize:'18px',fontWeight:'400'}}>Author: </label>{book.Author}</div>
        <div><label style={{color:'purpule',fontSize:'18px',fontWeight:'400'}}>Days: </label>{book.Days}</div>
        <div><label style={{color:'purpule',fontSize:'18px',fontWeight:'400'}}>Point of view: </label>{book.resume}</div>
      </div>
    )
  })
  return (
    <div>
 
 <div className='tableBook'>
  {list}
 </div>
    </div>
  )
}

export default Books;