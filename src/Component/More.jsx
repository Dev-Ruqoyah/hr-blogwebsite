import React from 'react';
import {Link} from 'react-router-dom';
const LoadingMore = () => {
    return ( 
        <>
            <div className="container mx-auto flex justify-center my-5">
                <button className='bg-black text-white px-5 py-3 rounded-lg'>
                    <Link to="/More" >Loading More</Link>
                </button>
            </div>
        </>
     );
}
 
export default LoadingMore;