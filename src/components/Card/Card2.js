import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from '../ShowImage';
import './Card.css'; 

const Card2 = ({ product }) => {
	return (
		<div className='col-6'>
			<div className='card'>
				<div className='card-body'>
					<ShowImage item={product} url='product' />
					<div className='card-header block2-text2 font-weight-bold'>{product.name}</div>
					<div className='card-content block2-text3'>
						<p>{product.description.substring(0,40)}</p>
						<p>COLOUR: {product.colour}</p>
					</div>
					<Link to={`/product/${product._id}`}>
						<button class="link dim br3 ph3 pv2 mt2 dib white bg-gold block2-text3">View Product</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card2;