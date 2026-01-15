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
    <article className="bg-gradient-to-b from-[#2b0f57] to-[#34146a] border-2 border-blue-500 overflow-hidden min-h-[320px] shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <div className="w-full bg-gray-800">
          <img
            className="w-full h-full object-cover block"
            src={product["product-media-img"]}
            alt="Product visual"
          />
        </div>
        <div className="flex flex-col justify-start items-start text-left px-3 bg-gradient-to-b from-[#2b0f57] to-[#34146a]">
          <h3 className="text-[13px] font-bold m-0 mb-0.5 text-white pt-2">{product.title}</h3>
          <div className="flex flex-col items-start text-left">
            <span className="text-green-500 text-[13px] font-bold tracking-wide">GLOBAL</span>
            <div className="flex items-center justify-start mt-2">
              <span className="text-gray-400 text-xs">From&nbsp;</span>
              <span className="text-gray-400 text-xs line-through">{product.currency}{product.originalPrice.toFixed(2)}</span>
              <span className="text-green-400 text-[13px] font-bold ml-1.5">
                {product.cashbackPercent !== null && product.cashbackPercent !== undefined
                  ? `-${product.cashbackPercent}%`
                  : null}
              </span>
            </div>
            <span className="text-white text-lg font-bold flex items-center">
              {product.currency}{product.discountPrice.toFixed(2)}
              <svg className="ml-1.5 text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path fill="currentColor" fillRule="evenodd" d="M5.69 6.13c0-.25.2-.44.43-.44h.44a.88.88 0 0 1 .88.87v2.19a.44.44 0 0 0 .43.44h.44a.44.44 0 0 1 0 .87h-.44a1.31 1.31 0 0 1-1.3-1.31V6.56h-.45a.44.44 0 0 1-.43-.43ZM6.42 3.61a.66.66 0 1 1 .73 1.1.66.66 0 0 1-.73-1.1Zm.44.75a.22.22 0 1 0-.16-.4.22.22 0 0 0 .16.4Z" clipRule="evenodd"></path>
                <path fill="currentColor" fillRule="evenodd" d="M2.05 2.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM7 .88a6.13 6.13 0 1 0 0 12.25A6.13 6.13 0 0 0 7 .87Z" clipRule="evenodd"></path>
              </svg>
            </span>
          </div>

          {typeof product.cashbackAmmount === 'number' && (
            <div className="text-green-400 text-sm">
              Cashback: {product.currency}{product.cashbackAmmount.toFixed(2)}
            </div>
          )}
          <div className="flex items-center gap-1 mt-auto text-[13px] text-gray-400 font-semibold pb-2.5">
            <button
              className="bg-transparent border-none p-0 inline-flex items-center disabled:cursor-default cursor-pointer -translate-y-0.5"
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
            <span className="-ml-0.5 relative -top-px">{likeCount}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
