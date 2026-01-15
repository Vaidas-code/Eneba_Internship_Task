import Header from './components/Header/Header'
import ResultsCount from './components/ResultsCount/ResultsCount'
import ProductGrid from './components/ProductGrid/ProductGrid'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const [searchParam, setSearchParam] = useState(location.search);

  useEffect(() => {
    setSearchParam(location.search);
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(searchParam);
    const search = params.get('search') || '';
    const url = search
      ? `/list?search=${encodeURIComponent(search)}`
      : '/list';
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
          hasCashback: !!item.cashbackAmmount,
          cashback: item.cashbackAmmount ?? 0,
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
    <div className="max-w-7xl mx-auto mt-4 px-8 pb-8 text-center flex flex-col items-start justify-start min-h-screen">
      <Header />
      <main className="w-full pt-2 px-0">
        <ResultsCount count={products.length} />
        <ProductGrid items={products} search={new URLSearchParams(searchParam).get('search') || ''} />
      </main>
    </div>
  )
}

export default App
