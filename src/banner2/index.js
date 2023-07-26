import "./style.css"
import Button from '@mui/material/Button';
import Img3 from "./img.svg"

const Banner2 = () => {
    return (
        <div className="full-banner2">
            <div className="full-1">
                <div className="words3">
                    <p>WHAT WE BELIEVE IN</p>
                    <h1>Grow your business, establish your brand, and put your customers first.</h1>
                </div>
            </div>
            <div className="full-2">
                <div className="full-chil">
                    <p>ABOUT</p>
                    <h1>Who we are</h1>
                    <h2>There are no members of the country, for whom the story is. Now the porttitor venenatis feugiat. Even if it was a pass, it was not a layer of time. It was a weekend. The vestibule and the throat are eros. Tomorrow the pregnant woman will be born as a result.</h2>
                    <Button className="btn4" variant="contained">Learn more</Button>
                </div>
                <div className="full-chil2">
                    <img src={Img3} alt="img3" className="img3" />
                </div>
            </div>
        </div>
    )
}
export default Banner2