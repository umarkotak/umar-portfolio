import { Briefcase, Contact, Home, LayoutTemplate } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Layout({ children }) {
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {

  }, [params])

  function genActive(pname, target) {
    if (`${pname}` !== target) { return null }

    return `bg-yellow-200 rounded-lg`
  }

  return(<>
    <div className="drawer drawer-oppen">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white border-b">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Umar Portfolio</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li className={`${genActive(pathname, "/")}`}>
                <Link className='hover:bg-yellow-300' href="/"><Home size={14} /> Home</Link>
              </li>
              <li className={`${genActive(pathname, "/experience")}`}>
                <Link className='hover:bg-yellow-300' href="/experience"><Briefcase size={14} /> Experience</Link>
              </li>
              <li className={`${genActive(pathname, "/products")}`}>
                <Link className='hover:bg-yellow-300' href="/products"><LayoutTemplate size={14} /> Products</Link>
              </li>
              <li className={`${genActive(pathname, "/contact")}`}>
                <Link className='hover:bg-yellow-300' href="/contact"><Contact size={14} /> Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        <main className=''>
          {children}
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li className={`${genActive(pathname, "/")}`}>
            <Link className='hover:bg-yellow-300' href="/"><Home size={14} /> Home</Link>
          </li>
          <li className={`${genActive(pathname, "/experience")}`}>
            <Link className='hover:bg-yellow-300' href="/experience"><Briefcase size={14} /> Experience</Link>
          </li>
          <li className={`${genActive(pathname, "/products")}`}>
            <Link className='hover:bg-yellow-300' href="/products"><LayoutTemplate size={14} /> Products</Link>
          </li>
          <li className={`${genActive(pathname, "/contact")}`}>
            <Link className='hover:bg-yellow-300' href="/contact"><Contact size={14} /> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </>)
}
