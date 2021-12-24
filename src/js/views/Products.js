import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Card, Col, Container, Row} from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import Turtleneck from "../../img/b1.jpg";
import TealBlouse from "../../img/b2.jpg";
import Tshirt from "../../img/b3.jpg";
import PinkBlouse from "../../img/b4.jpg";
import RedBlouse from "../../img/b5.jpg";
import RedTurtleneck from "../../img/b6.jpg";
import FloralDress from "../../img/b7.jpg";
import BrownTurtleneck from "../../img/b8.jpg";
import WhiteBlouse from "../../img/b9.jpg";
import CamelT from "../../img/b10.jpg";

 toast.configure();
 
const Products = () => {

  const [product] = React.useState({ id: 1, name: "Turtleneck", image: 'b1.jpg', price: 15});
  const [productOne] = React.useState({ id: 2, name: "Teal Blouse", image: 'b2.jpg', price: 23});
  const [productTwo] = React.useState({ id: 3, name: "Tshirt", image: 'b3.jpg', price: 10});
  const [productThree] = React.useState({ id: 4, name: "Pink Blouse", image: 'b4.jpg', price: 14});
  const [productFour] = React.useState({id: 5, name: "Red Blouse", image: 'b5.jpg', price: 20});
  const [productFive] = React.useState({id: 6, name: "Red Turtleneck", image: 'b6.jpg', price: 80});
  const [productSix] = React.useState(  {id: 7, name: "Floral Dress", image: 'b7.jpg', price: 45});
  const [productSeven] = React.useState({id: 8, name: "Brown Turtleneck", image: 'b8.jpg', price: 29});
  const [productEight] = React.useState({id: 9, namename: "White Blouse", image: 'b9.jpg', price: 38});
  const [productTen] = React.useState({id: 11, name: "Camel-T", image: 'b10.jpg', price: 11});

/*const [product] = React.useState({
  name: "Tesla Roadster",
  price: 10.67,
  description: "Cool car"
});
*/
   async function handleToken(token) {
        //console.log({ token, addresses })
      const response = await axios.post("https://5001-black-buzzard-v2057bi9.ws-us23.gitpod.io/checkout", {
            token,
            product,
            productOne,
            productTwo,
            productThree,
            productFour,
            productFive,
            productSix,
            productSeven,
            productEight,
            productTen
         })
         const { status } = response.data
         if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    return (
      <>
      <Container>
			<Row>
         <Col xs={3} key={product.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={product.price * 100}
        billingAddress
        shippingAddress
        name={product.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productOne.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productOne.image} />
        <Card.Body>
          <Card.Title>{productOne.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productOne.price * 100}
        billingAddress
        shippingAddress
        name={productOne.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productTwo.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productTwo.image} />
        <Card.Body>
          <Card.Title>{productTwo.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productTwo.price * 100}
        billingAddress
        shippingAddress
        name={productTwo.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productThree.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productThree.image} />
        <Card.Body>
          <Card.Title>{productThree.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productThree.price * 100}
        billingAddress
        shippingAddress
        name={productThree.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productFour.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productFour.image} />
        <Card.Body>
          <Card.Title>{productFour.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productFour.price * 100}
        billingAddress
        shippingAddress
        name={productFour.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productFive.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productFive.image} />
        <Card.Body>
          <Card.Title>{productFive.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productFive.price * 100}
        billingAddress
        shippingAddress
        name={productFive.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productSix.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productSix.image} />
        <Card.Body>
          <Card.Title>{productSix.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productSix.price * 100}
        billingAddress
        shippingAddress
        name={productSix.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productSeven.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productSeven.image} />
        <Card.Body>
          <Card.Title>{productSeven.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productSeven.price * 100}
        billingAddress
        shippingAddress
        name={productSeven.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productEight.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productEight.image} />
        <Card.Body>
          <Card.Title>{productEight.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productEight.price * 100}
        billingAddress
        shippingAddress
        name={productEight.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productTen.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productTen.image} />
        <Card.Body>
          <Card.Title>{productTen.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout 
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productTen.price * 100}
        billingAddress
        shippingAddress
        name={productTen.name}
      />      
        </Card.Body>
      </Card>
      </Col>
        </Row>
		</Container>
     </>
      )
    } 
   
export default Products;