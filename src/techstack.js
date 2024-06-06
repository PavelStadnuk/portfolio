import reduxPhoto from './assets/image/Redux.png'
import cssPhoto from './assets/image/css.svg'
import gitPhoto from './assets/image/git.svg'
import githubPhoto from './assets/image/github.svg'
import htmlPhoto from './assets/image/html.svg'
import jsPhoto from './assets/image/js.svg'
import reactPhoto from './assets/image/react.svg'
import sass from './assets/image/sass.svg'
import vscodePhoto from './assets/image/vscode.svg'
import style from './style/techStack.module.scss'
const TechStack = () => {
	const mas = [
		reactPhoto,
		githubPhoto,
		vscodePhoto,
		jsPhoto,
		htmlPhoto,
		sass,
		cssPhoto,
		gitPhoto,
		reduxPhoto,
	]
	return (
		<div className={style.techStack} id='Tech%20Stack'>
			<h2>My Tech Stack</h2>
			<p>Technologies I’ve been working with recently</p>
			<div className={style.stack}>
				{mas.map((element, index) => {
					return (
						<div key={index}>
							<img src={element} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default TechStack
