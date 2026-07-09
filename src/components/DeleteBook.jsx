import React from 'react'
import Navigationbar from './NavigationBar'
import './Book.css'


const DeleteBook = () => {
  return (
    <div>
       <Navigationbar />
      <div className='container'>
    <div className='page-box'> 
      <h1 className='page-heading'><center>Delete Book</center></h1>
     
      <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Book Code</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-primary mt-3">Delete</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default DeleteBook