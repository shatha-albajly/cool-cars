import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, company, model, status, address } = product
        return (
          <article key={id}>
            <img src={"../" + image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <div className='info'>
                <div ><p> <span>Company:</span> {company}</p>
                  <p> <span>Model:</span> {model}</p></div>
                <div><p> <span>Status:</span> {status}</p>
                  <p> <span>Address:</span> {address}</p>
                </div>
              </div>



              {/* <p>{description.substring(0, 150)}...</p> */}
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
  }

  img {
    width: 100%;
    display: block;
    max-width: 330px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      shadow: var(--dark-shadow);
    }
      img {
   
   width: 330px;
   
  }
  }
`

export default ListView
