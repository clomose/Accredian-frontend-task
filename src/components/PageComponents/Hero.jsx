import React, { useState } from 'react'
import image from '../../assets/refer.jpg'
import man from '../../assets/man.png'
import woman from '../../assets/woman.png'
import boy from '../../assets/boy.png'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Hero = () => {
    const avatars = [man, woman, boy]
  return (
    <div className='flex flex-col justify-center w-full h-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 md:px-8 lg:px-16'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto items-center py-12'>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-start p-6 md:p-10 gap-6'
        >
            <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold'
            >
                🎉 Referral Program
            </motion.span>
            
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
            >
                Earn Amazing Rewards Through Friends
            </motion.h1>
            
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className='text-lg md:text-xl text-gray-600 max-w-2xl'
            >
                Share your unique referral link and earn exclusive rewards for every friend who joins. Get started today and unlock premium benefits!
            </motion.p>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className='flex flex-col md:flex-row gap-4 w-full'
            >
                <Button 
                    className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                    🚀 Start Referring Now
                </Button>
                <div className='flex items-center gap-2 text-gray-600'>
                    <Star className='w-6 h-6 text-yellow-400' />
                    <span className='font-medium'>4.9/5 from 10k+ users</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className='mt-8 flex items-center gap-4'
            >
                <div className='flex -space-x-4'>
                    {avatars.map((avatar, index) => (
                        <Avatar key={index} className='hover:scale-110 transition-all duration-300 hover:cursor-pointer'>
                            <AvatarImage src={avatar} />
                            <AvatarFallback>
                                {index + 1}
                            </AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <p className='text-gray-600'>
                    Join <span className='font-bold text-blue-600'>50,000+</span> happy members
                </p>
            </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-20' />
            
            <motion.img
                whileHover={{ scale: 1.05, }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring' , stiffness: 300 }}
                src={image}
                alt="Referral rewards"
                className='relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] rounded-3xl object-cover shadow-2xl hover:shadow-3xl transition-all hover:cursor-pointer'
            />
            
            <div
                className='absolute -bottom-8 left-0 bg-white px-6 py-3 rounded-2xl shadow-lg animate-bounce animate-infinite'
            >
                🎁 Earn up to $500!
            </div>
        </motion.div>
    </div>
</div>
  )
}

export default Hero