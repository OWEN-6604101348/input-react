import { useParams } from 'react-router-dom'; 

 

function Product() { 

  const { productId } = useParams(); 

 

  return ( 

    <div> 

      <h2>Product Page</h2> 
      <p>Product ID: {productId}</p> 

    </div> 

  ); 

} 

 

export default Product; 

 