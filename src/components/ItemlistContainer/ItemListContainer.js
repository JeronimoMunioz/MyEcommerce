// import { useState, useEffect } from "react";
// import ItemList from "../ItemList/ItemList";

// import { Row, Col } from "react-bootstrap";

// function ItemListContainer() {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=50", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
// 		"x-rapidapi-key": "be9fb69dc9msh43caefdb2d806bcp1c4cd2jsn3aaa8d3292e6"
// 	}
// })
// .then(response => response.json())
// .then(data=> setProductList(data))
// .catch(err => {
// 	console.error(err);
// });
//   }, []);
// console.log(productList)

//   return (
//     <>
//       <Row className="item-list-container">
//         <Col md={12}>
//           <ItemList items={productList} />
//         </Col>
//       </Row>
//     </>
//   );
// }

// export default ItemListContainer;



import { Item } from 'semantic-ui-react'
import ItemList from '../ItemList/ItemList'


function ItemListContainer (){

    return(
        <ItemList/>
    )
}

export default ItemListContainer;