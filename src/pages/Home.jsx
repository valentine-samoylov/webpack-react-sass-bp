// Home
import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import setDynamicVH from '@utils/setDynamicVH'

const Home = () => {
  useEffect(() => {
    window.addEventListener('load', setDynamicVH)
    window.addEventListener('resize', setDynamicVH)

    return () => {
      window.removeEventListener('load', () => setDynamicVH)
      window.removeEventListener('resize', () => setDynamicVH)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="main"></main>
      <Footer />
    </>
  )
}

export default Home
