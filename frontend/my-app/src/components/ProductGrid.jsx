import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductGrid.css';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(data => {
        const mapped = (data.data || []).map(item => ({
          id: item.id,
          title: item.title,
          region: item.region,
          "product-media-img": item.imageUrl,
          originalPrice: item.price,
          discountPrice: item.cashbackPrice,
          currency: '€',
          hasCashback: !!item.cashbackAmmount,
          cashback: item.cashbackAmmount,
          ratingCount: 0
        }));
        setProducts(mapped);
      });
  }, []);

  console.log('ProductGrid products:', products);
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
