import React from 'react'
import './book.scss'
import { Link } from 'react-router-dom'

export default function Book({book}) {
  return (
    <div className='book1'>
          <div>
            <div className='Title'><p>{book.name}</p></div>
            <div className="author"><p>{book.author}</p></div>
            <div className="status"><p style={{color:book.status==="Available"? "green":"red"}}>{book.status}</p></div>
        </div>
        <div className='detail'>
          <Link to="/details">
            <button className='btn btn-primary info'>View Details</button>
          </Link>
        </div>
    </div>
  )
}
