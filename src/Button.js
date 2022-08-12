function Button({filteredClothes}) {
    return(<div className="cont">
            <button className="change" onClick={() => filteredClothes("spring")}>Spring desing</button>
            <button className="change" onClick={() => filteredClothes("trevel")}>Travel desing</button>
            <button className="change" onClick={() => filteredClothes("modern")}>Modern desing</button>
            <button className="change" onClick={() => filteredClothes("wedding")}>Wedding desing</button>
            <button className="change" onClick={() => filteredClothes("french")}>French desing</button>
            <button className="change" onClick={() => filteredClothes("plain")}>Plain desing</button>
            <button className="change" onClick={() => filteredClothes("graphic")}>Graphic arts</button>
            <button className="change" onClick={() => filteredClothes("Super color")}>Super colors</button>
    </div>

    )
}

export default Button;