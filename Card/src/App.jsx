import { Children, useState } from 'react'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Layout>
     {Children}
     </Layout>
    </>
  )
}

export default App
