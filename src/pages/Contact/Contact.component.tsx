import Metadata from 'common/Metadata'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

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
  const { register, handleSubmit, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <>
      <Metadata
        title="Irish-Trad.net - Contact"
        metaTitle="Irish-Trad.net - Contact"
        metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
        metaDescription="Free Online Lessons and Resources for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
      />
      <h1>Contact Form</h1>
      <section>
        <p>
          If you have any enquiries, feedback or suggestions for future material
          or find a broken page on the website then you can use the contact form
          below to correspond.
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

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Contact
