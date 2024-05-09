import fakedata from '@/app/Data/fakedata.json';
const blogs = fakedata.blog_posts;
const Homepage = () => {
    return (
        <div className="h-auto md:h-[40rem] ">
            <div className='grid sm:grid-cols-3 gap-x-0'>
                {blogs.map(blog => (
                    <div className="w-96 bg-base-100" key={blog.id}>
                        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="">
                            <h2 className="card-title">{blog.title}</h2>
                            <p>{blog.full_blog.substring(0, 100)}...</p>
                            <div>
                                <div>{blog.author_name}</div>
                                <div>{blog.created_at.substring(0, 10)}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage