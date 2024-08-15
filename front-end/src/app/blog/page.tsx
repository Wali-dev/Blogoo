// import NavBar from '../components/NavBar';
// import DateFormatChanger from '../functions/DateFormatChanger';
// import data from '@/app/Data/fakedata.json';

// const blogs = data.blog_posts;
// const singleBlog = data.blog_posts[3];
// console.log(singleBlog)

// const page = () => {
//     return (
//         <div className='h-full antialiased grid grid-cols-1 py-7 sm:m-auto mx-3 sm:w-[40rem]'>
//             <div>
//                 <h1 className='text-5xl font-bold mt-6'>{singleBlog.title}</h1>
//                 <div>
//                     <div className='text-orange-400 text-m mt-6'>{singleBlog.author_name}</div>
//                     <div className='text-m text-gray-400'>{DateFormatChanger(singleBlog.created_at)}</div>
//                 </div>
//                 <figure className=' mt-6'><img className='' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={singleBlog.title} /></figure>
//                 <p className='text-2xl mt-6'>{singleBlog.full_blog}</p>
//             </div>

//             <p className='text-xl mt-6 mb-6 font-bold'>Our recomendations</p>
//     <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
//                 {blogs.map(blog => (
//                     <div className="sm:w-80 " key={blog.id}>
//                         <a href={"/"}>
//                             <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt={blog.title}/></figure>
//                             <div className="">
//                                 <h2 className="card-title my-3">{blog.title}</h2>
//                                 <p className='text-gray-400 mb-4'>{blog.full_blog.substring(0, 80)}...</p>
//                                 <div>
//                                     <div className='text-orange-400 text-sm'>{blog.author_name}</div>
//                                     <div className='text-xs text-gray-400'>{DateFormatChanger(blog.created_at)}</div>
//                                 </div>
//                             </div>
//                         </a>
//                     </div>
//                 ))}
//             </div>
//             </div>

//     )
// }

// export default page


import NavBar from '../components/NavBar';
import DateFormatChanger from '../functions/DateFormatChanger';
import data from '@/app/Data/fakedata.json';
// import RecommendationsCard from '../components/RecommendationsCard'; // Import the RecommendationsCard component

const singleBlog = data.blog_posts[3];


const RecommendationsCard = ({ blog }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <a href="/">
                {/* Recommendation Image */}
                <figure className='mb-4'>
                    <img
                        className='w-full h-40 object-cover rounded-lg'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt={blog.title}
                    />
                </figure>

                {/* Recommendation Title */}
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{blog.title}</h2>

                {/* Recommendation Excerpt */}
                <p className='text-sm sm:text-base text-gray-400 mb-4'>{blog.full_blog.substring(0, 80)}...</p>

                {/* Author and Date */}
                <div>
                    <div className='text-orange-400 text-xs sm:text-sm'>{blog.author_name}</div>
                    <div className='text-xs text-gray-400'>{DateFormatChanger(blog.created_at)}</div>
                </div>
            </a>
        </div>
    );
}



const Page = () => {
    return (
        <div className='h-full antialiased grid grid-cols-1 py-7 sm:mx-auto mx-3 sm:w-[40rem] lg:w-[60rem]'>
            <div>
                {/* Blog Title */}
                <h1 className='text-4xl sm:text-5xl font-bold mt-6'>{singleBlog.title}</h1>

                {/* Author and Date */}
                <div className='mt-4'>
                    <div className='text-orange-400 text-sm sm:text-base'>{singleBlog.author_name}</div>
                    <div className='text-xs sm:text-sm text-gray-400'>{DateFormatChanger(singleBlog.created_at)}</div>
                </div>

                {/* Blog Image */}
                <figure className='mt-6'>
                    <img
                        className='w-full h-auto object-cover rounded-lg'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt={singleBlog.title}
                    />
                </figure>

                {/* Blog Content */}
                <p className='text-lg sm:text-xl mt-6'>{singleBlog.full_blog}</p>
            </div>

            {/* Recommendations Section */}
            <p className='text-xl sm:text-2xl mt-8 mb-6 font-bold'>Our Recommendations</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>
                {/* Mapping through blogs to render recommendation cards */}
                {data.blog_posts.map(blog => (
                    <RecommendationsCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default Page;
