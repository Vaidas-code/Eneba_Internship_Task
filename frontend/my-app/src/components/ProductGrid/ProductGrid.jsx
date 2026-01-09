import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';
import NoResults from '../NoResults';

export default function ProductGrid({ items = [], search }) {
  if (items.length === 0 && search) {
    return <NoResults search={search} />;
  }
  return (
    <section className="product-grid">
      {items.map((it) => (
        <ProductCard key={it.id} product={it} />
      ))}
    </section>
  );
}
