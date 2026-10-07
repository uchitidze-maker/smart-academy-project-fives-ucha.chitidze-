export default function ProductItem({ product, onDelete }) {
  return (
    <article>
      <p>ID: {product.id}</p>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="160" />
      <p>ფასი: ${product.price}</p>
      <p>{product.description}</p>

      {onDelete && (
        <button onClick={() => onDelete(product)}>
          წაშლა
        </button>
      )}
    </article>
  );
}