import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import "../App.css";

const Products = () => {
  const { priceFilteredData, setPriceRange, priceRange } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container-fluid mt-4">
      <div className="row">

        {/* LEFT SIDE – FILTER */}
        <div className="col-md-3 border-end">
          <h5 className="mb-3">Filter</h5>

          <h6>Price</h6>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              checked={priceRange === "below1000"}
              onChange={() => setPriceRange("below1000")}
            />
            <label className="form-check-label">
              All Products
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              checked={priceRange === "below100"}
              onChange={() => setPriceRange("below100")}
            />
            <label className="form-check-label">
              Less than $100
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              checked={priceRange === "100to500"}
              onChange={() => setPriceRange("100to500")}
            />
            <label className="form-check-label">
              $100 - $500
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              checked={priceRange === "500to800"}
              onChange={() => setPriceRange("500to800")}
            />
            <label className="form-check-label">
              $500 - $800
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              checked={priceRange === "800to1000"}
              onChange={() => setPriceRange("800to1000")}
            />
            <label className="form-check-label">
              $800 - $1000
            </label>
          </div>
        </div>

        {/* RIGHT SIDE – PRODUCTS */}
        <div className="col-md-9">
          <div className="row">

            {priceFilteredData?.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div
                  className="card h-100  shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/productDetails/${item.id}`)}
                >
                 <div
  className="d-flex justify-content-center align-items-center"
  style={{ backgroundColor: "#e8e8e8", height: "250px" }}
>
  <img
    src={item.image}
    className="card-img-top"
    style={{ maxHeight: "200px", objectFit: "contain" }}
    alt={item.title}
  />
</div>

                  <div className="card-body">
                    <h6
                      className="card-title"
                      title={item.title} style={{fontFamily: "familyRegular"}}
                    >
                      {item.title.length > 32
                        ? item.title.slice(0, 32) + "..."
                        : item.title}
                    </h6>

                    <p className="mb-1">$ {item.price}</p>
                    <small>
                      ⭐ {item.rating?.rate} | {item.rating?.count}
                    </small>
                    <p style={{color: "#c5a2f3"}}>Lowest price in last 30 days</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
