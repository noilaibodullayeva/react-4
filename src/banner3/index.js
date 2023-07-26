import "./style.css"
import Button from '@mui/material/Button';
import Img5 from "./nn.svg"

const Banner3 = () => {
    return (
        <div className="full-banner3">
            <div className="banner3-1">
                <p>TEAM</p>
                <h1>What we do</h1>
                <h3>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</h3>
                <Button className="btn5" variant="contained">Learn more</Button>
            </div>
            <div className="banner3-2">
                <img src={Img5} alt="img5" className="img5" />
            </div>
        </div>
    )
}
export default Banner3