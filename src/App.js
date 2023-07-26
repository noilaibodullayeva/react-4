import "./app.css"

import ResponsiveAppBar from "./aheader/index"
import Banner1 from "./banner1/index"
import Banner2 from "./banner2/index"
import Banner3 from "./banner3/index"
import Banner4 from "./banner4/index"
import Banner5 from "./banner5/index"
const App = () => {

    return (
        <div>
           <ResponsiveAppBar/>
           <Banner1/>
           <Banner2/>
           <Banner3/>
           <Banner4/>
           <Banner5/>
        </div>
    )
}

export default App