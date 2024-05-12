import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../functions/DateFormatChanger';
const blogs = fakedata.blog_posts;


//getting the last blog
const len = blogs.length
const latest = blogs[len - 1]

const LatestBlog = () => {
    return (
        <div className='my-4 bg-dot-black/[0.5]'>
            <div className='grid sm:grid-cols-2 sm:m-auto mx-3 justify-items-center items-center gap-4 sm:w-[64.5rem]'>
                <div className=''>
                    <h2 className='text-4xl font-semibold italic line-through decoration-orange-400 p-2 mb-2'>Our latest addition</h2>
                    <img className=''
                        alt=""
                        src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                    />
                </div>
                <div className="">
                    <h2 className="card-title my-3 text-3xl">{latest.title}</h2>
                    <p className='text-gray-400 mb-2 sm:max-w-[32.2rem] '>{latest.full_blog.substring(0, 80)}...</p>
                    <div>
                        <div className='text-orange-400 text-sm'>{latest.author_name}</div>
                        <div className='text-xs text-gray-400'>{DateFormatChanger(latest.created_at)}</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LatestBlog