import './modal.css'

export default function Modal({closeModal}) {
    return(
        <div className='modal-background'>
            <div className='Modal'>
                <button className='closeBtn' onClick={() => closeModal(false)}>X</button>

                    <h1>Maybelline product</h1>
                <div className='descriptipn'>
                    <p>Description</p>
                </div>
                <div className='footer'>
                    <button>Go to Product Page</button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}