import React from 'react'
import Page from 'components/Page'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { useMutation } from 'react-fetching-library'

import { contactForm } from 'api/actions/contact'

interface IFormInputs {
  name: string
  email: string
  message: string
}

const schema = object().shape({
  name: string().required(),
  email: string().required(),
  message: string().required(),
})

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setsuccessMessage] = useState('')

  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })

  const { loading, mutate } = useMutation(contactForm)

  const onSubmit = async (formValues: IFormInputs) => {
    const { error: mutateError } = await mutate(formValues)

    if (mutateError) {
      return setErrorMessage('Message Failed To Send, Try Again')
    }

    setsuccessMessage('Message Sent Successfully')
  }

  return (
    <Page
      title="Irish-Trad.net - Contact"
      metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    >
      <h1>Contact Form</h1>
      <section>
        <p>
          If you have any enquiries, feedback or suggestions for future material
          or find a broken page then you can use the contact form correspond.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={register} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="email" name="email" ref={register} />
          <p>{errors.email?.message}</p>

          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register} />
          <p>{errors.message?.message}</p>

          {errorMessage && <p>{errorMessage}</p>}

          {successMessage && <p>{successMessage}</p>}

          {!loading ? <button type="submit">Submit</button> : <p>Loading</p>}
        </form>
      </section>
    </Page>
  )
}

export default Contact
