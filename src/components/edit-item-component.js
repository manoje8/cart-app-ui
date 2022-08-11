// Edit item Component for update item data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./item-form";

// EditItem Component
const EditItem = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	description: "",
	type: "",
});
	
//onSubmit handler
const onSubmit = (itemObject) => {
	axios
	.put(
		"http://localhost:5000/api/v1/items" +
		props.match.params.id,
		itemObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Item successfully updated");
		props.history.push("/items");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize item form
useEffect(() => {
	axios
	.get(
		"http://localhost:5000/api/v1/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, description, type } = res.data;
		setFormValues({ name, description, type });
	})
	.catch((err) => console.log(err));
});

// Return item form
return (
	<ItemForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Item
	</ItemForm>
);
};

// Export EditItem Component
export default EditItem;
