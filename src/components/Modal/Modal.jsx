import ColorShape from '../ColorShape/ColorShape'
import './modal.css'

export default function Modal({product, closeModal}) {
    return(
        <div className='modal-background'>
            <div className='Modal'>
                <button className='closeBtn' onClick={() => closeModal(false)}>X</button>
                <img className='modal-img' src={product.image_link} />
                <div className='item-info'>
                    <h2>{product.name}</h2>
                    <div style={{display: 'flex', justifyContent:'space-evenly'}}>
                        <h4>{product.price}</h4>
                        <h4> {product.rating === null ? "Not Rated" : `${product.rating} / 5`}</h4>
                        
                    </div>
                    <div className='colors'>
                        {/* Component for color styles if they exist */}
                        {product.product_colors && product.product_colors.map(color => (
                            <ColorShape key={color.hex_value} name={color.colour_name} color={color.hex_value} />
                        ))}
                        
                    </div>
                    <p className='description'><strong>Description: </strong>
                        {product.description}</p>
                    <button>Go to Product Page</button>
                </div>
                    
            </div>
        </div>
    )
}