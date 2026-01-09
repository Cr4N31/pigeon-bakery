import HomeImg from '../../assets/icons/home.svg'
import ProductImg from '../../assets/icons/product.svg'
import CategoryImg from '../../assets/icons/category.svg'

import { useEffect, useState } from 'react'

function Sidebar({ currentPage, setCurrentPage }) {
  const [mounted, setMounted] = useState(false)

  const sidebarItems = [
    { id: 1, img: HomeImg, item: "Home" },
    { id: 2, img: ProductImg, item: "Products" },
    { id: 3, img: CategoryImg, item: "Category" },
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
        bg-white 
        rounded-full 
        shadow-xl 
        shadow-black/20
        px-3 
        py-8
        z-50

        transform
        transition-all
        duration-500
        ease-out

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
                  ${
                    isActive
                      ? "text-teal-500"
                      : "text-gray-700 hover:text-teal-500"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    w-10 
                    h-10 
                    flex 
                    items-center 
                    justify-center
                    rounded-full
                    transition
                    ${
                      isActive
                        ? "bg-teal-50 ring-2 ring-teal-400"
                        : "hover:bg-teal-50"
                    }
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
                    ${
                      isActive
                        ? "text-teal-600"
                        : "text-gray-500"
                    }
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
