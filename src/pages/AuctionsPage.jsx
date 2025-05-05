import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { auctions as initialAuctions } from "../data/products"
import { User } from "lucide-react"

const AuctionsPage = () => {
  const location = useLocation()
  const [auctions, setAuctions] = useState(initialAuctions)
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [showBidModal, setShowBidModal] = useState(false)
  const [selectedAuction, setSelectedAuction] = useState(null)
  const [bidAmount, setBidAmount] = useState("")

  useEffect(() => {    
    if (location.state?.newAuction) {
      const newAuction = {
        ...location.state.newAuction,
        id: auctions.length > 0 ? Math.max(...auctions.map((a) => a.id)) + 1 : 1,
      }
      setAuctions([newAuction, ...auctions])
    }
  }, [location.state])

  const filteredAuctions = auctions.filter((auction) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return auction.designName.toLowerCase().includes(query) || auction.creator.toLowerCase().includes(query)
    }
    if (filter === "all") return true
    return auction.productId === Number.parseInt(filter)
  })

  const sortedAuctions = [...filteredAuctions].sort((a, b) => {
    switch (sort) {
      case "price-high":
        return (
          Number.parseFloat(b.currentBid.replace(/[^\d.]/g, "")) -
          Number.parseFloat(a.currentBid.replace(/[^\d.]/g, ""))
        )
      case "price-low":
        return (
          Number.parseFloat(a.currentBid.replace(/[^\d.]/g, "")) -
          Number.parseFloat(b.currentBid.replace(/[^\d.]/g, ""))
        )
      case "ending-soon":
        return a.timeLeft.localeCompare(b.timeLeft)
      case "most-bids":
        return b.bidders - a.bidders
      case "newest":
      default:
        return b.id - a.id
    }
  })

  const handleBidClick = (auction) => {
    setSelectedAuction(auction)    
    const currentBidValue = Number.parseFloat(auction.currentBid.replace(/[^\d.]/g, ""))
    setBidAmount((currentBidValue + 500).toString())
    setShowBidModal(true)
  }

  const handlePlaceBid = () => {
    if (!selectedAuction) return

    const bidValue = Number.parseFloat(bidAmount)
    const currentBidValue = Number.parseFloat(selectedAuction.currentBid.replace(/[^\d.]/g, ""))

    if (bidValue <= currentBidValue) {
      alert("Your bid must be higher than the current bid")
      return
    }
    
    const updatedAuctions = auctions.map((auction) => {
      if (auction.id === selectedAuction.id) {
        return {
          ...auction,
          currentBid: `₹ ${bidValue.toFixed(2)}`,
          bidders: auction.bidders + 1,
        }
      }
      return auction
    })

    setAuctions(updatedAuctions)
    setShowBidModal(false)
    setSelectedAuction(null)
    setBidAmount("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nike By You Auctions</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
        Discover unique Nike By You designs created by the community or auction your own custom creations. Bid on your
        favorite designs and make them yours!
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
          >
            <option value="all">All Shoes</option>
            <option value="1">Phantom Luna</option>
            <option value="2">Dunk Low (Blue)</option>
            <option value="3">Dunk Low (Black)</option>
            <option value="4">Air Force 1</option>
            <option value="5">Air Max 90</option>
            <option value="6">Blazer Mid</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
          >
            <option value="newest">Newest</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
            <option value="ending-soon">Ending Soon</option>
            <option value="most-bids">Most Bids</option>
          </select>
        </div>

        <div className="relative w-full md:w-auto">
          <input
            type="search"
            placeholder="Search designs or creators"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
          />
        </div>
      </div>
      
      {sortedAuctions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={auction.image || "/placeholder.svg?height=300&width=400&text=" + auction.designName}
                  alt={auction.designName}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  {auction.timeLeft}
                </div>
                {auction.personalId && (
                  <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded text-xs font-bold">
                    {auction.personalId}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{auction.designName}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <User className="w-4 h-4 mr-1" />
                  <span className="text-sm">Created by {auction.creator}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Current Bid</div>
                    <div className="text-lg font-bold">{auction.currentBid}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Bidders</div>
                    <div className="text-lg font-bold">{auction.bidders}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleBidClick(auction)}
                  className="w-full py-2 bg-black dark:bg-white text-white dark:text-black text-center font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Place Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-bold mb-2">No auctions found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchQuery ? "No auctions match your search criteria." : "There are no active auctions at the moment."}
          </p>
          <Link
            to="/"
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Explore Nike By You
          </Link>
        </div>
      )}
      
      {showBidModal && selectedAuction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Place a Bid</h2>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                You are bidding on <span className="font-bold">{selectedAuction.designName}</span>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Current bid: <span className="font-bold">{selectedAuction.currentBid}</span>
              </p>
            </div>
            <div className="mb-4">
              <label htmlFor="bidAmount" className="block text-sm font-medium mb-1">
                Your Bid (₹)
              </label>
              <input
                type="number"
                id="bidAmount"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
                min={Number.parseFloat(selectedAuction.currentBid.replace(/[^\d.]/g, "")) + 1}
                step="100"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Minimum bid: {Number.parseFloat(selectedAuction.currentBid.replace(/[^\d.]/g, "")) + 500} ₹
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowBidModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceBid}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded font-medium hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuctionsPage
