import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom'; 
import { addProduct, removeProduct } from '../features/productSlice'; 

function Products() { 
  const dispatch = useDispatch(); 
  const productList = useSelector((state) => state.products); 

  // ใช้ state เพื่อเก็บค่าของ input
  const [id, setId] = useState(''); 
  const [name, setName] = useState(''); 
  const [price, setPrice] = useState(''); 
  const [description, setDescription] = useState(''); 

  // ฟังก์ชันเพิ่มสินค้า
  const handleAddProduct = () => { 
    dispatch(addProduct({ id, name, price, description })); 

    // ล้างค่า input หลังจากเพิ่มสินค้า
    setId('');
    setName('');
    setPrice('');
    setDescription('');
  }; 

  const handleRemoveProduct = (id) => { 
    dispatch(removeProduct(id)); 
  }; 

  return ( 
    <div> 
      <h2>Product List</h2> 
      <ul> 
        {productList.map(product => ( 
          <li key={product.id}> 
            <Link to={`/product/${product.id}`}> 
              {product.name} - {product.price} 
            </Link> 
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button> 
          </li> 
        ))} 
      </ul> 

      {/* ฟอร์มสำหรับเพิ่มสินค้า */}
      <h3>Add New Product</h3> 
      <input 
        type="text" 
        placeholder="Enter product ID" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
      /> 
      <input 
        type="text" 
        placeholder="Enter product name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /> 
      <input 
        type="text" 
        placeholder="Enter product price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      /> 
      <input 
        type="text" 
        placeholder="Enter product description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      /> 
      <button onClick={handleAddProduct}>Add Product</button> 
    </div> 
  ); 
} 

export default Products;

 