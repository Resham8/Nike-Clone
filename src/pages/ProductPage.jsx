import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "../data/products"
import { ChevronRight } from "lucide-react"

const ProductPage = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {    
    const foundProduct = products.find((p) => p.id === Number(id))
    setProduct(foundProduct)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">      
      <nav className="flex items-center text-sm mb-6">
        <Link to="/" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <Link
          to={`/${product.type.toLowerCase()}`}
          className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          {product.type}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-black dark:text-white">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">        
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 ${selectedImage === index ? "border-black dark:border-white" : "border-transparent"}`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-sm text-amber-700 dark:text-amber-500 font-medium">{product.category}</div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
          <p className="text-xl mb-6">{product.price}</p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <Link
            to={`/customize/${product.id}`}
            className="block w-full py-4 bg-black dark:bg-white text-white dark:text-black text-center font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mb-4"
          >
            Customize
          </Link>

          <button className="block w-full py-4 border border-black dark:border-white text-center font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
