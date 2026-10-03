export default function ProductItem({ product }) {
  return (
    <article>
      <p>ID: {product.id}</p>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="160" />
      <p>ფასი: ${product.price}</p>
      <p>{product.description}</p>
    </article>
  );
}