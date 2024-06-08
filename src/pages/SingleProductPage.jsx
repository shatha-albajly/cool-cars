import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  PageHero,
  ShareButtons,

} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListView from '../components/ListView';
import GridView from '../components/GridView';
import SimilarProducts from '../components/SimilarProducts';
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products
  } = useProductsContext(

    );



  useEffect(() => {
    fetchSingleProduct(id);
    // eslint-disable-next-line

  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint - disable - next - line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    status,
    id: sku,
    company,
    seller_id,
    images,
    model,
    seller_name,
    address,
    seller_phone
  } = product;
  const similarSeller = products.filter((product) => {
    return product.seller_id === seller_id && product.id !== sku
  })
  const similarCompany = products.filter((product) => {
    return product.company === company && product.id !== sku
  })

  console.log(product);
  return (
    <Wrapper>
      <PageHero title={name} product />

      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>

            <h2>{name}</h2>
            <h5 className='price'><span>Price:</span> {formatPrice(price)}</h5>


            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <p className='info'>
              <span>Model :</span>
              {model}
            </p>
            <p className='info'>
              <span>Status :</span>
              {status}
            </p>
            <p className='info'>
              <span>Address :</span>
              {address}
            </p>
            <hr style={{ margin: "1rem 0" }} />

            <h3>Seller Details</h3>
            <p className='info'>
              <span>Seller Name :</span>
              {seller_name}
            </p>
            <p className='info'>
              <span>Seller Phone :</span>
              {seller_phone}
            </p>

            <hr style={{ margin: "1rem 0" }} />
            <ShareButtons />


          </section>



        </div>
        <div className='similar'>
          <h2>Other seller cars</h2>
          < SimilarProducts products={similarSeller} className='similar-products' />

        </div>
        <div className='similar' >
          <h2>Other company cars</h2>
          < SimilarProducts products={similarCompany} className='similar-products' />

        </div>


      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
.similar{
margin: 3rem 0;
h2{
  margin-bottom: 2rem;
}}
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .similar-products{
  display: flex;}

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
