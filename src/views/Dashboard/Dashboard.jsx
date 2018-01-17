import React, { Component } from 'react';
import { Dropdown,Tab,Tabs,MenuItem } from 'react-bootstrap';


function ReadMore(){	
    return(<div className="feed-more-btn">
									 <div className="btn-group">
<Dropdown title="Read more" id="ReadMore">
   		 <Dropdown.Toggle noCaret className="remove-btn-css"  bsStyle="link"><img src={require('../../assets/images/more-icon.png')} alt="" /></Dropdown.Toggle>
 <Dropdown.Menu>
 <MenuItem eventKey="1">Action</MenuItem>
 <MenuItem eventKey="1">Another action</MenuItem>
 </Dropdown.Menu>
 </Dropdown>
 </div></div>
    );
}    

function Boomark(){	
    return (<div className="feed-count-sec">								
					<div className="btn-group">
					<Dropdown title="Bookmark" id="Bookmark">
   		 <Dropdown.Toggle noCaret className="remove-btn-css"  bsStyle="link"><img src={require('../../assets/images/feed-bookmark.png')} alt="" /></Dropdown.Toggle>
 <Dropdown.Menu>
	      <li><Tabs id="tabs" title="tabs">
			        <Tab eventKey={1} title="Bookmark"> <div className="bookmark-links">
								<ul>
									<li><a href="">Economics</a></li>
									<li><a href="">Children</a></li>
									<li><a href="">silhouette</a></li>
									<li><a href="">style</a></li>
									<li><a href="">deutschland</a></li>
									<li><a href="">yosemite</a></li>
									<li><a href="">paysage</a></li>
									<li><a href="">A Guide To Mri Scans</a></li>
								</ul>
							  </div></Tab>
			        <Tab eventKey={2} title="share"><div className="bookmark-share">
								<ul>
									<li><a href="" className="fb"><i className="fa fa-facebook"></i></a></li>
									<li><a href="" className="twi"><i className="fa fa-twitter"></i></a></li>
									<li><a href="" className="insta"><i className="fa fa-instagram"></i></a></li>
								</ul>											  
							  </div></Tab>
							  </Tabs>
	      	

	      </li>
	</Dropdown.Menu>
	</Dropdown>
				  </div>
			</div>);
}    	
class Dashboard extends Component {
    render() {
        return (	<div className="mid-sec">
		<div className="newsfees-area">
			<div className="feed-post">
				<div className="newsfeed-profile">
					<div className="newsfeed-profile-img">
						<img src={require('../../assets/images/profile-img.png')} />
					</div>
					<div className="newsfeed-profile-content">
						<h5>Derrick Carroll</h5>
						<p>IIM - Ahemdabad</p>
					</div>
				</div>
				<div className="newsfeed-img-sec">
					<div className="newsfeed-img">
						<img src={require('../../assets/images/newsfeed-1.jpg')} />
					</div>			
					<a href="" className="newsfeed-view-pro">View Project</a>
				</div>
				<div className="newsfeed-dontent">
					<p>At every moment you can tell if the vibration that you are sending is either a positve one or a negative one by identifying the feeling you are experiencing.</p>
				</div>
				<div className="newsfeed-comment-area">
					<div className="newsfeed-comment-top">
						<ul>
							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-unlike.png')} alt="" />
									</div>
									<span>899</span>
								</div>
							</li>
							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-comment.png')} alt="" />
									</div>
									<span>15k</span>
								</div>
							</li>
							<li className="feed-bookmark">
								<Boomark />
							</li>
							<li className="feed-more">								
								<ReadMore />
							</li>
						</ul>
					</div>
					<div className="news-comment-sec">
						<p>view all 15,065 comments</p>
						<div className="news-comment-list">
							<ul>
								<li>janlosert <span>Amazing!</span></li>
								<li>Snowgraphs</li>
								<li>marcallcock <span>Awesome !</span></li>
								<li>firmansananda <span>Cool mate.</span></li>
							</ul>
						</div>
						<div className="feed-comment-box">
							<input type="text" placeholder="COMMENT HERE" className="form-control" />					
						</div>
					</div>
				</div>
			</div>			
			<div className="feed-post">
				<div className="newsfeed-profile">
					<div className="newsfeed-profile-img">
						<img src={require('../../assets/images/profile-img.png')} />					
					</div>
					<div className="newsfeed-profile-content">
						<h5>Dr. Drake Ramore</h5>
						<p>London Business School</p>
					</div>
				</div>

				<div className="newsfeed-img-sec">
					<div className="newsfeed-img">
						<video controls>
						  <source src={require('../../assets/video/dummy.mp4')} type="video/mp4"/>
						</video>
					</div>			
					<a href="" className="newsfeed-view-pro">View Project</a>
				</div>

				<div className="newsfeed-dontent">
					<p>2 tips for developing good managment skills | London Business School</p>
				</div>

				<div className="newsfeed-comment-area">
					<div className="newsfeed-comment-top">
						<ul>
							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-like.png')} alt="" />
									</div>
									<span>899</span>
								</div>
							</li>

							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-comment.png')} alt="" />
									</div>
									<span>13k</span>
								</div>
							</li>

							<li className="feed-bookmark">
								<Boomark />
							</li>

							<li className="feed-more">								
								<ReadMore />
							</li>
						</ul>
					</div>

					<div className="news-comment-sec">
						<p>view all 15,065 comments</p>
						<div className="news-comment-list">
							<ul>
								<li>janlosert <span>Amazing!</span></li>
								<li>Snowgraphs</li>
								<li>marcallcock <span>Awesome !</span></li>
								<li>firmansananda <span>Cool mate.</span></li>
							</ul>
						</div>
						<div className="feed-comment-box">
							<input type="text" placeholder="COMMENT HERE" className="form-control" />					
						</div>
					</div>

				</div>
			</div>
			
			<div className="feed-post">
				<div className="newsfeed-profile">
					<div className="newsfeed-profile-img">
						<img src={require('../../assets/images/profile-img.png')} />					
					</div>
					<div className="newsfeed-profile-content">
						<h5>Landon Barrett</h5>
						<p>Indian Institute of Managment Banglore</p>
					</div>
				</div>

				<div className="newsfeed-img-sec">
					<div className="newsfeed-img">
						<img src={require('../../assets/images/newsfeed-2.jpg')} />
					</div>			
					<a href="" className="newsfeed-view-pro">View Document</a>
				</div>

				<div className="newsfeed-dontent">
					<p>At every moment you can tell if the vibration that you are sending is either a positve one or a negative one by identifying the feeling you are experiencing.</p>
				</div>

				<div className="newsfeed-comment-area">
					<div className="newsfeed-comment-top">
						<ul>
							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-unlike.png')} alt="" />
									</div>
									<span>899</span>
								</div>
							</li>

							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-comment.png')} alt="" />
									</div>
									<span>15k</span>
								</div>
							</li>

							<li className="feed-bookmark">
								<Boomark />
							</li>

							<li className="feed-more">								
								<ReadMore />
							</li>
						</ul>
					</div>

					<div className="news-comment-sec">
						<p>view all 15,065 comments</p>
						<div className="news-comment-list">
							<ul>
								<li>janlosert <span>Amazing!</span></li>
								<li>Snowgraphs</li>
								<li>marcallcock <span>Awesome !</span></li>
								<li>firmansananda <span>Cool mate.</span></li>
							</ul>
						</div>
						<div className="feed-comment-box">
							<input type="text" placeholder="COMMENT HERE" className="form-control" />					
						</div>
					</div>

				</div>
			</div>
			
			<div className="feed-post">
				<div className="newsfeed-profile">
					<div className="newsfeed-profile-img">
						<img src={require('../../assets/images/profile-img.png')} />					
					</div>
					<div className="newsfeed-profile-content">
						<h5>Sallie Mendoza</h5>
						<p>Manipal University</p>
					</div>
				</div>

				<div className="newsfeed-img-sec">
					<div className="newsfeed-img">
						<img src={require('../../assets/images/newsfeed-3.jpg')} />
					</div>			
					<div className="feed-img-thumb">
						<ul>
							<li><a href="" className="GIT-plus"><i className="zmdi zmdi-plus"></i></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-1.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-2.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-3.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-4.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-5.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-6.jpg')} /></a></li>
							<li><a href=""><img src={require('../../assets/images/newsfeed-thumb-7.jpg')} /></a></li>
						</ul>
					</div>
				</div>

				<div className="newsfeed-dontent">
					<p>At every moment you can tell if the vibration that you are sending is either a positve one or a negative one by identifying the feeling you are experiencing.</p>
					<h6>Location : End Point Ground, Manipal, Karnataka, India</h6>
					<h6>Date : 14 June 2017 4:00 pm - 17 june 2017 6:00 pm</h6>
				</div>

				<div className="newsfeed-comment-area">
					<div className="newsfeed-comment-top">
						<ul>
							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-unlike.png')} alt="" />
									</div>
									<span>899</span>
								</div>
							</li>

							<li>
								<div className="feed-count-sec">								
									<div className="feed-count-img">
										<img src={require('../../assets/images/feed-comment.png')} alt="" />
									</div>
									<span>15k</span>
								</div>
							</li>

							<li className="feed-bookmark">
								<Boomark />
							</li>

							<li className="feed-more">								
								<ReadMore />
							</li>
						</ul>
					</div>

					<div className="news-comment-sec">
						<p>view all 15,065 comments</p>
						<div className="news-comment-list">
							<ul>
								<li>janlosert <span>Amazing!</span></li>
								<li>Snowgraphs</li>
								<li>marcallcock <span>Awesome !</span></li>
								<li>firmansananda <span>Cool mate.</span></li>
							</ul>
						</div>
						<div className="feed-comment-box">
							<input type="text" placeholder="COMMENT HERE" className="form-control" />					
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>


        );
    }
}

export default Dashboard;
