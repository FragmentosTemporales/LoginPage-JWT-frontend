import Cards from "../components/cards";
import Jumbotron from "../components/jumbotron";
import News from "../components/news";

const Home = () => {

    return (
        <div
            style={{ borderRadius: '5px', minHeight: '100vh' }}
        >
            <Jumbotron/>
            <Cards/>
            <News/>
        </div>
    )
}
export default Home;