import Lottie from 'lottie-react'
import fofError from '../assets/fofError.json'
export default function FOFError() {
  return (
    <div className='flex justify-center items-center min-h-[80vh] '>
        
            <Lottie
        animationData={fofError} className='w-[500px]'
        />
        
    </div>
  )
}
