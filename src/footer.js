import gitHub from './assets/image/github.svg'
import linkedin from './assets/image/linkedin.svg'
import telegram from './assets/image/telegram.svg'
import style from './style/footer.module.scss'
const Footer = () => {
	return (
		<div className={style.footer} id='Contact'>
			<a href='mailto:bob31021@gmail.com' id='emailLink'>
				bob31021@gmail.com
			</a>
			<a href='tel:0685333529' id='phoneLink'>
				0685333529
			</a>
			<div className={style.wrapperImage}>
				<a href='https://github.com/PavelStadnuk'>
					<img src={gitHub} />
				</a>
				<a href='www.linkedin.com/in/паша-стаднік-ba231b312'>
					<img src={linkedin} />
				</a>
				<a href='https://t.me/Stadnuk_Pavlo'>
					<img src={telegram} />
				</a>
			</div>
		</div>
	)
}

export default Footer
