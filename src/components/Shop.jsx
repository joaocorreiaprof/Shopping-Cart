import { useState, useEffect } from "react";
import "../styles/Shop.css";
import { useCart } from "./CartContext";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) =>
        setProducts(data.filter((item) => item.category !== "electronics"))
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const Shopping = () => {
  const { products, error, loading } = useProducts();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [filter, setFilter] = useState("all");

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="shop-container">
      {/* Category Selector */}
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%" }}
            />
            <p>{product.title}</p>
            <p>{product.price} €</p>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ width: "50px", marginRight: "5px" }}
            />
            <button
              onClick={() => addToCart(product, quantities[product.id] || 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
