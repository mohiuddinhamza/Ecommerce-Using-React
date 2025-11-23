
import React from 'react'
import { useNavigate } from 'react-router-dom';

const BreadScrumb = ({title})=> {
    const navigate= useNavigate();
  return (
    <div className='max-w-6xl mx-auto my-10'>
       <div className="text-xl text-gray-700 font-semibold">
  <span className="cursor-pointer" onClick={() => navigate('/')}>Home</span>
  <span className="mx-2">/</span>
  <span className="cursor-pointer" onClick={() => navigate('/products')}>Products</span>
  <span className="mx-2">/</span>
  {title}
</div>
    </div>
  )
}
export default BreadScrumb;