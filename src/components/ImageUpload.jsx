import React, { useState } from 'react';
import styled from 'styled-components'

function ImageUpload({ mainImage, setMainImage, setAdditionalImages, additionalImages, error, setError }) {
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
    }
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (additionalImages.length + files.length > 5) {
      setError('You can only upload up to 5 additional images.');
      return;
    }
    setError('');
    setAdditionalImages([...additionalImages, ...files]);
  };

  const removeAdditionalImage = (index) => {
    setAdditionalImages(additionalImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <FormGroup>
        <Label>Main Image:</Label>
        <Input type="file" onChange={handleMainImageChange} accept="image/*" />
        {mainImage && <ImagePreview src={URL.createObjectURL(mainImage)} alt="Main" />}
      </FormGroup>
      <FormGroup>
        <Label>Additional Images (up to 5):</Label>
        <Input type="file" multiple onChange={handleAdditionalImagesChange} accept="image/*" />
        <AdditionalImagesContainer>
          {additionalImages.map((image, index) => (
            <OrderImage key={index}>
              <ImagePreview src={URL.createObjectURL(image)} alt={`Additional ${index}`} />
              <RemoveButton type="button" onClick={() => removeAdditionalImage(index)}>Remove</RemoveButton>
            </OrderImage>
          ))}
        </AdditionalImagesContainer>
      </FormGroup>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default ImageUpload;


export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 72px !important; ;
  height: 72px !important;
  object-fit: cover;
`;


export const OrderImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;


export const RemoveButton = styled.button`
  margin-top: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px;
  width: 72px;
`;



export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AdditionalImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  // margin:0 auto;
  // justify-content: center;
`;



export const Form = styled.form`
border: 1px solid #ccc;
  padding:50px 20px;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  width: 100% !important;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
 width: 100% !important;
 max-width: 400px;
  margin-bottom: 30px !important;


`;

export const Label = styled.label`
  font-weight: bold;
    display: block;
    margin-bottom: 5px;
        color: var(--clr-primary-2) !important;

    width: 100% !important;

`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
    display: block;
    width: 100% !important;
  border: 2px solid var(--clr-primary-6);


`;

export const Select = styled.select`
  border: 2px solid var(--clr-primary-6);

  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const ErrorMessage = styled.p`
  color: red !important;
  margin: 0 !important;
  padding: 0 !important;
`;



export const SubmitButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
`;



