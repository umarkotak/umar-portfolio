import { Briefcase, CircleUser, Home, Layers3, LayoutTemplate, Menu } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect } from 'react'

var startWorkAt = 2019

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
              <Menu />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2"><CircleUser className='mr-2' /> Umar Portfolio</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li className={`${genActive(pathname, "/")}`}>
                <Link className='hover:bg-yellow-300' href="/"><Home size={14} /> Home</Link>
              </li>
              <li className={`${genActive(pathname, "/experience")}`}>
                <Link className='hover:bg-yellow-300' href="/experience"><Briefcase size={14} /> Experience</Link>
              </li>
              <li className={`${genActive(pathname, "/projects")}`}>
                <Link className='hover:bg-yellow-300' href="/projects"><LayoutTemplate size={14} /> Projects</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        <main className='min-h-screen'>
          {children}
        </main>

        <footer className="footer p-10 bg-white text-black border-t mt-6">
          <aside>
            <Link href="/faq">
              <Layers3 size={46} />
            </Link>

            <p>M Umar R.<br/>Providing reliable tech since {startWorkAt}</p>
          </aside>
          {/* <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav> */}
        </footer>
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
          <li className={`${genActive(pathname, "/projects")}`}>
            <Link className='hover:bg-yellow-300' href="/projects"><LayoutTemplate size={14} /> Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  </>)
}
