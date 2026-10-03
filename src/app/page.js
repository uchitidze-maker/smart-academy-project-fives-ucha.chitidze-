"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("პროდუქტები ვერ ჩაიტვირთა");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>იტვირთება</p>;
  }

  if (error) {
    return <p>მოხდა შეცდომა</p>;
  }

  return (
    <div className={styles.page}>
      <h1>პროდუქტები</h1>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <Footer />
    </div>
  );
}