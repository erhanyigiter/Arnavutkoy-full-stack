import { Container, Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
// import Header from "./Header";

function App() {
	const title = "Reactstrap App";
	const menuItems = ["Home", "About", "Services", "Contact"];
	const members = [
		{ name: "John", email: "jon@gmail", role: "Admin" },
		{ name: "Doe", email: "doe@gmail", role: "User" },
		{ name: "Smith", email: "smith@gmail", role: "User" },
	];
	return (
		<Container>
			<Row>
				<Col xs="12">
					<Navbar title={title} />
				</Col>
				<Col xs="3">
					<Menu items={menuItems} />
				</Col>
				<Col xs="9">
					<Dashboard members={members} />
				</Col>
			</Row>
			<Row>
				<Col xs="12">
					<Footer />
				</Col>
			</Row>
		</Container>
	);
}

export default App;