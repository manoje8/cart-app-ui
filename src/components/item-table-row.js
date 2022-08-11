import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemTableRow = (props) => {
const { id, name, description, type } = props.obj;

const deleteItem = () => {
	axios
	.delete(
"http://localhost:5000/api/v1/items/" + id)
	.then((res) => {
		if (res.status === 200) {
		alert("Item successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{description}</td>
	<td>{type}</td>
	<td>
		<Link className="edit-link"
		to={"/delete" + id}>
		Edit
		</Link>
		<Button onClick={deleteItem}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default ItemTableRow;
