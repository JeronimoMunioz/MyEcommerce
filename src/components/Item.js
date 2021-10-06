import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer"

function Item(props) {

  const { title, pictureURL, stock } = props.props;

  return(

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureURL} width="60%" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div style={{textAlign:"center"}}>
              <Badge bg="succes">Stock :{stock} </Badge>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
  );


}


export default Item;
