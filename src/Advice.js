import  hand from './uhod.jpg'
 
function Advice() {
    return(
        <div className='box'>
            <div className="container">
                <img className='imgArm' src={hand} width="400px" alt='arm'/>
            </div>

        <div>
            <div className="container"> 
                <h1>Hand care at different ages</h1>
            </div>

            <div className="container">
                <h2>How to take care of your hands at 20+</h2>
            </div>

            <div className="container">
                <p>Hand care at home at this age is simple. The main remedy is a hand cream with glycerin, oils, fatty acids. For washing, products with a neutral 
                pH are suitable, and when doing household chores, do not forget about gloves.</p>
            </div>

            <div className="container">
                <h2>How to take care of your hands at 30+</h2>
            </div>

            <div className="container">
                <p>Hand skin care at 30+ requires more dedication. The skin begins to lose its tone and elasticity, reacts more sharply to aggressive influences, 
                and requires a little more time to recover than before.</p>
            </div>

            
            <div className="container important">
                <h2>Important!</h2>
            </div>

            <div className='container important'>
                <p>Your choice is creams with antioxidants, as well as components that stimulate cell renewal and improve microcirculation.
                Once or twice a week, use mild scrubs or creams with AHA acids. Combine their application with a massage of the hands.
                </p>
            </div>
            

            <div className="container">
                <h2>How to take care of your hands at 50+</h2>
            </div>

            <div className="container">
                <p>With the onset of menopause, the skin on the hands becomes thinner, and its protective functions noticeably weaken. Hand skin care at 
                home at this age should be regular and enhanced, using special cosmetics. Use anti-aging creams with an increased concentration of nutritious and 
                moisture-retaining components, vegetable oils. And in the summer — with a UV protection factor.
                For more effective hand skin care, you can seek help from a cosmetologist. Today, for anti-aging hand care, they use:</p>
            </div>

            <div className='container'>
                <ol>
                    <li><span>peels with acids:</span> they have a whitening effect and allow you to get rid of fine wrinkles;</li>
                    <li><span>paraffin therapy:</span> melted paraffin softens the skin of the hands;</li>
                    <li><span>mesotherapy:</span> injections of mesococtails with vitamins, peptides, amino acids, hyaluronic acid smooth and refresh the skin of the hands;</li>
                    <li><span>biorevitalization:</span> hyaluronic acid injected into the skin gives a long-lasting moisturizing effect, increases turgor and tone, smoothes wrinkles.</li>
                </ol>
            </div>
            </div>
        </div>
    )
}

export default Advice;