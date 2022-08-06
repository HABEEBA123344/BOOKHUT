import React from 'react';
import './Borrowedbook.scss';
export default function Sharedbook({book}) {
  return (
    
        <div className='book'>
          <div>
            <p><b>{book.name}</b></p>
            <p><b>Owner :</b> {book.owner}</p>
            <p><b>Date of Return:</b> {book.date_return}</p>
         </div>
       
        </div>
  );
}