import Item from "./Item/Item";
import one from "../../Assets/images/one.png";
import two from "../../Assets/images/two.png";
import three from "../../Assets/images/three.png";
import four from "../../Assets/images/four.png";
import five from "../../Assets/images/five.png";
import six from "../../Assets/images/six.png";
import seven from "../../Assets/images/seven.png";
import eight from "../../Assets/images/eight.png";
import Hero from "../../Components/SiteHero/Hero";

import "../../Assets/css/main.css"

import bottom from "../../Assets/images/bottom.png"
const Tickets = () =>{
return(
  <>
  <Hero title={"Tickets"}/>
    <div className="site-tickets">
      <div className="site-tickets__top">
        <h3 className="site-tickets__title">
          All tickets
        </h3>
        <div className="site-tickets__div">
          <span className="site-tickets__div-sort">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z" fill="#C5C7CD"/>
            </svg>
            Sort
          </span>
          <span className="site-tickets__div-sort">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z" fill="#C5C7CD"/>
          </svg>
            Filter
          </span>
        </div>
      </div>


      <div className="site-tickets__info">
        <div className="site-tickets__info-text">
          <p>Ticket details</p>
          <p>Customer name</p>
          <p>Date</p>
          <p>Priority</p>
        </div>

        <ul className="site-tickets__list">
          <Item src={one} usertitle={"Contact Email not Linked"} userday={"Updated 1 day ago"} customername={"Tom Cruise"} customerday={"on 24.05.2019"} userdate={"May 26, 2019"} dateday={"6:30 PM"} btn={"high"} btntext={"High"}/>
          <Item src={two} usertitle={"Adding Images to Featured Posts"} userday={"Updated 1 day ago"} customername={"Matt Damon"} customerday={"on 24.05.2019"} userdate={"May 26, 2019"} dateday={"8:00 AM"} btn={"low"} btntext={"low"}/>
          <Item src={three} usertitle={"When will I be charged this month?"} userday={"Updated 1 day ago"} customername={"Robert Downey"} customerday={"on 24.05.2019"} userdate={"May 26, 2019"} dateday={"7:30 PM"} btn={"high"} btntext={"High"}/>
          <Item src={four} usertitle={"Payment not going through"} userday={"Updated 2 days ago"} customername={"Christian Bale"} customerday={"on 24.05.2019"} userdate={"on 24.05.2019"} dateday={"5:00 PM"} btn={"normal"} btntext={"Normal"}/>
          <Item src={five} usertitle={"Unable to add replies"} userday={"Updated 2 days ago"} customername={"Henry Cavil"} customerday={"on 24.05.2019"} userdate={"May 25, 2019"} dateday={"4:00 PM"} btn={"high"} btntext={"High"}/>
          <Item src={six} usertitle={"Downtime since last week"} userday={"Updated 3 days ago"} customername={"Chris Evans"} customerday={"on 23.05.2019"} userdate={"May 25, 2019"} dateday={"2:00 PM"} btn={"normal"} btntext={"Normal"}/>
          <Item src={seven} usertitle={"Referral Bonus"} userday={"Updated 4 day ago"} customername={"Sam Smith"} customerday={"on 22.05.2019"} userdate={"May 25, 2019"} dateday={"11:30 AM"} btn={"low"} btntext={"low"}/>
          <Item src={eight} usertitle={"How do I change my password?"} userday={"Updated 6 days ago"} customername={"Steve Rogers"} customerday={"on 21.05.2019"} userdate={"May 24, 2019"} dateday={"1:00 PM"} btn={"normal"} btntext={"Normal"}/>
        </ul>

        <div className="site-tickets__bottom">
          <p className="site-tickets__bottom-text">Rows per page: <span> 8 </span> <img src={bottom} alt="bottom" /></p>
          <p className="site-tickets__bottom-text">1-8 of 1240</p>
          <p className="site-tickets__bottom-text">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L14.9293 12.0707C14.9683 12.0317 14.9683 11.9683 14.9293 11.9293L9 6" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          </p>
        </div>
      </div>
    </div>
  </>
)
}
export default Tickets