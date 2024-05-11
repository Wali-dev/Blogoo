'use server'
import Cards from './Cards';
import LatestBlog from './LatestBlog';
import Subscribe from './Subscribe';

const Homepage = () => {

    return (
        <div>
            <LatestBlog />
            <Cards />
            <Subscribe />
        </div>

    )
}

export default Homepage