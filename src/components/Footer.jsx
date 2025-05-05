import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/find-a-store"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Find A Store
            </Link>
          </li>
          <li>
            <Link
              to="/become-a-member"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Become A Member
            </Link>
          </li>
          <li>
            <Link
              to="/running-shoe-finder"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Running Shoe Finder
            </Link>
          </li>
          <li>
            <Link
              to="/product-advice"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Product Advice
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Send Us Feedback
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Help</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/get-help"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Get Help
            </Link>
          </li>
          <li>
            <Link
              to="/order-status"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Order Status
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/returns"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Returns
            </Link>
          </li>
          <li>
            <Link
              to="/payment-options"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Payment Options
            </Link>
          </li>
          <li>
            <Link
              to="/contact-nike"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Contact Us On Nike.com Inquiries
            </Link>
          </li>
          <li>
            <Link
              to="/contact-other"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Contact Us On All Other Inquiries
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              About Nike
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/investors"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Investors
            </Link>
          </li>
          <li>
            <Link
              to="/sustainability"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Sustainability
            </Link>
          </li>
          <li>
            <Link
              to="/impact"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Impact
            </Link>
          </li>
          <li>
            <Link
              to="/report-concern"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              Report a Concern
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 flex justify-end">
      <div className="flex items-center">
        <span className="mr-2">India</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            fill="currentColor"
          />
          <path d="M12 17L17 12H14V8H10V12H7L12 17Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  </footer>
  )
}

export default Footer
