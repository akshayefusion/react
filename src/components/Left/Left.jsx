import React, {Component} from 'react';

class Left extends Component{
    render(){
        return (
	<div className="left-sec">
		<div className="left-sec-list">
			<ul>
				<li>
					<a href="" className="active">
						<i className="LSL-img">
							<img src={require('../../assets/images/newsfeed-icon.jpg')} alt=""/>
						</i><span>Newsfeed</span>
					</a>
				</li>
				<li>
					<a href="">
						<i className="LSL-img">
							<img src={require('../../assets/images/dubai-university-icon.jpg')} alt=""/>
						</i>
						<span>Dubai University</span>
					</a>
				</li>
			</ul>
		</div>

		<div className="left-my-subj">
			<h4>My Subject</h4>
			<ul>
				<li>
					<a href="">
						<i className="LMS_img"><img src={require('../../assets/images/my-subject-1.jpg')} alt=""/></i>
						<span>Business Management & Stats</span>
					</a>
				</li>

				<li>
					<a href="">
						<i className="LMS_img"><img src={require('../../assets/images/my-subject-2.jpg')} alt=""/></i>
						<span>Marketing Management</span>
					</a>
				</li>

				<li>
					<a href="">
						<i className="LMS_img"><img src={require('../../assets/images/my-subject-2.jpg')} alt=""/></i>
						<span>Investment Bankin</span>
					</a>
				</li>

				<li>
					<a href="">
						<i className="LMS_img"><img src={require('../../assets/images/my-subject-3.jpg')} alt=""/></i>
						<span>Accountancy</span>
					</a>
				</li>

				<li>
					<a href="" className="active">
						<i className="LMS_img"><img src={require('../../assets/images/my-subject-4.jpg')} alt=""/></i>
						<span>Human Resource Management</span>
					</a>
				</li>

			</ul>
		</div>

	</div>


        );
    }
}

export default Left;
