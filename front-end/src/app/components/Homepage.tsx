"use client"
import fakedata from '@/app/Data/fakedata.json';
const blogs = fakedata.blog_posts;
const Homepage = () => {

    const dateFormatChanger = (date: string) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var now = new Date(date);
        return (months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear()); //Tuesday February 12 2013
    }



    return (
        <div className="h-auto md:h-[40rem] flex justify-center">
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-x-3'>
                {blogs.map(blog => (
                    <div className="sm:w-80 bg-base-100 m-3" key={blog.id}>
                        <a href='/'>
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="">
                                <h2 className="card-title my-3">{blog.title}</h2>
                                <p className='text-gray-400 mb-2'>{blog.full_blog.substring(0, 80)}...</p>
                                <div>
                                    <a href='/' className='text-orange-400 text-sm'>{blog.author_name}</a>
                                    <div className='text-xs text-gray-400'>{dateFormatChanger(blog.created_at)}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage