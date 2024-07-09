import {
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Cart = (props) => {
	return (
		<UncontrolledDropdown nav inNavbar>
			<DropdownToggle nav caret tag="div">
				{props.cart.length}
			</DropdownToggle>
			<DropdownMenu end>
				{props.cart.map((cartItem) => (
					<DropdownItem key={cartItem.product.id} tag="div">
						{cartItem.product.id}
						<span
							onClick={() => props.removeFromCart(cartItem.product)}
							className="badge badge-danger"
							style={{
								marginRight: "10px",
								backgroundColor: "red",
								cursor: "pointer",
							}}
						>
							X
						</span>
						{cartItem.product.productName}
						<span
							className="badge badge-warning"
							style={{ backgroundColor: "green" }}
						>
							{cartItem.quantity}
						</span>
					</DropdownItem>
				))}
				<DropdownItem divider />
				<DropdownItem tag="div">Reset</DropdownItem>
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default Cart;