import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
      {products.map((product) => (
        <Link key={product.id} to={`/product/details/${product.id}`}>
          <div className="card">
            <img src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
