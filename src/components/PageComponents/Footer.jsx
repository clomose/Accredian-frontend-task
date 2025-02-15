import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='w-full bg-gradient-to-br from-purple-950 to-blue-950 text-white mt-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='space-y-4'
          >
            <h3 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              ReferralPro
            </h3>
            <p className='text-gray-300'>
              Empowering connections through trusted referrals
            </p>
            <div className='flex gap-4'>
              {[Linkedin, Twitter, Mail].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all'
                >
                  <Icon className='w-5 h-5' />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-semibold text-purple-300'>Quick Links</h4>
            <ul className='space-y-2 text-gray-300'>
              {['About', 'Features', 'FAQs', 'Support'].map((link, index) => (
                <li key={index}>
                  <a href='#' className='hover:text-purple-400 transition-colors'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-semibold text-purple-300'>Legal</h4>
            <ul className='space-y-2 text-gray-300'>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <li key={index}>
                  <a href='#' className='hover:text-purple-400 transition-colors'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='space-y-4'
          >
            <h4 className='text-lg font-semibold text-purple-300'>Stay Updated</h4>
            <form className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400'
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-medium'
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 mb-8' />

        {/* Bottom Row */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='text-center md:text-left'
          >
            © 2025 ReferralPro. All rights reserved.
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className='flex items-center gap-2 hover:text-purple-400 transition-colors'
          >
            Back to Top
            <ArrowUp className='w-4 h-4' />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer