import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Products from './ProductRender/Products'
import Home from '../pages/Home'
import Category from '../pages/Category'
function ProductLayout () {
    const [ currentPage, setCurrentPage ] = useState("Products")
    return(
        <div>
            <Header/>
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <main>
                <div>
                    { currentPage === "Home" && (<Home setCurrentPage={setCurrentPage}/>)}
                    { currentPage === "Products" && (<Products/>)}
                    { currentPage === "Category" && (<Category/>)}
                </div>
            </main>   
        </div>
    )

}

export default ProductLayout