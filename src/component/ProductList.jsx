import { useState, useEffect } from "react";

function ProductList({ onAddtoCart }) {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setproducts(data);
            });
    }, []);

    return (
        <div className="products-section">

            <h2 className="section-title">Our Products</h2>

            <div className="products-container">

                {products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.title}
                        />

                        <h2>{product.title}</h2>

                        <p className="product-price">
                            ${product.price}
                        </p>

                        <button className="add-to-cart-btn" onClick={() => {onAddtoCart(product)}}
                        >
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ProductList;