import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>
                <Link to="/find-a-store" className="hover:text-white">
                  Find A Store
                </Link>
              </li>
              <li>
                <Link to="/become-a-member" className="hover:text-white">
                  Become A Member
                </Link>
              </li>
              <li>
                <Link to="/running-shoe-finder" className="hover:text-white">
                  Running Shoe Finder
                </Link>
              </li>
              <li>
                <Link to="/product-advice" className="hover:text-white">
                  Product Advice
                </Link>
              </li>
              <li>
                <Link to="/send-us-feedback" className="hover:text-white">
                  Send Us Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>
                <Link to="/help/get-help" className="hover:text-white">
                  Get Help
                </Link>
              </li>
              <li>
                <Link to="/help/order-status" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link to="/help/delivery" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/help/returns" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/help/payment-options" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="/help/contact-us-on-nike" className="hover:text-white">
                  Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link to="/help/contact-us-all-other" className="hover:text-white">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>
                <Link to="/about/about-nike" className="hover:text-white">
                  About Nike
                </Link>
              </li>
              <li>
                <Link to="/about/news" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about/investors" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/about/sustainability" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about/impact" className="hover:text-white">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/about/report-a-concern" className="hover:text-white">
                  Report a Concern
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-800 flex justify-between text-gray-400 text-xs">
          <div>
            <button className="flex items-center">
              <span className="mr-2">🌐</span>
              <span>India</span>
            </button>
          </div>
          <div>© 2025 Nike, Inc. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
