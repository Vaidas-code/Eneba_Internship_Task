import ProductCard from '../ProductCard/ProductCard';
import NoResults from '../NoResults';

export default function ProductGrid({ items = [], search }) {
  if (items.length === 0 && search) {
    return <NoResults search={search} />;
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((it) => (
        <ProductCard key={it.id} product={it} />
      ))}
    </section>
  );
}
