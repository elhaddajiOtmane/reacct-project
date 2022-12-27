import React from 'react';
import "./Book.css"

const Books =(props) =>{
  const {books}=props;

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "80%",
    margin: "0 auto"
  }

  const cellStyle = {
    border: "1px solid black",
    padding: "10px",
    textAlign: "left"
  }

  return (
    <table className='tableBook' style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Author</th>
          <th style={cellStyle}>Days</th>
          <th style={cellStyle}>Point of view</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <tr key={book.idB}>
              <td style={cellStyle}>{book.NameB}</td>
              <td style={cellStyle}>{book.Author}</td>
              <td style={cellStyle}>{book.Days}</td>
              <td style={cellStyle}>{book.resume}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Books;