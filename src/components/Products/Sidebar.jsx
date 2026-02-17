import HomeImg from '../../assets/icons/home.svg'
import ProductImg from '../../assets/icons/product.svg'

import { useEffect, useState } from 'react'

function Sidebar({ currentPage, setCurrentPage }) {
  const [mounted, setMounted] = useState(false)

  const sidebarItems = [
    { id: 1, img: HomeImg, item: "Home" },
    { id: 2, img: ProductImg, item: "Products" },
  ]

  // Slide-in animation on mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <aside
      className={`
        fixed
        top-1/2 
        -translate-y-1/2 
        left-4
        bg-stone-50 
        rounded-full 
        shadow-md 
        shadow-stone-300
        px-4 
        py-8
        z-50

        transform
        transition transform opacity duration-500 ease-out
        ${mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
      `}
    >
      <ul className="flex flex-col items-center gap-6">
        {sidebarItems.map((sidebarItem) => {
          const isActive = currentPage === sidebarItem.item

          return (
            <li key={sidebarItem.id}>
              <button
                onClick={() => setCurrentPage(sidebarItem.item)}
                className={`
                  flex 
                  flex-col 
                  items-center 
                  gap-1
                  transition
                  ${isActive ? "text-rose-400" : "text-stone-600 hover:text-rose-400"}
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    w-12 
                    h-12 
                    flex 
                    items-center 
                    justify-center
                    rounded-full
                    transition
                    ${isActive ? "bg-rose-50 ring-2 ring-stone-800" : "hover:bg-rose-50"}
                  `}
                >
                  <img
                    src={sidebarItem.img}
                    alt={sidebarItem.item}
                    className="w-6 h-6"
                  />
                </div>

                {/* Label (hidden on small screens) */}
                <p
                  className={`
                    hidden md:block text-xs font-medium
                    ${isActive ? "text-stone-800" : "text-stone-500"}
                  `}
                >
                  {sidebarItem.item}
                </p>
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
