import { Action } from 'react-fetching-library'

import { ContactFormValues } from 'api/types/contact'

export const contactForm = (formValues: ContactFormValues): Action<any> => ({
  method: 'POST',
  endpoint: '/contact',
  body: formValues,
})
