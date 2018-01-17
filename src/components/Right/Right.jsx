import React, {Component} from 'react';
import Chat from 'components/Chat/Chat';

class Right extends Component{
    render(){
        return (
			<div className="right-sec">
		<div className="right-profile-sec">
			<div className="profile-status-area">
				<h4>my profile status</h4>
				<div className="profile-status">
					<div className="profile-status-img">
						<img src={require('../../assets/images/profile-img.png')} alt=""/>
					</div>
					<div className="profile-status-cont">
						<h3>Shawaz Sharif</h3>
						<h5>My Level : <span>43</span></h5>
						<h5>My Top Skills : <span>Javascript</span></h5>
					</div>
				</div>
			</div>
			
			<div className="dash-suggest-sec">
				<div className="cus-head">
					<h4>Suggestion for you</h4>
				</div>
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/suggest-profile-1.jpg')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>Greg Dlubacz</h3>
						<span>Stanford University</span>
						<button type="button" className="add-suggest">
							<img src={require('../../assets/images/add-blue-icon.png')} alt=""/>
						</button>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/suggest-profile-2.jpg')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>Tony Scott</h3>
						<span>IIM - Bangalore</span>
						<button type="button" className="add-suggest">
							<img src={require('../../assets/images/add-blue-icon.png')} alt=""/>
						</button>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/suggest-profile-3.jpg')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>Greg Dlubacz</h3>
						<span>Stanford University</span>
						<button type="button" className="add-suggest">
							<img src={require('../../assets/images/add-blue-icon.png')} alt=""/>
						</button>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/suggest-profile-2.jpg')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>Tony Scott</h3>
						<span>IIM - Bangalore</span>
						<button type="button" className="add-suggest">
							<img src={require('../../assets/images/add-blue-icon.png')} alt=""/>
						</button>
					</div>					
				</div>
				
				<div className="see-all-btn">
					<a href="">see all</a>
				</div>
			</div>
			
			<div className="dash-suggest-sec dash-trending">
				<div className="cus-head">
					<h4>Trending</h4>
				</div>
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#instagram</h3>
						<span>1,008578 posts</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#children</h3>
						<span>9,146,357 posts</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#silhouette</h3>
						<span>889,110 post</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#style</h3>
						<span>678,991 posts</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#deutschland</h3>
						<span>99,357 posts</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#yosemite</h3>
						<span>11,382 posts</span>
					</div>					
				</div>
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#paysage</h3>
						<span>10,811 posts</span>
					</div>					
				</div>
				
				
				<div className="suggestion-list">
					<div className="suggestion-list-img">
						<img src={require('../../assets/images/trending-icon.png')} alt=""/>
					</div>
					<div className="suggestion-list-job">
						<h3>#macromondays</h3>
						<span>5,001 posts posts</span>
					</div>					
				</div>
				
				<div className="see-all-btn">
					<a href="">see all</a>
				</div>
			</div>

		</div>
		
		<Chat />
	</div>


        );
    }
}

export default Right;
