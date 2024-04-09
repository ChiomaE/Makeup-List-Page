import ColorShape from '../ColorShape/ColorShape'
import './modal.css'
import { Link } from 'react-router-dom'

export default function Modal({product, closeModal}) {
    return(
        <div className='modal-background'>
            <div className='Modal'>
                <button className='closeBtn' onClick={() => closeModal(false)}>X</button>
                <img className='modal-img' src={product.image_link} />
                <div className='item-info'>
                    <h2>{product.name}</h2>
                    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
                        <h2> {product.rating === null ? "Not Rated" : `${product.rating} / 5`}</h2>
                        <h2>{`$${product.price}`}</h2>
                        
                        
                    </div>
                    <div className='colors'>
                        {/* Component for color styles if they exist */}
                        {product.product_colors && product.product_colors.map(color => (
                            <ColorShape key={color.hex_value} name={color.colour_name} color={color.hex_value} />
                        ))}
                        
                    </div>

                    <p><strong>Description: </strong>{product.description}</p>
                    
                    <a href={product.product_link}>
                        <button className='productBtn'>Go to Product Page</button>
                        {/* Some of the product pages are no longer available & lead to 404 */}
                    </a>
                    
                </div>
                    
            </div>
        </div>
    )
}