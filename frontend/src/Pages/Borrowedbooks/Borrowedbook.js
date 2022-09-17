import React from 'react';
import './Borrowedbook.scss';
export default function Sharedbook({book}) {
  return (
    
        <div className='book'>
          <div>
            <p><b>{book.book_name}</b></p>
            <p><b>Owner :</b> {book.owner_name}</p>
            <p><b>Date of Return:</b> {book.dueDate.substring(0,10)}</p>
         </div>
       
        </div>
  );
}