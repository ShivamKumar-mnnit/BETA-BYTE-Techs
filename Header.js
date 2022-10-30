/* will contain navbar*/
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function header() {
  return (
    <div className='header'>
      <img className='header_logo'
        src="https://imgs.search.brave.com/RXaL9YIWhMCQULo7psVHKR0Erlet6X_uDCIRwU7EXLA/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9kMjR2/NW9vbm5qMm5jbi5j/bG91ZGZyb250Lm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMC8xNjAzMDMw/MS9BbWF6b24tTG9n/by1CbGFjay5qcGc" placeholder='logo' />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className='header_optionLineOne'>HELLO GUEST</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>

        <div className="header_option">
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>

        </div>

        <div className="header_option">
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>



      </div>
    </div>
  )
}

export default header