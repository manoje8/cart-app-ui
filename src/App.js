// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateItem from "./components/create-item.component";
import EditItem from "./components/edit-item-component";
import ItemList from "./components/item-list-component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/home"}
				className="nav-link">
				Shopping Cart
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create"}
					className="nav-link">
					Create Item
				</Link>
				</Nav>

				<Nav>
				<Link to={"/items"}
					className="nav-link">
					Item List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path="/" component = {CreateItem}/>
				<Route path="/create" component={CreateItem} />
				<Route path="/:id" component={EditItem} />
				<Route path="/items" component={ItemList} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
