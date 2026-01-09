// NOTE: Never write code here, just add it

import './App.css'
import Header from './components/Header/Header'
import ResultsCount from './components/ResultsCount/ResultsCount'
import ProductGrid from './components/ProductGrid/ProductGrid'
import { useEffect, useState } from 'react'




function App() {
  const [products, setProducts] = useState([])

  const [searchParam, setSearchParam] = useState(window.location.search);

  useEffect(() => {
    const onPopState = () => setSearchParam(window.location.search);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParam);
    const search = params.get('search') || '';
    const url = search
      ? `http://localhost:3000/list?search=${encodeURIComponent(search)}`
      : 'http://localhost:3000/list';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data)
        const arr = Array.isArray(data.data) ? data.data : [];
        const mapped = arr.map((item) => ({
          id: item.id,
          title: item.title,
          'product-media-img': item.imageUrl,
          originalPrice: item.price,
          discountPrice: item.cashbackPrice ?? item.price,
          currency: item.currency ?? '€',
          hasCashback: !!item.cashback,
          cashback: item.cashback ?? 0,
          cashbackAmmount: item.cashbackAmmount ?? 0,
          likeCount: item.likeCount ?? 0,
          cashbackPercent: item.cashbackPercent ?? null,
        }))
        setProducts(mapped)
      })
      .catch((err) => {
        console.error('Failed to fetch products', err)
      })
  }, [searchParam]);

  return (
    <div id="root">
      <Header />
      <main style={{ padding: '24px', paddingTop: '8px' }}>
        <ResultsCount count={products.length} />
        <ProductGrid items={products} search={new URLSearchParams(searchParam).get('search') || ''} />
      </main>
    </div>
  )
}

export default App
