import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getProductsAsync,
  productSelector,
  removeProducts,
} from "./features/ProductSlice";

function App() {
  const dispatch = useDispatch();

  const { products } = useSelector(productSelector);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Fake Api Products</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "5px",
        }}
      >
        {products.map((product, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "300px",
              margin: "10px",
              border: " solid 4px",
            }}
          >
            <p>{product.id}</p>
            <img style={{ width: "100px" }} src={product.image} alt="" />
            <p>{product.title}</p>
            <div>
              <button>Edit</button>
              <button
                onClick={() => {
                  dispatch(removeProducts(key));
                }}
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
