import React from 'react'
import Navbar from '../navbar/Navbar'
import SearchForm from '../searchForm/SearchForm'
import './Header.css'
const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white">
                <h2 className='header-title text-capitalize'>
                    find your book of choice

                </h2><br />
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequuntur molestiae officiis placeat voluptatem eveniet blanditiis sequi delectus aspernatur quae sunt reiciendis non repellendus laboriosam dolor magni debitis, repellat atque!

                </p>
                <SearchForm/>
                 
            </div>
        </header>
    </div>
  )
}

export default Header