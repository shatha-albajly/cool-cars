import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from './ImageUpload';
import styled from 'styled-components';

function FormComponent() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [error, setError] = useState('');

  const onSubmit = (data) => {
    if (!mainImage) {
      setError('Please upload a main image.');
      return;
    }
    if (additionalImages.length > 5) {
      setError('You can only upload up to 5 additional images.');
      return;
    }
    setError('');

    // Show toast notification
    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // Submit form data here
    console.log(data, mainImage, additionalImages);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup >
          <Label>ID:</Label>
          <Input placeholder='Enter ID' type="number" {...register('id', {
            required: 'ID is required',
            validate: value => value > 0 || 'ID must be a positive number'
          })} />
          {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Car Name:</Label>
          <Input placeholder='Enter Car Name' type="text" {...register('name', {
            required: 'Name is required',
            minLength: { value: 5, message: 'Name must be at least 5 characters' }
          })} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Address:</Label>
          <Input placeholder='EnterYour Address' type="text" {...register('address', {
            required: 'Address is required',
            minLength: { value: 5, message: 'Address must be at least 5 characters' }
          })} />
          {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input placeholder='Enter Car Price' type="number" {...register('price', {
            required: 'Price is required',
            validate: value => value > 0 || 'Price must be a positive number'
          })} />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Name of Company:</Label>
          <Input type="text" placeholder='Enter Name Car Company' {...register('company', {
            required: 'Name of company is required',
            minLength: { value: 3, message: 'Name of company must be at least 3 characters' }
          })} />
          {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Model:</Label>
          <Input placeholder='Enter Car Model' type="text" {...register('model', {
            required: 'Model is required',
            minLength: { value: 3, message: 'Model must be at least 3 characters' }
          })} />
          {errors.model && <ErrorMessage>{errors.model.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Car Status:</Label>
          <Select  {...register('status', { required: 'Car status is required' })}>
            <option value="">Select...</option>
            <option value="crushed">Crushed</option>
            <option value="not-crushed">Not Crushed</option>
          </Select>
          {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
        </FormGroup>
        <ImageUpload
          mainImage={mainImage}
          setMainImage={setMainImage}
          setAdditionalImages={setAdditionalImages}
          additionalImages={additionalImages}
          error={error}
          setError={setError}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton className="btn btn-primary" type="submit">Submit</SubmitButton>
      </Form>
    </>
  );
}


export default FormComponent;




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
  margin-bottom: 23px;


`;

export const Label = styled.label`
  font-weight: bold;
    display: block;
    margin-bottom: 5px;
    width: 100% !important;
    // color: var(--clr-primary-2) !important;

`;

export const Input = styled.input`
  padding: 10px;
  // border: 2px solid var(--clr-primary-6);
  // border-radius: 4px;
    display: block;
    width: 100% !important;

`;

export const Select = styled.select`
  // border: 2px solid var(--clr-primary-5);

  padding: 10px;
  margin-top: 5px;
  // border-radius: 4px;
  width: 100% !important;
`;

export const ImagePreview = styled.img`
  margin-top: 10px;
  width: 20px ;
  height: 20px;
  object-fit: cover;
`;

export const ErrorMessage = styled.p`
  color: red !important;
  margin: 0 !important;
  padding: 0 !important;
`;



export const SubmitButton = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
`;



