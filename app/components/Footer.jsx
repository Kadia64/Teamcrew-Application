import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Team C.R.E.W. Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Team C.R.E.W.</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Home</Link></li>
              <li><Link href="/merch" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shop</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Contact</Link></li>
            </ul>
          </div>

          {/* Leadership Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Leadership</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">FAQ</Link></li>
              <li><Link href="/shipping-returns" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Shipping & Returns</Link></li>
              <li><Link href="/store-policy" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Store Policy</Link></li>
              <li><Link href="/payment-methods" className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand">Payment Methods</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.facebook.com/groups/331519849555650/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d51510] transition-colors font-quicksand"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-din-neuzeit text-[#d51510]">Join Our Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Stay updated with Team C.R.E.W. news and events.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Team C.R.E.W. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}