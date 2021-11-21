import React, { useState, useEffect } from 'react'
import { ContactForm } from './ContactForm'
import fireDb from './firebase'


export const Contacts = ({user}) => {

  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    fireDb.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({ ...snapshot.val() })
      } else {
        setContactObjects({})
      }
    })
  }, [])

  const addOrEdit = (values) => {
    if (currentId === '') {
      fireDb.child('contacts').push(values, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log("contact is added successfully");
        }
      }
      )
    } else {
      fireDb.child(`contacts/${currentId}`).set(values, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          console.log("contact is updated successfully");
          setCurrentId('')
        }
      }
      )
    }
  }

const onDelete = (id) => {
  if(window.confirm("Are you sure want to delete this item")) {
    fireDb.child(`contacts/${id}`).remove( (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("contact is deleted suc </div>cessfully");
        setCurrentId('')
        
      }
    }
    )
  }
}

  return (
    
    <>
    { user ?
     <>
      <div className="jumbotron jumbotron-fluid">
        <div id="c" className="container text-center p-4">
          <h2 className="display-5">Contact Register</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
        </div>
        <div className="col-md-7 mt-4"> 
          <table className="table table-borderless table-stripped" >
            <thead id="elem" className="thead-light ">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(contactObjects).map((id) => {
                  return <tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>
                      <a className="btn text-primary" onClick={() => { setCurrentId(id) }} >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
            </> : <h3 className="text-center">Please Login or Signup to Continue</h3> }
    </> 
            
  )
}
