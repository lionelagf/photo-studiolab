'use client'
import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`)

      setSuccessMessage('Merci de nous avoir contactés !')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error(error)
      alert("Une erreur est survenue lors de l'envoi de votre message...")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type='submit' disabled={loading}>
        Envoyer
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  )
}

export default ContactForm
