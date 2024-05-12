'use server'
import Cards from './Cards';
import LatestBlog from './LatestBlog';
import ListItems from './ListItems';
import Subscribe from './Subscribe';

const Homepage = () => {

    return (
        <div>
            <LatestBlog />
            <Cards />
            <Subscribe />
            <ListItems />
        </div>

    )
}

export default Homepage