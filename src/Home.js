import { useState } from "react";
import { data } from "./data";
import Manicure from "./Manicure";
import Button from "./Button";


function Home() {

    const [manicures, setManicures] = useState(data);
    
    const chosenClothes = (searchTerm) => {
        const newManicures = data.filter(element => element.searchTerm === searchTerm);
        setManicures(newManicures)
    }

    return (<div> 
        <div className="cont">
            <h2>Top Manicures desing</h2>
        </div>
        <div>
            <Button filteredClothes={chosenClothes}/>
            <Manicure myDesing={manicures}/>
        </div>
    </div>

    )
}

export default Home;