
import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../functions/DateFormatChanger';

const blogs = fakedata.blog_posts;

// Getting the last blog post from the array
const len = blogs.length;
const latest = blogs[len - 1];

const LatestBlog = () => {
    return (
        <div className='my-8 bg-dot-black/[0.5] py-6'>
            <div className='grid sm:grid-cols-2 mx-4 sm:mx-auto justify-items-center items-center gap-6 sm:w-[60rem] lg:w-[72rem]'>
                {/* Left Section: Latest Blog Image and Title */}
                <div className='w-full flex flex-col items-center'>
                    <h2 className='text-3xl sm:text-4xl font-semibold italic line-through decoration-orange-400 p-2 mb-4'>
                        Our Latest Addition
                    </h2>
                    <img
                        className='w-full h-auto object-cover rounded-lg shadow-lg'
                        alt={latest.title}
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' // Changed image format to .webp
                    />
                </div>

                {/* Right Section: Blog Details */}
                <div className="w-full sm:max-w-md lg:max-w-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{latest.title}</h2>
                    <p className='text-sm sm:text-base text-gray-400 mb-6'>
                        {latest.full_blog.substring(0, 80)}...
                    </p>
                    <div>
                        {/* Author and Date */}
                        <div className='text-orange-400 text-sm sm:text-base mb-1'>{latest.author_name}</div>
                        <div className='text-xs sm:text-sm text-gray-400'>{DateFormatChanger(latest.created_at)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestBlog;
