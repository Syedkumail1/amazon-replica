import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            /> 
            {/* Product id, title, price, rating, image  */}
            <div className="home__row">
                <Product
                    id = "12321341"
                    title= "The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price= {11.96}
                    rating= {5}
                    image = "https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/bbva-open4u-statup.jpg?itok=JjHnvHP-"
                />
                 <Product
                    id = "86755462"
                    title= "Kenwood Mixer very awesome used to bake the cakes verrrrry cool!!! for the beating purposes"
                    price= {239}
                    rating= {4}
                    image = "https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kitchen%20Machines/Chef%20and%20major/KVL4/KVC4100S_1_STAND%20ALONE-ANGLE_800x600.jpg"
                />      
            </div>
            <div className="home__row">
                <Product
                    id = "12343211"
                    title= "Apple Watch Series 5 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
                    price= {300}
                    rating= {2}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX342_.jpg"
                />
                <Product
                    id = "90889023"
                    title= "Best Pistol for the law enforcement agencies easy use and very effcient"
                    price= {420}
                    rating= {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71G6ylN5DqL._AC_SL1400_.jpg"
                />    
                <Product
                    id = "56435677"
                    title= "Best hand made ball for the test matches very durable made by the skilled pakistani craftsmen in sialkot"
                    price= {32.99}
                    rating= {1}
                    image = "https://sc01.alicdn.com/kf/UTB8ExStrgQydeJk43PUq6AyQpXaZ.jpg_350x350.jpg"
                />        
            </div>
            <div className="home__row">
            <Product
                    id = "66667890"
                    title= "Air Pods for the better experience of music exclusively avaiilable at amazon at the very low price"
                    price= {56}
                    rating= {3}
                    image = "https://images.macrumors.com/article-new/2018/02/airpods2-800x688.jpg"
                />
            </div>
            {/* Product id, title, price, rating, image  */}

        </div>
    )
}

export default Home
