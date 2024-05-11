import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../utils/DateFormatChanger';
const blogs = fakedata.blog_posts;

const Cards = () => {

  return (
    <div className="flex justify-center">
        
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-x-3'>
                {blogs.map(blog => (
                    <div className="sm:w-80  m-3" key={blog.id}>
                        <a href={"/"}>
                            <figure><Image width={400} height={200} src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={blog.title}/></figure>
                            <div className="">
                                <h2 className="card-title my-3">{blog.title}</h2>
                                <p className='text-gray-400 mb-2'>{blog.full_blog.substring(0, 80)}...</p>
                                <div>
                                    <div className='text-orange-400 text-sm'>{blog.author_name}</div>
                                    <div className='text-xs text-gray-400'>{DateFormatChanger(blog.created_at)}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            </div>
  )
}

export default Cards