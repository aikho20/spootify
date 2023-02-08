import React from 'react'
import { ClipLoader } from 'react-spinners'
import './_loader.scss'
function Loader() {
    return (
        <div className='loader-container'>
            <ClipLoader color='violet' loading={true} size={150} />
        </div>
    )
}

export default Loader
