import React from 'react'
import ModalComp
    from 'Components/Modal/ModalComp'

export default function PortfolioCard(props) {
    return (
        <ModalComp cardImage={props.image} imgTitle={props.imgTitle}>
            <div className="port-item">
                <div className="port-layer d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="text-center text-white">
                    <i className='fa-solid fa-plus fa-4x'></i>
                    </div>
                </div>
                <img src={props.image} alt="" className='w-100' />
            </div>
        </ModalComp>
  )
}
