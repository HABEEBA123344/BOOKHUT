import React from 'react';
import './Sharedbooks.scss';
export default function Sharedbook({book}) {
  return (
    
        <div className='book'>
          <div>
            <p><b>{book.name}</b></p>
            <p><b>Borrower :</b> {book.borrower}</p>
            <p><b>Date of Return:</b> {book.date_return}</p>
         </div>
       
        </div>
  );
}