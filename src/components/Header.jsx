import { NavLink } from "react-router";
import { CartContext } from '../context/CartContext'
import { useContext } from "react"
function Header(){
    const {cartCount} = useContext(CartContext);

    return (
        <header className="bg-white shadow-md rounded-b-lg">
            <div className="flex justify-between px-5 py-4">
                <h1>TechShop</h1>
                <nav className="flex gap-2">
                    <NavLink to='/'
                         className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
                    >Home</NavLink>
                    <NavLink
                     to='/about' 
                     className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
                     >About</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </nav>
                <NavLink
                     to='/cart' 
                     className={({ isActive }) =>
          isActive
            ? "font-bold text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }
                     >Cart: {cartCount}</NavLink>
            </div>
        </header>
    )
}

export default Header;