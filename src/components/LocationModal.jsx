import { useState } from "react"
import { X } from "lucide-react"

const LocationModal = ({ onClose }) => {
  const [selectedLocation, setSelectedLocation] = useState("India")

  const handleLocationChange = (location) => {
    setSelectedLocation(location)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-medium">We think you are in United States.</div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mb-4">Update your location?</p>

        <div className="flex gap-4">
          <button
            className={`flex-1 py-3 px-4 rounded-full border ${
              selectedLocation === "India" ? "border-black dark:border-white" : "border-gray-300 dark:border-gray-600"
            }`}
            onClick={() => handleLocationChange("India")}
          >
            India
          </button>

          <button
            className={`flex-1 py-3 px-4 rounded-full border ${
              selectedLocation === "United States"
                ? "border-black dark:border-white bg-black text-white dark:bg-white dark:text-black"
                : "border-gray-300 dark:border-gray-600"
            }`}
            onClick={() => handleLocationChange("United States")}
          >
            United States
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationModal
