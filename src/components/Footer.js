import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"
import RepeatIcon from '../svg/RepeatIcon.js'
import ShieldIcon from '../svg/ShieldIcon'
import MapIcon from '../svg/MapIcon'
import FacebookIcon from '../svg/FacebookIcon'
import YoutubeIcon from '../svg/Youtubeicon'
import InstagramIcon from '../svg/InstagramIcon'
import TwitterIcon from '../svg/TwitterIcon'


const Footer = ({footer}) => {
    return (
       <>
        <div className="PreFooter">
            <div>
                <RepeatIcon/>
                 <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
               </div>
            <div><ShieldIcon/> <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
            <div><MapIcon/> <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p></div>
        </div>

        <div className="PreFooter2">
             <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

             <div>
                 <div>
                     <input type="email" name="email" placeholder="Enter Email Address" />
                     <button>›</button>
                 </div>
                 <span>Thanks. You're on our email list for special offers.</span>
             </div>

             <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
             </div>

             <div>
                <FacebookIcon/><YoutubeIcon/><InstagramIcon/><TwitterIcon/> 
             </div>
        </div>

        <div className="footer">
                  <div> 
                     <p> SUPPORT</p>
                      {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>


                  
        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
        </div>

       </>
    )
}

export default Footer
