import './card.css'
import axios from 'axios'
import exImg from './imageexample.jpg'
import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'

export default function Card() {
    const[product, setProduct] = useState([])
    //modal state params
    const[selectedProduct, setSelectedProduct] = useState(null)

       
    useEffect(() => {
        async function fetchData () {

            try {
                const res = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
                /* console.log(res.data); */
                setProduct(res.data);
            } catch (error) {
                console.error("error fetching data:", error)
            }
        } 

        fetchData();
    }, [])

    useEffect(() => {
        if(product && product.length > 0){
            product.forEach(item => console.log(item))
        }
    }, [product])

    const handleOpenModal = (product) => {
        setSelectedProduct(product)
    }

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (

        <div className='page-div'>
            {product.map(item => (
                <div className='Card' key={item.id}>
                    <img className='card-img' src={item.image_link} />
                    <h4 className='productName'>{item.name}</h4>
                    <div className='next-to'>
                    <h5 className='rating'>{`$${item.price}`}</h5>
                        <h5 >
                            {/* set rating to print "not rated" if null */}
                            {item.rating === null ? "Not Rated" : `Rating: ${item.rating} / 5`} 
                            </h5>
                        
                    </div>
                    <button className='viewBtn' onClick={() => handleOpenModal(item)}>PRODUCT DETAILS</button>
                    {selectedProduct && selectedProduct.id === item.id && (
                    <Modal product={selectedProduct} closeModal={handleCloseModal}/>
                    )}
                </div>
            ))}
        </div>

    )
}