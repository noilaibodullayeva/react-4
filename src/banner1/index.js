import "./style.css"
import Button from '@mui/material/Button';

const Banner1 = () => {
    return (
        <div className="banner1">
            <div className="words1">
                <p>
                    Grow your business.
                </p>
                <h2>
                    Give your business a boost with a beautifully crafted homepage.
                </h2>
                <Button className='btn2' href="https://business-starter-template.webflow.io/about" variant="contained">Learn more</Button>
            </div>
        </div>
    )
}

export default Banner1