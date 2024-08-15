import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../functions/DateFormatChanger';

const blogs = fakedata.blog_posts.slice(0, 3);

const ListItems = () => {
    return (
        <div className='antialiased grid grid-cols-1 py-7 sm:m-auto mx-3 sm:w-[64.5rem]'>
            {/* Section Title */}
            <div className='text-lg text-slate-400 mb-4'>
                Latest
            </div>

            {/* List of Blogs */}
            {blogs.map(blog => (
                <div
                    className="bg-white p-4 rounded-lg shadow-md mb-6 sm:mb-8"
                    key={blog.id}
                >
                    <a href={"/"} className='flex items-start gap-4'>
                        {/* Blog Content */}
                        <div className='flex-1'>
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className='text-base text-gray-600 mb-4'>
                                {blog.full_blog.substring(0, 80)}...
                            </p>
                            <div>
                                <div className='text-orange-500 text-sm'>{blog.author_name}</div>
                                <div className='text-xs text-gray-500'>
                                    {DateFormatChanger(blog.created_at)}
                                </div>
                            </div>
                        </div>

                        {/* Blog Image */}
                        <figure className='flex-shrink-1'>
                            <img
                                className='w-32 h-32 object-cover' // Removed rounded corners
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt={blog.title}
                            />
                        </figure>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ListItems;
