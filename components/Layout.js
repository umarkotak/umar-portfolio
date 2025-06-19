import { Briefcase, CircleUser, Home, Layers3, LayoutTemplate, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

var startWorkAt = 2019

export default function Layout({ children }) {
  const pathname = usePathname()
  const params = useParams()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    // Close drawer when route changes
    setIsDrawerOpen(false)
  }, [pathname])

  function genActive(pname, target) {
    return pname === target
  }

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/experience', label: 'Experience', icon: Briefcase },
    { href: '/projects', label: 'Projects', icon: LayoutTemplate }
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile menu button */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={toggleDrawer}
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-xl">
                  <CircleUser className="text-white" size={24} />
                </div>
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Umar Portfolio
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  const isActive = genActive(pathname, item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 shadow-sm border border-orange-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent size={16} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
            onClick={toggleDrawer}
          />
        )}

        {/* Mobile Drawer */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-xl">
                <CircleUser className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold text-gray-800">Umar Portfolio</span>
            </div>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = genActive(pathname, item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 shadow-sm border border-orange-200'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile drawer footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-2 rounded-lg">
                <Layers3 className="text-white" size={16} />
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium">M Umar R.</p>
                <p>Reliable tech since {startWorkAt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/faq" className="group">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Layers3 className="text-white" size={28} />
                  </div>
                </Link>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">M Umar R.</h3>
                  <p className="text-gray-600">Providing reliable tech since {startWorkAt}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    {navItems.map((item) => {
                      const IconComponent = item.icon
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
                        >
                          <IconComponent size={14} />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  © {new Date().getFullYear()} Umar Portfolio. Built with passion.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}