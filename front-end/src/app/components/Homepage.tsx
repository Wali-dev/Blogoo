'use server'
import Cards from './Cards';
import Footer from './Footer';
import LatestBlog from './LatestBlog';
import ListItems from './ListItems';
import NavBar from './NavBar';
import Subscribe from './Subscribe';

const Homepage = () => {

    return (
        <div>
            <NavBar />
            <LatestBlog />
            <Cards />
            <Subscribe />
            <ListItems />
            <Footer />
        </div>

    )
}

export default Homepage