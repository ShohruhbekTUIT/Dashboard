function Card(props) {
	return (
		<li className={props.className}>
			<p className="site-card__text">{props.text}</p>
			<span className="site-card__num">{props.num}</span>
		</li>
	);
}
export default Card;
