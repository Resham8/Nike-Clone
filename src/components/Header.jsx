import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  Sun,
  Moon,
  SunIcon,
  MoonIcon,
  Sparkles,
} from "lucide-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-white dark:bg-gray-900 py-2 px-4 flex justify-end text-xs space-x-4 border-b border-gray-200">
        <Link to="/find-a-store" className="hover:underline">
          Find a Store
        </Link>
        <span>|</span>
        <Link to="/help" className="hover:underline">
          Help
        </Link>
        <span>|</span>
        <Link to="/join-us" className="hover:underline">
          Join Us
        </Link>
        <span>|</span>
        <Link to="/sign-in" className="hover:underline">
          Sign In
        </Link>
      </div>

      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="mr-6">
            <svg
              aria-hidden="true"
              class="swoosh-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="28px"
              height="28px"
              fill="none"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link
              to="/new"
              className="hover:text-gray-500 dark:hover:text-gray-300"
              onMouseEnter={() => setShowMegaMenu(true)}
            >
              New & Featured
            </Link>
            <Link
              to="/men"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Kids
            </Link>
            <Link
              to="/sale"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              Sale
            </Link>
            <Link
              to="/snkrs"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            >
              SNKRS
            </Link>
            <Link
              to="/auctions"
              className="text-pink-500 hover:text-yellow-400 dark:text-pink-400 dark:hover:text-yellow-300 font-semibold transition-colors duration-300 flex items-center gap-1"
            >
              Auctions <Sparkles />
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          <Link
            to="/favorites"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Heart className="w-5 h-5" />
          </Link>

          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {showMegaMenu && (
        <div
          className="absolute left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200"
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="container mx-auto py-8 px-6">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Featured</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/new-upcoming-drops" className="hover:underline">
                      New & Upcoming Drops
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-arrivals" className="hover:underline">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link to="/bestsellers" className="hover:underline">
                      Bestsellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/snkrs-launch-calendar"
                      className="hover:underline"
                    >
                      SNKRS Launch Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/customise-with-nike-by-you"
                      className="hover:underline"
                    >
                      Customise with Nike By You
                    </Link>
                  </li>
                  <li>
                    <Link to="/jordan" className="hover:underline">
                      Jordan
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Trending</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/summer-essentials" className="hover:underline">
                      Summer Essentials
                    </Link>
                  </li>
                  <li>
                    <Link to="/air-max-day" className="hover:underline">
                      Air Max Day
                    </Link>
                  </li>
                  <li>
                    <Link to="/whats-trending" className="hover:underline">
                      What's Trending
                    </Link>
                  </li>
                  <li>
                    <Link to="/nike-24-7" className="hover:underline">
                      Nike 24.7
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/colours-of-the-season"
                      className="hover:underline"
                    >
                      Colours of the Season: Pastel
                    </Link>
                  </li>
                  <li>
                    <Link to="/retro-running" className="hover:underline">
                      Retro Running
                    </Link>
                  </li>
                  <li>
                    <Link to="/running-shoe-finder" className="hover:underline">
                      Running Shoe Finder
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Shop Icons</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/lifestyle" className="hover:underline">
                      Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link to="/air-force-1" className="hover:underline">
                      Air Force 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/air-jordan-1" className="hover:underline">
                      Air Jordan 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/air-max" className="hover:underline">
                      Air Max
                    </Link>
                  </li>
                  <li>
                    <Link to="/dunk" className="hover:underline">
                      Dunk
                    </Link>
                  </li>
                  <li>
                    <Link to="/cortez" className="hover:underline">
                      Cortez
                    </Link>
                  </li>
                  <li>
                    <Link to="/blazer" className="hover:underline">
                      Blazer
                    </Link>
                  </li>
                  <li>
                    <Link to="/pegasus" className="hover:underline">
                      Pegasus
                    </Link>
                  </li>
                  <li>
                    <Link to="/vomero" className="hover:underline">
                      Vomero
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Shop By Sport</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/running" className="hover:underline">
                      Running
                    </Link>
                  </li>
                  <li>
                    <Link to="/basketball" className="hover:underline">
                      Basketball
                    </Link>
                  </li>
                  <li>
                    <Link to="/football" className="hover:underline">
                      Football
                    </Link>
                  </li>
                  <li>
                    <Link to="/golf" className="hover:underline">
                      Golf
                    </Link>
                  </li>
                  <li>
                    <Link to="/tennis" className="hover:underline">
                      Tennis
                    </Link>
                  </li>
                  <li>
                    <Link to="/gym-and-training" className="hover:underline">
                      Gym and Training
                    </Link>
                  </li>
                  <li>
                    <Link to="/yoga" className="hover:underline">
                      Yoga
                    </Link>
                  </li>
                  <li>
                    <Link to="/skateboarding" className="hover:underline">
                      Skateboarding
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100 dark:bg-gray-900 py-3 text-center text-sm border-t border-b border-gray-200 dark:border-gray-700">
        <p>New Styles On Sale: Up To 40% Off</p>
        <Link to="/sale" className="underline text-xs hover:no-underline">
          Shop All Our New Markdowns
        </Link>
      </div>
    </header>
  );
};

export default Header;
