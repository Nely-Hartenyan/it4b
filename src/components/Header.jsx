function Header({cart}){
    return (
        <header className="bg-white shadow-md rounded-b-lg">
            <div className="flex justify-between px-5 py-4">
                <h1>TechShop</h1>
                <nav className="flex gap-2">
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Products</a>
                </nav>
                <p>Cart: {cart}</p>
            </div>
        </header>
    )
}

export default Header;