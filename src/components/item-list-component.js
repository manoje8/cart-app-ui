import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ItemTableRow from "./item-table-row";

const ItemList = () => {
const [items, setItems] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:5000/api/v1/items/")
	.then(({ data }) => {
		setItems(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return items.map((res, i) => {
	return <ItemTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
			<th>Type</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ItemList;
