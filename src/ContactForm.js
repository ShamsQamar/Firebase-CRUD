import React from 'react'
import { useState, useEffect } from 'react'

export const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  }
  const [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    if(props.currentId==='') {
      setValues({...initialFieldValues})
    } else {
      setValues({...props.contactObjects[props.currentId]})
    }

  }, [props.currentId, props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values, [name]: value
    })
  }
 

  const handleFormSubmit = (e) => {
   
      e.preventDefault()
      props.addOrEdit(values)
      setValues(initialFieldValues)
    
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group input-group mt-4">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} required onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <div className="form-group input-group col-md-6 my-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} required onChange={handleInputChange} />
        </div>

        <div className="form-group input-group col-md-6 my-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Email" name="email" value={values.email} required onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <textarea className="form-control" placeholder="Address" name="address" value={values.address} required onChange={handleInputChange} />
        </div>

        <div className="form-group col-md-6 my-3">
          <input type="submit" value={props.currentId==='' ? "Add" : "Update"} className="btn btn-primary bt-block" />
        </div>
      </div>
    </form>
  )
}
