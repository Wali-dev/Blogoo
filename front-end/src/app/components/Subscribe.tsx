
import Image from "next/image"
//importing image


const Subscribe = () => {
  return (
    <div className='antialiased grid grid-cols-1 py-7 text-center sm:m-auto mx-3 justify-items-center items-center sm:w-[64.5rem] bg-black min-h-96 text-white'>
        
        <div><img src="/fruit.jpg" className="h-36 w-36"></img></div>
        <div className="text-3xl font-medium my-2">Get notification whenever I write. Subscribe to my blogs.</div>
        <div className="btn hover:bg-orange-500 hover:text-white hover:border-orange-500" >Subscribe</div>
    </div>
  )
}

export default Subscribe