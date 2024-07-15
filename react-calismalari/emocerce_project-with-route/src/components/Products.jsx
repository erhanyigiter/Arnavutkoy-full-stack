import {
  CardGroup,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
const Products = (props) => {
  return (
    <>
      <h2>{props.curretCategory}</h2>
      <CardGroup>
        {props.products.map((product) => (
          <Col xs="4" key={product.id}>
            <Card style={{ marginLeft: "10px", marginRight: "10px" }}>
              <CardImg
                top
                width="100%"
                src={product.image}
                alt={product.productName}
              />
              <CardBody>
                <CardTitle tag="h5">{product.productName}</CardTitle>
                <CardText tag="p">{product.desc}</CardText>
                <Button onClick={() => props.addToCart(product)}>
                  Add To Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  );
};
export default Products;