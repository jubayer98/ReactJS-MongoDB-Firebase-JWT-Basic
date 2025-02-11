import Banner from "./Banner";
import LatestBooks from "./LatestBooks";
import Newsletter from "./Newsletter";
import Reviews from "./Reviews";
import Stats from "./Stats";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <Stats></Stats>
            <Newsletter></Newsletter>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;