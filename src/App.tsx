import { Global, css } from '@emotion/react'
import { RouterProvider } from 'react-router-dom'

import { Suspense } from 'react'
import router from '@/router'

import { globalStyle } from '@/style'

const App = () => {
  return (
    <div className="App">
      <Global styles={css(globalStyle)} />
      <Suspense fallback={<h1>loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
