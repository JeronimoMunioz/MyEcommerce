

import react from 'react';
import './ItemCount.css'

const ItemCount = ({stock,initial}) => {
    const [contador,setContador] = react.useState(parseInt(initial));

    const incrementar = () =>{
        if (contador < stock) {
            setContador(contador + 1)
        }
    };

    const desIncrementar = () =>{
        if (contador > 0){
            setContador(contador - 1 )
        }
    };
    return(
        <div className="btn-sec">
            <button className='btn-dec btn-hover'onClick={desIncrementar} >-</button>
            <p className="p ">{contador} UNIDADES, PUEDEN SER TUYAS!</p>
            <button className='btn btn-hover'onClick={incrementar} > +</button>
            <button className="btn-cart btn-hover "> Agregar al carrito</button>
        </div>
    )

}
export default ItemCount;