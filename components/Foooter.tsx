import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-ggreen text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4"> Léon Durand Dentista </h2>
          <p> Léon Durand dentiste numero un</p>
          <div className="flex items-center mt-4">
            <FiPhone className="mr-2" /> +212 66843-9890
          </div>
          <div className="flex items-center mt-2">
            <FiMail className="mr-2" /> contact@leondurand.com
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liens</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="/#apropos" className="hover:underline">À Propos</a></li>
            <li><a href="/#why-us" className="hover:underline">Pourquoi nous</a></li>
            <li><a href="/#après-avant" className="hover:underline">Avant-Après</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-gray-600">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-gray-600">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-900 rounded-full hover:bg-gray-600">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Léon Durand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
