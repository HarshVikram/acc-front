import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../ShowImage';
import './Card.css'; 

const Card3 = ({ product }) => {
	return (
			<div className='card'>
				<div className='card-body row'>
					<div className='col-4'>
						<ShowImage item={product} url='product' />	
					</div>					
					<div className='col-8 text-left'>
						<div className='card-header-12 font-weight-bold'>{product.name}</div>
						<div className='card-content-12'>
							<p>{product.description.substring(0,40)}</p>
							<p><span className='font-weight-bold'>ITEM ID: </span> {product.item}</p>
							<p><span className='font-weight-bold'>CATEGORY: </span> {product.category.name}</p>
							<p><span className='font-weight-bold'>COLOUR:</span> {product.colour}</p>
							<p><span className='font-weight-bold'>MEASUREMENT:</span> {product.measurement}</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Card3;