import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">Asian-Mart</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <button className='login btn btn-warning '>
              <Link to={'/login'}>Admin</Link>
            </button>

            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>


            <Link to={'/notification'} className="notification">
            <button type="button" className="btn btn-danger position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className=" fa fa-bell bg-danger">
    {cart.length}
    
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper btn btn-primary">
            
            <div 
            onClick={()=>setData(items)}
            className="items">Home</div>
            <div 
            onClick={()=>filterByCategory('mobiles')}
             className="items">Mobiles</div>
            <div
            onClick={()=>filterByCategory('laptops')}
    
             className="items">Laptops</div>
            <div
            onClick={()=>filterByCategory('tablets')}
    
             className="items">Tablets</div>
             <div className="items"></div>
            
            
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar