import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Cart = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Cart - {props.cart.length}
      </DropdownToggle>
      <DropdownMenu end>
        {props.cart.map((product) => (
          <DropdownItem key={product.product.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                style={{ cursor: "pointer", marginRight: "5px" }}
                onClick={() => props.updateCart(product.product, "increase")}
              >
                +
              </button>{" "}
              {product.product.productName} - {product.quantity}{" "}
              <button
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => props.updateCart(product.product, "decrease")}
              >
                -
              </button>
            </div>
          </DropdownItem>
        ))}
        <DropdownItem divider />
        {props.cart.length > 0 && (
          <DropdownItem onClick={props.clearCart}>Sıfırla</DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Cart;
