import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link, Redirect } from 'react-router-dom';
import { getProduct, getCategories, updateProduct } from './apiAdmin';

const UpdateProduct = ({ match }) => {

	const [values, setValues] = useState({
		name: '',
		description: '',
		colour: '',
		categories: [],
		category: '',
		item: '',
		measurement: '',
		photo: '',
		quantity: '',
		loading: '',
		sold: '',
		error: '',
		createdProduct: '',
		redirectToProfile: '',
		formData: ''
	});

	const {
		name,
		description,
		colour,
		categories,
		category,
		item,
		measurement,
		photo,
		loading,
		quantity,
		sold,
		error,
		createdProduct,
		redirectToProfile,
		formData
	} = values;

	const init = (productId) => {
		getProduct(productId).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error })
			} else {
				setValues({ 
					...values, 
					name: data.name, 
					description: data.description, 
					colour: data.colour,
					category: data.category,
					item: data.item,
					measurement: data.measurement,
					quantity: data.quantity,
					sold: data.sold,
					formData: new FormData()
				});
				initCategories();		
			}
		})
	}

	const initCategories = () => {
		getCategories()
			.then(data => {
				if (data.error) {
					setValues({ ...values, error: data.error });
				} else {
					setValues({ categories: data, formData: new FormData() });
				}
			})
	}

	useEffect(() => {
		init(match.params.productId);
	}, []);

	const handleChange = name => event => {
		const value = name === 'photo' ? event.target.files[0] : event.target.value;
		formData.set(name, value)
		setValues({ ...values, [name]: value })
	}

	const clickSubmit = event => {
		event.preventDefault();
		setValues({ ...values, error: '', loading: true })
		updateProduct(match.params.productId, formData)
			.then(data => {
				if (data.error) {
					setValues({ ...values, error: data.error });
				} else {
					setValues({ 
						...values,
						name: '',
						description: '',
						colour: '',
						item: '',
						measurement: '',
						quantity: '',
						sold: '',
						photo: '',
						loading: false,
						createdProduct: data.name,
					})
				}
			}) 
	}

	const newPostForm = () => {
		return (
			<form className='mb-3' onSubmit={clickSubmit}>
				<h4>Post Photo</h4>
				<div className='form-group'>
					<label className="btn btn-secondary">
						<input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
					</label>
				</div>
				<div className='form-group'>
					<label className='text-muted'>Name</label>
					<input onChange={handleChange('name')} type="text" className='form-control' value={ name } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Description</label>
					<textarea onChange={handleChange('description')} className='form-control' value={ description } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Colour</label>
					<input onChange={handleChange('colour')} type="text" className='form-control' value={ colour } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Category</label>
					<select onChange={handleChange('category')} className='form-control'>
						<option>Please select</option>
						{categories && categories.map((c, i) => (
                            <option key={i} value={c._id}>{c.name}</option>
                        ))}
					</select>
				</div>
				<div className='form-group'>
					<label className='text-muted'>Quantity</label>
					<input onChange={handleChange('quantity')} type="number" className='form-control' value={ quantity } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Sold</label>
					<input onChange={handleChange('sold')} type="number" className='form-control' value={ sold } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Item No.</label>
					<input onChange={handleChange('item')} type="text" className='form-control' value={ item } />
				</div>
				<div className='form-group'>
					<label className='text-muted'>Measurement</label>
					<input onChange={handleChange('measurement')} type="text" className='form-control' value={ measurement } />
				</div>

				<button className='btn btn-outline-primary'>Update Product</button>
			</form>
		);
	}

	const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h4>{`${createdProduct}`} is created!</h4>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
    	);

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    }

    return (
    	<div>
			<Layout />
			<div className='row'>
				<div className='col-md-8 offset-md-2'>
					{showLoading()}
                    {showSuccess()}
                    {showError()}
					{newPostForm()}
					{redirectUser()}
				</div>
			</div>
		</div>
	);
}

export default UpdateProduct;