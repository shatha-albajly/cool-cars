import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'
const Nav = () => {
  const { openSidebar } = useProductsContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <p className='logo ' >Cool Cars</p>
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}

        </ul>
        <Link className='btn hero-btn' to='/add-car'>Add Car</Link>



      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .hero-btn {
     display: none !important;
    }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
    .button-add-car {
   display: none !important;
}
     
  .logo{
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--clr-primary-7);
        margin-top: 0.5rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .logo{
        font-size: 2rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--clr-primary-7);
        margin-top: 0.5rem;
  }
  .cart-btn-wrapper {
    display: none;
  }
   
  @media (min-width: 992px) {
  
  .hero-btn  {
    background: var(--clr-primary-6);
    border-color: transparent;
    cursor: pointer;
    padding: 0.7rem 2rem;
    min-width: 2rem;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1rem;
    color: var(--clr-white);
    margin-left: 1.2rem;
    width: 150px
    font-weight: 700;
  }
   
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
       
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
