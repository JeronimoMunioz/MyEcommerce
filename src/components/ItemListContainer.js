import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import ZapasData from './components/ItemlistContainer/zapas.json';
import {Row , Col} from "react-bootstrap";


function ItemListContainer(){
    
    const[productList, setproductList] = useState(0);

    useEffect(()=>{

        const ackData = new Promise ((resolve, reject) =>{
            setTimeout(function(){
                resolve(ZapasData);
            },2000);
        });

        ackData.then((response)=> {
            setproductList(response);
        });

    }, []);


    
    return(
        
        <>

            <Row className="item-list-container">
                <Col md={12}>
                    <ItemList items={productList}/>
                
                </Col>
            </Row>
          </> 

    )
    }
    
export default ItemListContainer;