import Card from "./card"
import SiteTask from "./SiteTask/SiteTask";
import Hero from "../SiteHero/Hero"
function SiteOverview() {
	return (
		<>
		  <Hero title={"Overview"}/>
			<div className="site-overview">
				<div className="site-card">
					<ul className="site-card__list">
						<Card className={"site-card__item"} text={"Unresolved"} num={"60"}/>
						<Card className={"site-card__item"} text={"Overdue"} num={"16"}/>
						<Card className={"site-card__item"} text={"Open"} num={"43"}/>
						<Card className={"site-card__item"} text={"On hold"} num={"64"}/>
					</ul>
        </div>

				<div className="site-hero">
					<div className="site-hero__text">
					<h3 className="site-hero__title">
					Today's trends
					</h3>
					<div className="site-hero__info">
					<time className="site-hero__time" dateTime="09:41">as of 25 May 2019, 09:41 PM</time>
					<div className="site-hero__days">
						<span className="today">
					  	<span className="activ"></span>	Today
						</span>
						<span className="today">
					  	<span className="activ"></span>	Yesterday
						</span>
					</div>
					</div>
					</div>

					<ul className="site-hero__list">
					<Card className={"site-hero__item"} text={"Resolved"} num={"449"}/>
					<Card className={"site-hero__item"} text={"Received"} num={"426"}/>
					<Card className={"site-hero__item"} text={"Average first response time"} num={"33m"}/>
					<Card className={"site-hero__item"} text={"Average response time"} num={"3h 8m"}/>
					<Card className={"site-hero__item"} text={"Resolution within SLA"} num={"94%"}/>
					</ul>
				</div>
        <SiteTask />
			</div>
		</>
	);
}
export default SiteOverview;
