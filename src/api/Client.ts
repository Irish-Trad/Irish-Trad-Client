import { createClient } from 'react-fetching-library'

import { requestHostInterceptor } from './requestInterceptors/requestHostInterceptor'

// In real application this const will be stored in ENV's
const HOST = 'http://localhost:5000'

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
})
