import Jordan1 from '../ItemlistContainer/productos/Jordan1.png'
import AdidasNmd from '../ItemlistContainer/productos/AdidasNmd.png'
import NikeZoom from '../ItemlistContainer/productos/NikeZoom.png'

import './ItemList.css'
import { Spinner } from 'react-bootstrap'


function ItemList (){
    
    return(

        <>
        {Items.lenght ? (
            items.map((elem,idx) => <Item props={elem} key={idx}/>)
        ): (
            <Spinner animation="border" variant="primary"/>
        )}
    </>
)

    //     <div>

    //     <ul className="lista">
       
    //     <li className="productos">
    //         <img src={Jordan1} height="180px" width="300px" alt="" />
           
    //     </li>
    //     <li className="productos">
    //         <img src={AdidasNmd} height="180px" width="300px" alt=""/>
            
    //     </li>
    //     <li className="productos">
    //         <img src={NikeZoom} height="180px" width="300px" alt=""/>
           
    //     </li>
    //     </ul>

    //     </div>
        



    // )

}

export default ItemList;