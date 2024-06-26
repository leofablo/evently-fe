import Footer from '@/components/pages/global/footer'
import Navbar from '@/components/pages/global/navbar'
import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <div className='w-full h-16 md:h-20 absolute flex justify-center items-center border-b border-[#e8e8e8]'>
        <Navbar />
      </div>
      <div className='w-full pt-16 md:pt-20'>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout