"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import ProductItem from "@/components/productItem/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("პროდუქტები ვერ ჩაიტვირთა");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  function deleteProduct(product) {
    const remainingProducts = products.filter(
      (item) => item.id !== product.id
    );

    setProducts(remainingProducts);
    setDeletedProducts([...deletedProducts, product]);
  }

  if (loading) {
    return <p>იტვირთება</p>;
  }

  if (error) {
    return <p>მოხდა შეცდომა</p>;
  }

  return (
    <div className={styles.page}>
      <section>
        <h1>პროდუქტები ({products.length})</h1>

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />
        ))}
      </section>

      {deletedProducts.length > 0 && (
        <section>
          <h2>წაშლილი პროდუქტები ({deletedProducts.length})</h2>

          {deletedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      )}

      <Footer />
    </div>
  );
}