'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Button } from './ui/button'
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Votre message a été envoyé avec succès!')
    setFormValues({ email: '', subject: '', message: '' }) // Reset form fields
  }

  return (
    <main id='form' className='flex flex-col md:flex-row items-center justify-around px-10 gap-4'>
      <iframe
        className='order-1 md:order-2'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22357.72551715354!2d-7.584154654572247!3d33.59243854272326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1730742896055!5m2!1sen!2sma"
        width="500"
        height="580"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-md">
            Vous avez un problème technique ? Besoin d'aide ? Faites-le nous savoir.
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="nom@exemple.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                value={formValues.subject}
                onChange={handleChange}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Dites-nous comment nous pouvons vous aider"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Votre message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formValues.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Laissez un commentaire..."
                required
              />
            </div>
            <button type='submit' className="relative inline-block px-6 py-3 text-black font-medium rounded-lg bg-gradient-to-r from-ggreen to-bgreen">
              Envoyer
            </button>
          </form>
        </div>
        <ToastContainer/>
      </section>
    </main>
  )
}

export default ContactForm
