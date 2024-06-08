import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero2.jpg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Right Place <br />
          for Cool Cars
        </h1>
        <p>
          This is the best place for cool cars. You can buy cool cars here.
          You can also sell cool cars here. This is the best place for cool cars. You can buy cool cars here. You can also sell cool cars here.


        </p>
        <div className='btn-container'>
          <Link to='/products' className='btn hero-btn'>
            Shop now
          </Link>
          <Link to='/add-car' className='btn hero-btn'>
            Sell now
          </Link>
        </div>

      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
 
  .hero-btn {

     
      margin-right: 1rem;
    }
  .img-container {
    display: none;
  }

  p {
    line-height: 1.5;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      margin-right: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 400px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
