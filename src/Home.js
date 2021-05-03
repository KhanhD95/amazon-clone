import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container"> 
             <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="" 
            />

             <div className="home_row"> 
                <Product id="12321345" title = 'Nike Zoom Kobe 5 Bruce Lee Edition Men Size 12' price={420.00} image={"https://images.stockx.com/images/Nike-Kobe-5-Protro-Bruce-Lee-Product.jpg?fit=clip&bg=FFFFFF&h=500&auto=compress&q=90&dpr=2&trim=color&updated_at=1609432625&fm=webp&ixlib=react-9.0.3&w=100"} rating={5}/>
                
                <Product id="49538094"
                        title="Brita Standard Metro Water Filter Pitcher, Small 5 Cup 1 Count, White"
                        price={19.56}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51fgRrYwfnL._AC_SS450_.jpg" 
                
                />
            </div>

            <div className="home_row"> 
                <Product id ="4903850"
                        title="Samsung Smart Watch"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"       
                />
                <Product id="23445930"
                        title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product id= "32549354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver(4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                
                />
            </div>

            <div className="home_row"> 
            < Product id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide DUAL WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            
            />
            </div>

            </div>
 
        </div>
    );
}

export default Home
