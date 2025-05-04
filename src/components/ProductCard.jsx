import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Customize
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{product.category}</p>
          <p className="mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard