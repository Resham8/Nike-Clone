import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { products } from "../data/products";

const CustomizerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("lateral");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customizations, setCustomizations] = useState({
    base: { color: "#FFFFFF" },
    swoosh: { color: "#000000" },
    laces: { color: "#FFFFFF" },
    sole: { color: "#FFFFFF" },
    heel: { color: "#FFFFFF" },
    toeCap: { color: "#FFFFFF" },
  });
  const [selectedPart, setSelectedPart] = useState("base");
  const [personalId, setPersonalId] = useState("");
  const [showPidModal, setShowPidModal] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct);
    setLoading(false);

    if (foundProduct && foundProduct.customizableAreas.length > 0) {
      const initialCustomizations = {};
      foundProduct.customizableAreas.forEach((area) => {
        initialCustomizations[area] = { color: "#FFFFFF" };
      });
      setCustomizations(initialCustomizations);
      setSelectedPart(foundProduct.customizableAreas[0]);
    }
  }, [id]);

  const colorOptions = [
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#000000" },
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Orange", value: "#FFA500" },
    { name: "Purple", value: "#800080" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Gray", value: "#808080" },
  ];

  const handleColorChange = (color) => {
    setCustomizations({
      ...customizations,
      [selectedPart]: { ...customizations[selectedPart], color },
    });
  };

  const handleAuctionClick = () => {
    setShowPidModal(true);
  };

  const handleSubmitPid = () => {  
    navigate("/auctions", {
      state: {
        newAuction: {
          productId: Number(id),
          designName: `Custom ${product?.name}`,
          creator: "You",
          startingBid: product?.price,
          currentBid: product?.price,
          bidders: 0,
          timeLeft: "7 days",
          customization: customizations,
          personalId: personalId,
          image: product?.images[0],
        },
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">
          Sorry, the product you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  
  const renderShoePreview = () => {
    return (
      <div className="relative w-full h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt="Shoe preview"
            className="max-w-full max-h-full"
          />
        </div>

        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
          Customizing:{" "}
          {selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)}
        </div>

        <div className="absolute top-4 right-4 flex space-x-2">
          {["lateral", "medial", "top", "heel"].map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
              className={`px-3 py-1 rounded-full text-sm ${
                currentView === view
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-black dark:bg-gray-700 dark:text-white"
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">      
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 px-6 flex justify-between items-center">
        <Link
          to={`/product/${id}`}
          className="flex items-center text-sm font-medium"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Product
        </Link>
        <h1 className="text-xl font-bold">Customize Your {product.name}</h1>
        <div className="text-sm font-medium">{product.price}</div>
      </div>
      
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 p-6">{renderShoePreview()}</div>
        
        <div className="border-l border-gray-200 dark:border-gray-700 p-6">          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Select Part to Customize
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.customizableAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedPart(area)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    selectedPart === area
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {area.charAt(0).toUpperCase() + area.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">
              Choose{" "}
              {selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)}{" "}
              Color
            </h2>

            <div className="grid grid-cols-5 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange(color.value)}
                  className={`w-full aspect-square rounded-full border-2 ${
                    customizations[selectedPart]?.color === color.value
                      ? "border-black dark:border-white"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`${color.name} color`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-3 mt-8">
            <button
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200"
              onClick={handleAuctionClick}
            >
              Auction
            </button>
            <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
      
      {showPidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">What's Your PiD?</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Add your Personal iD to make this design uniquely yours. This will
              be displayed on your auction listing.
            </p>
            <input
              type="text"
              maxLength={5}
              value={personalId}
              onChange={(e) => setPersonalId(e.target.value)}
              placeholder="Max 5 characters (A-Z, 0-9)"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-700 text-black dark:text-white"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowPidModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitPid}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded font-medium hover:bg-gray-800 dark:hover:bg-gray-200"
                disabled={!personalId.trim()}
              >
                Create Auction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizerPage;
