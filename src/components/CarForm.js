import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function CarForm() {
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const onSubmit = (data) => {
        if (!mainImage) {
            setError('mainImage', { type: 'manual', message: 'Main image is required' });
            return;
        }
        if (additionalImages.length > 5) {
            setError('additionalImages', { type: 'manual', message: 'You can only upload up to 5 additional images' });
            return;
        }
        const formData = {
            ...data,
            mainImage,
            additionalImages,
        };
        console.log(formData);
        // Process the form data here
    };

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMainImage(file);
            clearErrors('mainImage');
        }
    };

    const handleAdditionalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        if (additionalImages.length + files.length > 5) {
            setError('additionalImages', { type: 'manual', message: 'You can only upload up to 5 additional images' });
            return;
        }
        clearErrors('additionalImages');
        setAdditionalImages([...additionalImages, ...files]);
    };

    const removeAdditionalImage = (index) => {
        setAdditionalImages(additionalImages.filter((_, i) => i !== index));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title:</label>
                <input {...register('title', { required: 'Title is required' })} />
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
            </div>

            <div>
                <label>Price:</label>
                <input type="number" {...register('price', { required: 'Price is required', valueAsNumber: true })} />
                {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
            </div>

            <div>
                <label>Company:</label>
                <input {...register('company', { required: 'Company is required' })} />
                {errors.company && <p style={{ color: 'red' }}>{errors.company.message}</p>}
            </div>

            <div>
                <label>Model:</label>
                <input {...register('model', { required: 'Model is required' })} />
                {errors.model && <p style={{ color: 'red' }}>{errors.model.message}</p>}
            </div>

            <div>
                <label>Status:</label>
                <select {...register('status', { required: 'Status is required' })}>
                    <option value="crashed">Crashed</option>
                    <option value="not crashed">Not Crashed</option>
                </select>
                {errors.status && <p style={{ color: 'red' }}>{errors.status.message}</p>}
            </div>

            <div>
                <label>Main Image:</label>
                <input type="file" accept="image/*" onChange={handleMainImageChange} />
                {errors.mainImage && <p style={{ color: 'red' }}>{errors.mainImage.message}</p>}
                {mainImage && <img src={URL.createObjectURL(mainImage)} alt="Main" width="100" />}
            </div>

            <div>
                <label>Additional Images (up to 5):</label>
                <input type="file" multiple accept="image/*" onChange={handleAdditionalImagesChange} />
                {errors.additionalImages && <p style={{ color: 'red' }}>{errors.additionalImages.message}</p>}
                <div>
                    {additionalImages.map((image, index) => (
                        <div key={index}>
                            <img src={URL.createObjectURL(image)} alt={`Additional ${index}`} width="100" />
                            <button type="button" onClick={() => removeAdditionalImage(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default CarForm;
