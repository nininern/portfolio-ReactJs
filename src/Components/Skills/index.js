import React from 'react'
import './style.scss'
import sekolahalam from '../../assets/sekolahalam.png'
import title from '../../assets/skills.png'
import ReactTooltip from "react-tooltip";


class Skills extends React.Component {
	render() {
		return (

			<div className='skillsWrapper' id='Skills'>
				<ReactTooltip />
				<img className='skillsTitle' alt="title" src={title} />

				<div className="skillsContainer">
					<div data-tip="Teachers Sekolah Alam">
						<img src={sekolahalam} />
					</div>
				</div>
			</div>
		)
	}
}
export default Skills