
const Subscribe = () => {
  return (
    <div className='antialiased grid grid-cols-1 py-7 text-center sm:m-auto mx-3 justify-items-center items-center sm:w-[64.5rem] bg-black min-h-96 text-white'>
      {/* Subscription Icon */}
      <div className="mb-4">
        <img
          src="/fruit.jpg"
          className="h-24 w-24 sm:h-36 sm:w-36 object-cover rounded-full"
          alt="Subscription Icon"
        />
      </div>

      {/* Subscription Message */}
      <div className="text-xl sm:text-3xl font-medium my-2 px-4 sm:px-0">
        Get notifications whenever I write. Subscribe to my blogs.
      </div>

      {/* Subscribe Button */}
      <div className="mt-4">
        <button className="btn bg-orange-400 text-white hover:bg-orange-500 hover:border-orange-500 border border-transparent rounded-md px-4 py-2">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe;

