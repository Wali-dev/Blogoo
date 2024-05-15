import NavBar from '../components/NavBar';
import DateFormatChanger from '../functions/DateFormatChanger';
import data from '@/app/Data/fakedata.json';

const blogs = data.blog_posts;
const singleBlog = data.blog_posts[3];
console.log(singleBlog)

const page = () => {
    return (
        <div className='h-full antialiased grid grid-cols-1 py-7 sm:m-auto mx-3 sm:w-[40rem]'>
            <div>
                <h1 className='text-5xl font-bold mt-6'>{singleBlog.title}</h1>
                <div>
                    <div className='text-orange-400 text-m mt-6'>{singleBlog.author_name}</div>
                    <div className='text-m text-gray-400'>{DateFormatChanger(singleBlog.created_at)}</div>
                </div>
                <figure className=' mt-6'><img className='' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={singleBlog.title} /></figure>
                <p className='text-2xl mt-6'>{singleBlog.full_blog}</p>
            </div>

            <p className='text-xl mt-6 mb-6 font-bold'>Our recomendations</p>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
                {blogs.map(blog => (
                    <div className="sm:w-80 " key={blog.id}>
                        <a href={"/"}>
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={blog.title}/></figure>
                            <div className="">
                                <h2 className="card-title my-3">{blog.title}</h2>
                                <p className='text-gray-400 mb-4'>{blog.full_blog.substring(0, 80)}...</p>
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

export default page