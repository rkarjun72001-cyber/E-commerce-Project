import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold">🛒 Shopping Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h5>Your cart is empty</h5>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center">
                    <img
                      src={item.image}
                      className="img-fluid p-3"
                      alt={item.title}
                      style={{ maxHeight: "150px" }}
                    />
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="text-muted mb-1">
                        ₹ {item.price.toFixed(2)}
                      </p>

                      <div className="d-flex align-items-center gap-2 mt-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => decreaseQty(item.id)}
                        >
                          −
                        </button>

                        <span className="fw-bold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => increaseQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 text-center">
                    <button
                      className="btn btn-danger btn-sm mb-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Price</span>
                  <span className="fw-bold">
                    ₹ {total.toFixed(2)}
                  </span>
                </div>


                <button
                  className="btn btn-outline-danger w-100"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <button
              className="btn btn-link mt-3"
              onClick={() => navigate("/")}
            >
              ← Back to Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
