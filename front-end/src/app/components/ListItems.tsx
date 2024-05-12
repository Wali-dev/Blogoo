import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../functions/DateFormatChanger';
const blogs = fakedata.blog_posts.slice(0, 3);

const ListItems = () => {
    return (
        <div className='antialiased grid grid-cols-1 py-7 sm:m-auto mx-3 sm:w-[64.5rem]'>
            <div className='text-lg text-slate-400'>Latest</div>
            {blogs.map(blog => (
                <div className="sm:w-[60rem]" key={blog.id}>
                    <a href={"/"} className='grid sm:grid-cols-2 grid-cols-2 my-2 mb-6'>
                        <div className="">
                            <h2 className="card-title mt-1">{blog.title}</h2>
                            <p className='text-gray-400 mb-6'>{blog.full_blog.substring(0, 80)}...</p>
                            <div>
                                <div className='text-orange-400 text-sm'>{blog.author_name}</div>
                                <div className='text-xs text-gray-400'>{DateFormatChanger(blog.created_at)}</div>
                            </div>
                        </div>
                        <figure className='ml-7'><img className='h-36 w-40' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={blog.title} /></figure>

                    </a>
                    
                </div>
            ))}
        </div>
    )
}

export default ListItems