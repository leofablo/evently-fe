import NavbarAdmin from '@/components/pages/admin/navbar-admin'
import Sidebar from '@/components/pages/admin/sidebar'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full flex'>
      <div className='w-64 border-r border-[#CFCFCF] h-screen absolute hidden lg:block'>
        <Sidebar />
      </div>
      <div className='w-full lg:ml-64'>
        <div className='w-full h-16 md:h-20 bg-[#FFF] flex items-center border-b border-[#cfcfcf]'>
          <NavbarAdmin />
        </div>
        { children }
      </div>
    </div>
  )
}

export default AdminLayout