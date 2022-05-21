import "./Home.css";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { iplData, marvelData, spaceData } from "../../dataBase/Data";

const HomePage = () => {

    const { setData } = useData();
    const scrollDown = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }

    return (
        <div className="ptb-64">
            <section className="main-section grid align-itm-center ptb-64">
                <img className="home-img plr-32" src="/Assest/home-image.svg" alt="homescreen img" />
                <section className="text-align plr-64">
                    <p className="f-size-24 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque, soluta unde qui eos nisi quam consequatur labore iste quos!</p>
                    <button className="btn play-btn f-size-20 p-16" onClick={scrollDown}>Explore Now</button>
                </section>
            </section>
            <div className="text-align">
                <h2>Here you can play many types of Quiz Game and check your knowledge about that topics !</h2>
            </div>
            <section className="flex flex-wrap jstfy-ctnt-spc-evnly pt-64 gap-4">
                <section className="img-section img1 grid jstfy-item-center">
                    <img className="quiz-img" src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1600047009.jpg" alt="ipl img" />
                    <h3>IPL Quiz Game</h3>
                    <p className="text-align f-size-16">Check your knowledge of Indian Premiere League</p>
                    <Link to="/rule" className="w-100">
                        <button onClick={() => setData(iplData)} className="play-btn w-100 p-8">Play Now</button>
                    </Link>
                </section>
                <section className="img-section grid jstfy-item-center">
                    <img className="quiz-img" src="https://www.dailypioneer.com/uploads/2019/story/images/big/barry-jenkins-pushes--avengers--endgame--for-2020-award-season-2019-04-29.jpg" alt="marvel img"/>
                    <h3>Marvel Quiz game</h3>
                    <p>Check your knowledge of Marvel Universe</p>
                    <Link to="/rule" className="w-100">
                        <button onClick={() => setData(marvelData)} className="play-btn w-100 p-8">Play Now</button>
                    </Link>
                </section>
                <section className="img-section grid jstfy-item-center">
                    <img className="quiz-img" src="https://icebreakerideas.com/wp-content/uploads/2020/09/Space-Trivia-e1608509102528.jpg" alt="space img" />
                    <h3>Space Quiz game</h3>
                    <p>Check your knowledge of Our Space</p>
                    <Link to="/rule" className="w-100">
                        <button onClick={() => setData(spaceData)} className="play-btn w-100 p-8">Play Now</button>
                    </Link>
                </section>
            </section>
        </div>
    )
}

export { HomePage }
