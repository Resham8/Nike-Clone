import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm h-full flex flex-col">
      <div className="relative flex-grow">        
        <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm z-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
              fill="#FF0000"
            />
          </svg>
        </div>
                
        <Link to={`/product/${product.id}`} className="block">
          <img
            src={product.images?.[0] || product.image?.[0] || `/api/placeholder/400/320?text=${product.name}`}
            alt={product.name}
            className="w-full h-48 object-contain rounded-md"
          />
        </Link>
                
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-md">
          <Link
            to={`/customize/${product.id}`}
            className="block w-full py-2 text-center bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Customize
          </Link>
        </div>
      </div>
            
      <Link to={`/product/${product.id}`} className="mt-4">
        <div className="flex justify-between items-start">
          <div className="text-sm text-amber-700 dark:text-amber-500 font-medium">{product.category}</div>
          <div className="text-amber-700 dark:text-amber-500 font-medium text-sm">Customize</div>
        </div>
        <h3 className="font-medium mt-1 text-gray-900 dark:text-gray-100 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{product.description}</p>
        <p className="mt-2 font-medium text-gray-900 dark:text-gray-100">{product.price}</p>
      </Link>
    </div>
  );
};

const ShoesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const maxIndex = Math.max(0, products.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured NBY Styles</h2>
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="px-4 py-1 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Shop
          </Link>
          <button 
            onClick={prevSlide}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {products.map((product, index) => (
            <div
              key={product.id || index}
              className="min-w-full md:min-w-[calc(33.333%-1rem)] px-0 flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-amber-600' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ShoesSlider;