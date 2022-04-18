import React from 'react'
import "./Home.css";
import "./Product";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

                <div className="home__row">
                    <Product 
                    id="3254354345"
                    title="Combiflam Plus"
                    price={49.99}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600570651/cropped/zwbqj8ekwvxwej1z0dbq.png"
                    // rating={3}
                    />
                    <Product 
                    id="49538094"
                    title="Saridon Headache Relief Tablet"
                    price={22.00}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625733881/s0dcfx0trz6lf9zczab4.jpg"
                    // rating={5}
                    />
                    <Product 
                    id="4903850"
                    title="Crocin Pain Relief Tablet"
                    price={54.99}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1618596427/onav4rssxbdwvk1pedey.jpg"
                    // rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    id="23445930"
                    title="Himalaya Gasex Tablet"
                    price={119.00}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600082949/cropped/khlk0or7gybqxtycxlyc.jpg"
                    // rating={4}
                    />
                    <Product 
                    id="12321341"
                    title="Nasivion Nasal Spray"
                    price={75.80}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600110426/cropped/tw0ldub9wtmharc136eb.png"
                    // rating={5}
                    />
                    <Product 
                    id="90829332"
                    title="Dabur Honitus"
                    price={95.00}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1633003268/wrxma0ev0xknqb0xjo6n.jpg"
                    // rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                    title="Revital H Capsule"
                    price={476.00}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625118755/lnokjri7seuxwnv2qbwy.jpg"
                    // rating={3}
                    />
                    <Product 
                    title="Inlife Vitamin B12"
                    price={479.99}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600177903/cropped/mzik3zmrcgmafcg0gdyr.png"
                    // rating={3}
                    />
                    <Product 
                    title="Ciphands Anitseptic Hand Sanitizer"
                    price={49.99}
                    image="https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601195754/cropped/ovdlbua17eqxvdn0gmgj.png"
                    // rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;