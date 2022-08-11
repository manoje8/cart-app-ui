import React, { useState } from "react";
import axios from 'axios';
import ItemForm from "./item-form";
  
// CreateItem Component
const CreateItem = () => {
  const [formValues] = 
    useState({ name: '', description: '', type: '' })

  // onSubmit handler
  const onSubmit = itemObject => {
    axios.post(
'http://localhost:5000/api/v1/items/create', 
    itemObject)
      .then(res => {
        if (res.status === 200)
          alert('item successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return student form
  return(
    <ItemForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create item
    </ItemForm>
  )
}
  
// Export CreateItem Component
export default CreateItem