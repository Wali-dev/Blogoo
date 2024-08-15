import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../functions/DateFormatChanger';

// Selecting the first three blog posts from the data
const blogs = fakedata.blog_posts.slice(0, 3);

const Cards = () => {
    return (
        <div className="flex justify-center my-4">
            {/* Responsive Grid Layout */}
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-x-3'>
                {/* Mapping through the selected blog posts */}
                {blogs.map(blog => (
                    <div
                        className="sm:w-80 m-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        key={blog.id}
                    >
                        <a href={"/"}>
                            {/* Blog Image */}
                            <figure className="mb-4">
                                <img
                                    className="w-full h-auto max-h-48 object-cover rounded-lg"
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" // Using .webp format for better performance
                                    alt={blog.title}
                                />
                            </figure>

                            {/* Blog Content */}
                            <div>
                                {/* Blog Title */}
                                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>

                                {/* Blog Excerpt */}
                                <p className='text-base text-gray-600 mb-4'>
                                    {blog.full_blog.substring(0, 80)}...
                                </p>

                                {/* Author and Date */}
                                <div>
                                    {/* Author Name */}
                                    <div className='text-orange-500 text-sm mb-1'>{blog.author_name}</div>

                                    {/* Date of Creation */}
                                    <div className='text-xs text-gray-500'>
                                        {DateFormatChanger(blog.created_at)}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
