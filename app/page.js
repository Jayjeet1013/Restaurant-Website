import AboutUs from '@/components/home/AboutUs'
import Blogs from '@/components/home/Blogs'
import BookTable from '@/components/home/BookTable'
import Chef from '@/components/home/Chef'
import Customers from '@/components/home/Customers'
import Gallery from '@/components/home/Gallery'
import Hero from '@/components/home/Hero'
import Laurels from '@/components/home/Laurels'
import Menu from '@/components/home/Menu'
import Subscribe from '@/components/home/Subscribe'
import Image from 'next/image'

export default function Home() {
  return (
      <div >
        <Hero/>
        <AboutUs/>
        <BookTable/>
        <Menu/>
        <Chef/>
        <Customers/>
        <Laurels/>
        <Blogs/>
        <Gallery/>
        <Subscribe/>
      </div>
  )
}
