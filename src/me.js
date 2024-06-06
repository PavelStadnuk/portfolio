import mePhoto from './assets/image/Me.png'
import style from './style/me.module.scss'
const Me = () => {
	return (
		<div className={style.me} id='About'>
			<h1>
				Hi 👋,
				<br /> My name is
				<br /> <span>Stadnuk Pavlo</span>
				<br />I build things for web
			</h1>
			<div className={style.mePhoto}>
				<img src={mePhoto} />
			</div>
		</div>
	)
}

export default Me
