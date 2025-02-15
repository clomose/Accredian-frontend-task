import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { motion } from 'framer-motion'
const Faq = () => {
  const faqItems = [
    {
      value: 'item-1',
      question: 'What is this platform?',
      answer: 'A revolutionary platform that lets you earn rewards by referring friends. Share your unique link and get bonuses for every successful referral.'
    },
    {
      value: 'item-2',
      question: 'How to earn money?',
      answer: 'Earn commissions through our multi-tier reward system. Get paid when your friends join and even earn from their referrals!'
    },
    {
      value: 'item-3',
      question: 'How to refer friends?',
      answer: 'Simply use your personalized referral link or share through social media. Track all your referrals in real-time through your dashboard.'
    }
  ]

  return (
    <div className='w-full max-w-4xl mx-auto py-16 px-4 md:px-8'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className='text-center mb-12'
      >
        <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4'>
          Frequently Asked Questions
        </h2>
        <p className='text-gray-600 text-lg'>Everything you need to know about our referral program</p>
      </motion.div>

      <Accordion type='single' collapsible className='space-y-4'>
        {faqItems.map((item, index) => (
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={item.value} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <AccordionTrigger className='flex w-full items-center justify-between p-6 text-left'>
                <span className='text-lg font-semibold text-gray-800'>{item.question}</span>
              </AccordionTrigger>
              
              <AccordionContent className='px-6 pb-6 pt-2 text-gray-600'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='text-center mt-12 text-gray-600'
      >
        Still have questions?{' '}
        <button className='text-purple-600 font-semibold hover:underline'>
          Contact support
        </button>
      </motion.div>
    </div>
  )
}

export default Faq