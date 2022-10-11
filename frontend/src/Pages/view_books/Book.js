import React, { useEffect, useState } from 'react'
import './book.scss'
import { Link } from 'react-router-dom'
import { useBookContext } from '../../hooks/useBookContext'


export default function Book({book}) {
  const {dispatch}=useBookContext()
  const handleClick = () =>{
    dispatch({type:'SET_BOOK',payload:{book}})
  }
  return (
    <div className='book1'>
          <div>
            <div className='Title'><p>{book.name}</p></div>
            <div className="author"><p>{book.author}</p></div>
            <div className="status"><p style={{color:book.status==="Available"? "green":"red"}}>{book.status}</p></div>
        </div>
        <div className='detail'>
          <Link to="/details">
            <button className='btn btn-primary info' onClick={handleClick}>View Details</button>
          </Link>
        </div>
    </div>
  )
}