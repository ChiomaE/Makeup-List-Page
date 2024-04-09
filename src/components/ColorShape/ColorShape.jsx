import './colorshape.css'
//needs name & color params
export default function ColorShape ({name, color}){


    return (
        <>
            <div className='colorShape' style={{backgroundColor: color}}></div>
            <h5>{name}</h5>
        </>
        
    )
}