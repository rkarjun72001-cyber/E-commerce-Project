import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonData = await response.json();
    setDatas(jsonData);
  }

  return (
    
    <div>
      <div className="container py-5">
  <div className="card shadow-sm">
    <div className="row g-0 align-items-center">

      {/* Product Image */}
      <div className="col-md-5 text-center p-4">
        <img
          src={datas?.image}
          alt={datas?.title}
          className="img-fluid"
          style={{ maxHeight: "350px" }}
        />
      </div>

      {/* Product Info */}
      <div className="col-md-7">
        <div className="card-body">
          <h3 className="fw-bold mb-3">{datas?.title}</h3>

          <h4 className="text-success mb-2">
            ₹ {datas?.price}
          </h4>

          <p className="text-muted mb-2">
            Category: <span className="fw-semibold">{datas?.category}</span>
          </p>

          <p className="mb-4">{datas?.description}</p>

          {/* Action Buttons */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            <button
              className="btn btn-warning px-4"
              onClick={() => addToCart(datas)}
            >
              Add to Cart
            </button>

           <button
  className="btn btn-primary px-4"
  onClick={() =>{alert("Order Placed");
    navigate("/")} 
  }
>
  Buy Now
</button>
          </div>

          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
          >
            ← Back to Products
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default ProductDetails;
