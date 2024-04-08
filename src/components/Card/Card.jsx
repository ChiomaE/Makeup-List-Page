import './card.css'
import axios from 'axios'
import exImg from './imageexample.jpg'
import { useEffect, useState } from 'react'

export default function Card() {
    const[product, setProduct] = useState([])
    
    useEffect(() => {
        async function fetchData () {

            try {
                const res = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
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

    return (

        <div className='page-div'>
            {product.map(item => (
                <div className='Card' key={item.id}>
                    <img className='card-img' src={item.image_link} />
                    <h4 className='productName'>{item.name}</h4>
                    <div className='next-to'>
                        <h4 className='rating'>
                            {/* set rating to print "not rated" if null */}
                            {item.rating === null ? "Not Rated" : `${item.rating} / 5`} 
                            </h4>
                        <h4>{item.price}</h4>
                    </div>
                    <button className='viewBtn'>Product Details</button>
                </div>
            ))}
        </div>

        
       /*  {/* <div className='Card'>
            <img className='card-img' src={exImg} />
            <h4 className='productName'>Maybelline Face Studio Master Hi-Light Light Booster Bronzer
            </h4>
            <div className='next-to'>
                <h4 className='rating'>5.5 Stars</h4>
                <h4>$15.99</h4>
            </div>
            <button className='viewBtn'>View More</button>
        </div> } */
    )
}