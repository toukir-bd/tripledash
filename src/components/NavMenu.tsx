
 import { Sectionmenu } from './ui/SectionMenu'
import Link from 'next/link'
import Image from 'next/image'

const NavMenu = () => {
  return (
    <div className='w-full h-[70px] flex items-center justify-between bg-white/[.3] rounded-[70px]'>
        <div className='w-auto h-[48px]'>
            <Image className='w-auto h-[48px]' src='./logo.svg' alt='logo'/>
        </div>
        <div className='flex items-center justify-center space-x-1'>
            <Sectionmenu>
                <Link href="/dashboard">Dashboard</Link>
            </Sectionmenu>
            <Sectionmenu>Summary</Sectionmenu>
            <Sectionmenu>
                <Link href="/account">Account Info</Link>
            </Sectionmenu>
            <Sectionmenu>Finance</Sectionmenu>
            <Sectionmenu>Project</Sectionmenu>
            <Sectionmenu>Growth</Sectionmenu>
            <Sectionmenu>Contacts</Sectionmenu>
        </div>
    </div>
  )
}

export default NavMenu