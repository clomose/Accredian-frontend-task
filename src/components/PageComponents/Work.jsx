import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import { UserPlus, Link, DollarSign} from 'lucide-react'

function Work() {
    const content = [
        {
            title: "Sign Up & Get Link",
            description: "Create your account and access your unique referral link instantly.",
            icon: UserPlus,
            footer: "Copy Referral Link"

        },
        {
            title: "Fill the Form",
            description: "Fill the form with your details and submit it.",
            icon: Link,
            footer: "Fill the Form"
        },
        {
            title: "Get Reward",
            description: "Get reward when your friend signs up/makes a purchase.",
            icon: DollarSign,
            footer: "Get Reward"
        }
    ]
  return (
    <div className='flex flex-col items-center justify-center h-full w-full py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50'>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='flex flex-col items-center gap-4 mb-12'
    >
        <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center'>
            Simple Steps to Earn Rewards!
        </h1>
        <p className='text-gray-600 text-center text-lg md:text-xl max-w-2xl'>
            Refer your friends in just 3 easy steps and start earning today!
        </p>
    </motion.div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full relative'>
        {content.map((item, index) => (
            <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className='w-full'
            >
                <Card className='group relative h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg bg-white overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 ' />
                    
                    <CardHeader className='flex flex-col items-center gap-4'>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-blue-100/50 blur-3xl' />
                            <div className='relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold border-2 border-blue-200/50'>
                                <item.icon className='w-8 h-8 ' />
                                <div className='absolute inset-0 rounded-full border-2  border-blue-200/50 animate-ping' />
                            </div>
                        </div>
                        
                        <CardTitle className='flex flex-col items-center gap-3 text-center'>
                            <div className='flex items-center gap-2'>
                                <div className='h-10 w-10 rounded-full bg-blue-100/50 relative border-2 border-blue-200/50 '>
                                    <span className='text-2xl font-bold text-blue-600'>
                                        {index + 1}
                                    </span>
                                </div>
                                <span className='text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                                    {item.title}
                                </span>
                            </div>
                        </CardTitle>
                    </CardHeader>

                    <CardContent className='text-center space-y-4'>
                        <p className='text-gray-600'>
                            {item.description}
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium'
                        >
                            {item.footer}
                        </motion.div>
                    </CardContent>
                    
                </Card>
            </motion.div>
        ))}
    </div>

    {/* Animated CTA */}
    <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.5 }}
        viewport={{ once: true }}
        className='mt-12'
    >
        <Button 
            className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6 rounded-2xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300'
        >
            🚀 Start Earning Now
        </Button>
    </motion.div>
</div>
  )
}

export default Work