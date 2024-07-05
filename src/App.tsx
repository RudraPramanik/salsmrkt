import './App.css'
import Layout from './components/layout/Layout'
import ProductPage from './pages/ProductPage'


function App() {

  return (
    <>
    <Layout>
      <div className='mx-4 2xl:mx-6 3xl:mx-8 4xl:mx-12 mt-2 sm:mt-4 2xl:mt-6 3xl:mt-8 4xl:mt-12 ' >
      <ProductPage/>
      </div>
    </Layout>
    </>
  )
}

export default App
