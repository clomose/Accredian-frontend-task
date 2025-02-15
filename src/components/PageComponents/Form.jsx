import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { User, Mail, X, Send, CheckCircle } from 'lucide-react'
import axios from 'axios'
import toast  from 'react-hot-toast'


const Form = ({setFormOpen, formOpen }) => {
    const [formData, setFormData] = useState({
        name: '',
        friendName: '',
        friendEmail: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState({})

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.friendName.trim()) newErrors.friendName = "Friend's name is required"
        if (!formData.friendEmail.trim()) {
            newErrors.friendEmail = "Friend's email is required"
        } else if (!isValidEmail(formData.friendEmail)) {
            newErrors.friendEmail = 'Invalid email format'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setIsSubmitting(true)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/refer`, formData)
            if (response.data.status === 201) {
                setErrors({})
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/refer/email`, formData)
                if(response.data.status === 201){
                    toast.success(response.data.message)
                    setIsSubmitting(false)
                    setIsSuccess(true)
                    setFormData({ name: '', friendName: '', friendEmail: '', message: '' })
                }else{
                    toast.error(response.data.error)
                }  
            }else{
                toast.error(response.data.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: '' }))
    }

    return (
        <>
            {formOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50'
                >
                    <motion.form
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        onSubmit={handleSubmit}
                        className='relative bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl w-full max-w-xl shadow-2xl border border-white/20'
                    >
                        <button
                            type='button'
                            onClick={() => setFormOpen(false)}
                            className='absolute -top-3 -right-3 bg-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-all'
                        >
                            <X className='w-6 h-6 text-purple-600' />
                        </button>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='text-center space-y-6'
                            >
                                <CheckCircle className='w-16 h-16 text-green-500 mx-auto' />
                                <h2 className='text-2xl font-bold text-gray-800'>
                                    Referral Sent Successfully through the email!
                                </h2>
                                <p className='text-gray-600'>
                                    Thank you for your referral. We'll get your reward soon.
                                </p>
                            </motion.div>
                        ) : (
                            <div className='space-y-6'>
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className='text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
                                >
                                    Referral Form
                                </motion.h1>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {['name', 'friendName'].map((field, index) => (
                                        <motion.div
                                            key={field}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className='space-y-2'
                                        >
                                            <Label className='text-gray-700 font-medium'>
                                                {field === 'name' ? 'Your Name' : "Friend's Name"} <span className='text-red-600'>*</span>
                                            </Label>
                                            <div className='relative group'>
                                                <User className='w-5 h-5 text-purple-600 absolute left-3 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-all' />
                                                <Input
                                                    name={field}
                                                    value={formData[field]}
                                                    onChange={handleChange}
                                                    placeholder={field === 'name' ? 'Your Name' : "Friend's Name"}
                                                    className={`pl-10 rounded-lg ${errors[field] ? 'border-red-500' : 'border-gray-200 group-hover:border-purple-600 transition-all'}`}
                                                />
                                                {errors[field] && (
                                                    <p className='text-red-500 text-sm mt-1'>{errors[field]}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className='space-y-2'
                                >
                                    <Label className='text-gray-700 font-medium'>Friend's Email <span className='text-red-600'>*</span></Label>
                                    <div className='relative group'>
                                        <Mail className='w-5 h-5 text-purple-600 absolute left-3 top-1/2 -translate-y-1/2 group-hover:scale-110 transition-all' />
                                        <Input
                                            name='friendEmail'
                                            type='email'
                                            value={formData.friendEmail}
                                            onChange={handleChange}
                                            placeholder="Friend's Email"
                                            className={`pl-10 rounded-lg ${errors.friendEmail ? 'border-red-500' : 'border-gray-200 group-hover:border-purple-600 transition-all'}`}
                                        />
                                        {errors.friendEmail && (
                                            <p className='text-red-500 text-sm mt-1'>{errors.friendEmail}</p>
                                        )}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='space-y-2'
                                >
                                    <Label className='text-gray-700 font-medium'>Message <span className='text-red-600'>*</span></Label>
                                    <Textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Write your message...'
                                        rows='4'
                                        className={`rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-200 hover:border-purple-600 transition-all'}`}
                                    />
                                    {errors.message && (
                                        <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className='pt-4'
                                >
                                    <Button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-105'
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className='w-5 h-5' />
                                                Send Referral
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            </div>
                        )}
                    </motion.form>
                </motion.div>
            )}
        </>
    )
}

export default Form