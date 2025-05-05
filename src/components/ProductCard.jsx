import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-gray-50 dark:bg-gray-900 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">        
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm z-10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
              fill="#FF0000"
            />
          </svg>
        </div>
                
        <Link to={`/product/${product.id}`} className="block">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-80 object-cover rounded-md"
          />
        </Link>
                
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-md">
          <Link
            to={`/customize/${product.id}`}
            className="block w-full py-2 text-center bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Customize
          </Link>
        </div>
      </div>
            
      <Link to={`/product/${product.id}`} className="block mt-3">
        <div className="flex justify-between items-start">
          <div className="text-xs text-amber-700 dark:text-amber-500 font-medium">{product.category}</div>
          <div className="text-amber-700 dark:text-amber-500 font-medium text-xs">Customize</div>
        </div>
        <h3 className="font-medium mt-1 text-gray-900 dark:text-gray-100 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2 mt-1">{product.description}</p>
        <p className="mt-2 font-medium text-gray-900 dark:text-gray-100">{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard