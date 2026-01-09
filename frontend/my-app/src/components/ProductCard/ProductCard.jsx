import './ProductCard.css'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(product.likeCount)

  const handleLike = async () => {
      if (!liked) {
        setLikeCount(likeCount + 1);
        setLiked(true);
      }
  }

  return (
    <article className="product-card">
      <div className="product-card-static-grid">
        <div className="product-media-static">
          <img
            className="product-media-img"
            src={product["product-media-img"]}
            alt="Product visual"
          />
        </div>
        <div className="product-body-static">
          <h3 className="product-title">{product.title}</h3>
          <div className="price-stack">
            <span className="global-label">GLOBAL</span>
            <div className="from-row">
              <span className="from-label">Nuo&nbsp;</span>
              <span className="original-price">{product.currency}{product.originalPrice.toFixed(2)}</span>
              <span className="discount-percent">
                {product.cashbackPercent !== null && product.cashbackPercent !== undefined
                  ? `-${product.cashbackPercent}%`
                  : null}
              </span>
            </div>
            <span className="discount-price">
              {product.currency}{product.discountPrice.toFixed(2)}
              <svg className="after-discount-logo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" style={{maxWidth: '16px', minWidth: '16px', height: 'auto'}}>
                <path fill="currentColor" fillRule="evenodd" d="M5.69 6.13c0-.25.2-.44.43-.44h.44a.88.88 0 0 1 .88.87v2.19a.44.44 0 0 0 .43.44h.44a.44.44 0 0 1 0 .87h-.44a1.31 1.31 0 0 1-1.3-1.31V6.56h-.45a.44.44 0 0 1-.43-.43ZM6.42 3.61a.66.66 0 1 1 .73 1.1.66.66 0 0 1-.73-1.1Zm.44.75a.22.22 0 1 0-.16-.4.22.22 0 0 0 .16.4Z" clipRule="evenodd"></path>
                <path fill="currentColor" fillRule="evenodd" d="M2.05 2.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM7 .88a6.13 6.13 0 1 0 0 12.25A6.13 6.13 0 0 0 7 .87Z" clipRule="evenodd"></path>
              </svg>
            </span>
          </div>
          {product.hasCashback && (
            <div className="cashback-badge below-price cashback-green">
              Cashback {product.currency}{product.cashback.toFixed(2)};
            </div>
          )}

          {typeof product.cashbackAmmount === 'number' && (
            <div style={{ paddingTop: 0, paddingBottom: 0, fontWeight: 400, color: '#7fff7f', fontSize: '0.85em' }}>
              Cashback: {product.currency}{product.cashbackAmmount.toFixed(2)}
            </div>
          )}
          <div className="rating-footer">
            <button
              className="heart"
              style={{ background: 'none', border: 'none', padding: 0, cursor: liked ? 'default' : 'pointer', display: 'inline-flex', alignItems: 'center' }}
              onClick={handleLike}
              aria-label="Like"
              disabled={liked}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill={liked ? '#ffe066' : 'none'}
                stroke={liked ? '#ffc107' : '#888'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.1 8.64l-.1.1-.11-.11C10.14 6.6 7.1 6.24 5.13 8.2c-1.99 1.97-2.05 5.17-.13 7.13l6.54 6.6c.2.2.51.2.71 0l6.54-6.6c1.92-1.96 1.86-5.16-.13-7.13-1.97-1.96-5.01-1.6-6.89.44z"/>
              </svg>
            </button>
            <span className="like-ammount" style={{marginLeft: '-2px', position: 'relative', top: '-1px'}}>{likeCount}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
