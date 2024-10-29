import { useState, useEffect } from "react";
import "../styles/Shop.css";

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
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [filter, setFilter] = useState("all");

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    setCart((prevCart) => [
      ...prevCart,
      { ...product, quantity: parseInt(quantity) },
    ]);
  };

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="shop-container">
      <div className="category-selector">
        <label htmlFor="category">Choose a category:</label>
        <select id="category" onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Products</option>
          <option value="men's clothing">Men&apos;s Clothes</option>
          <option value="women's clothing">Women&apos;s Clothes</option>
          <option value="jewelery">Jewelry</option>
        </select>
      </div>

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
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
