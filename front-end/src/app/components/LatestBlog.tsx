import fakedata from '@/app/Data/fakedata.json';
import Image from 'next/image';
import DateFormatChanger from '../utils/DateFormatChanger';
const blogs = fakedata.blog_posts;


//getting the last blog
const len = blogs.length

const latest = blogs[len - 1]

const LatestBlog = () => {
    return (
        
        <div className="grid sm:grid-cols-2 sm:m-auto gap-4 sm:w-[64.375rem] ">

            <div>
                <img className='w-auto'
                    alt=""
                    src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                />
            </div>
            <div className="">
                <h2 className="card-title my-3 text-3xl">{latest.title}</h2>
                <p className='text-gray-400 mb-2 sm:max-w-52'>{latest.full_blog.substring(0, 80)}...</p>
                <div>
                    <div className='text-orange-400 text-sm'>{latest.author_name}</div>
                    <div className='text-xs text-gray-400'>{DateFormatChanger(latest.created_at)}</div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog