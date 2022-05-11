import Nav from "./Nav/nav"
import {overview,
  tickets,
  ideas,
  contact,
  agent,
  article,
  setting,
  subscription} from "./Nav/Icon/icon"
function SiteBar(){

  return(
    <div className='site-bar'>
				<a href='#link' className='logo-link'>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle cx='16' cy='16' r='16' fill='#3751FF' />
						<path
							d='M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z'
							fill='url(#paint0_linear_584_285)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_584_285'
								x1='11'
								y1='9'
								x2='23'
								y2='23'
								gradientUnits='userSpaceOnUse'>
								<stop stopColor='white' stopOpacity='0.7' />
								<stop offset='1' stopColor='white' />
							</linearGradient>
						</defs>
					</svg>
					<p className='logo-text'>
					Dashboard Kit
					</p>
				</a>

				<ol className='site-nav__list'>
					<Nav className="navItem" to={"/"} Icon={overview} text={"Overview"}/>
					<Nav className="navItem" to={"/tickets"} Icon={tickets} text={"Tickets"}/>
					<Nav className="navItem" to={"/ideas"} Icon={ideas} text={"Ideas"}/>
					<Nav className="navItem" to={"/contacts"} Icon={contact} text={"Contacts"}/>
					<Nav className="navItem" to={"/agents"} Icon={agent} text={"Agents"}/>
					<Nav className="navItem" to={'/articles'} Icon={article} text={"Articles"}/>
					<Nav className="navItem" to={"/settings"} Icon={setting} text={"Settings"}/>
					<Nav className="navItem" to={"/subscription"} Icon={subscription} text={"Subscription"}/>
				</ol>
			</div>
  )
}

export default SiteBar