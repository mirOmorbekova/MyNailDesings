function Manicure({myDesing}) {
    return(
        <div className="products">
            {myDesing.map((element => {
                const {id, name, searchTerm, image} = element;

                return(
                    <div className="product-card" key={id}>
                        <div className="product-info">
                        <h3>{name}{searchTerm}</h3>
                        </div>
                        <img className="manImg" src={image} width="400px" height="400px" alt="manicure"/>
                    </div>
                )
            }))}
    
        </div>
    )
}

export default Manicure;