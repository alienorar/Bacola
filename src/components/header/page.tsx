import Image from 'next/image'
import React from 'react'
import MainLogo from '../../images/main-logo.jpg'
import Search from '@/app/icons/search'
import User from '@/app/icons/user'
import CartWithBadge from '@/app/icons/cart'
import Sidebar from '../sidebar/page'
import { DropdownMenuCheckboxes } from '../dropdown/page'
import { getSubCategories } from '@/service/queries'
import Link from 'next/link'


const Header = async () => {
const data =  await getSubCategories()
    
    return (
        <header className='container'>
            <nav className='flex items-center py-5 justify-between '>
                <Sidebar />
                <div className='text-center lg:text-start md:text-start  md:block sm:block '>    <Link href="/">
                    <Image
                        src={MainLogo}
                        alt="Description of the image"
                        width={164}
                        height={43}
                        priority
                    />
                </Link></div>
                <div className='sm:hidden md:hidden lg:block hidden'>
                    <div className='py-2 text-[18px] bg-gray-200 text-gray-500 flex rounded-full px-2 w-[800px] h-[50px] justify-between items-center'>
                        <input type="text" placeholder='search...' className='focus:outline-none bg-inherit' />
                        <Search />
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='rounded-full border-[1px] border-gray-600 px-2  py-2 text-gray-600 hidden sm:block '> <User /></div>
                    <div className='rounded-full border-[1px] bg-red-100 px-2  py-2'>
                        <CartWithBadge />
                    </div>

                </div>
            </nav>
            <nav className='flex justify-between py-4 items-center  '>
                <DropdownMenuCheckboxes/>
              <div  className='flex gap-2'>
                    <Link href={'/blog'} className="h-[41px] flex justify-center items-center w-[90px] hover:bg-blue-500 hover:text-blue-50  rounded-full text-blue-500 bg-blue-50 transition duration-200">Blog
                </Link>
                    <Link href={'/contact'} className="h-[41px] flex justify-center items-center w-[120px] hover:bg-blue-500 hover:text-blue-50 rounded-full text-blue-500 bg-blue-50 transition duration-200">Contact
                </Link>
              </div>
            </nav>
        </header>

    )
}

export default Header