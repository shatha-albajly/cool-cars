import React from "react";
import styled from 'styled-components'
import FormComponent from "../components/FormComponent";

const AddCar = () => {

  return (
    <main>
      <Wrapper className=' '>
        <FormComponent />

      </Wrapper>
    </main>
  )
};
const Wrapper = styled.section`
  
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  
`

export default AddCar;
