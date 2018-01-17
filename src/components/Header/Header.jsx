import React, { Component } from 'react';
import { MenuItem,Dropdown,Tab,Tabs } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';


function Upload(){
	return(<div className="dropi-btn-area">
					<Dropdown id="Upload" title="Upload">
   		 <Dropdown.Toggle noCaret className="remove-btn-css" bsStyle="link"><img src={require('../../assets/images/plus.png')} alt=""/></Dropdown.Toggle>
 <Dropdown.Menu className="pro-dropi">
	      <MenuItem eventKey="1"><div className="pro-dropi-img"><img src={require('../../assets/images/files-icon.png')}/></div><h4>File</h4></MenuItem>
	      <MenuItem eventKey="3">
									<div className="pro-dropi-img">
										<img src={require('../../assets/images/event-icon.png')}/>
									</div>
									<h4>Event</h4>
								</MenuItem>
      	<MenuItem eventKey="2">
									<div className="pro-dropi-img">
										<img src={require('../../assets/images/project-icon.png')}/>
									</div>
									<h4>Project</h4>
								</MenuItem>
		<MenuItem eventKey="5">
									<div className="pro-dropi-img">
										<img src={require('../../assets/images/news-icon.png')}/>
									</div>
									<h4>news</h4>
								</MenuItem>
		<MenuItem eventKey="6">
									<div className="pro-dropi-img">
										<img src={require('../../assets/images/assignment-icon.png')}/>
									</div>
									<h4>assignment</h4>
								</MenuItem>
		<MenuItem eventKey="7">
									<div className="pro-dropi-img">
										<img src={require('../../assets/images/report-icon.png')}/>
									</div>
									<h4>report</h4>
								</MenuItem>
								      </Dropdown.Menu>

    
  </Dropdown>		
					</div>);
}

function Notification(){
	return(<div className="dropi-btn-area top-notification">
			<Dropdown id="Notification" title="Notification">
	 				<Dropdown.Toggle className="remove-btn-css" bsStyle="link" noCaret><img src={require('../../assets/images/notification.png')} alt=""/></Dropdown.Toggle>
				<Dropdown.Menu>
 					 <li className="cus-tab-area">
 					 	<Tabs id="controlled-tab-example">
					        <Tab eventKey="1" title="My update">
					         <Scrollbars  style={{ height: 300 }} className="notification-list-sec scolller_cont">
								<div className="notification-list">
									<div className="noti-time">10m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-7.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>awesome_earthpix</h4>
											<p><span>liked</span> your photo</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
												<img src={require('../../assets/images/post-1.jpg')}/>
											</div>
										</div>
									</div>
								</div>
								<div className="notification-list">
									<div className="noti-time">18m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>sarahanloreth</h4>
											<p>Started following you</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img following">
												<img src={require('../../assets/images/follow-icon.png')}/>
											</div>
										</div>
									</div>
								</div>
								<div className="notification-list">
									<div className="noti-time">2d</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-5.jpg')}/>
											<div className="verify-user">
												<i aria-hidden="true" className="fa fa-check-circle"></i>
											</div>
										</div>
										<div className="NLD-cont">
											<h4>robertdowneyj</h4>
											<p>started following you.</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img following">
											<img src={require('../../assets/images/following-icon.png')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">2d</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-4.jpg')}/>
											
										</div>
										<div className="NLD-cont">
											<h4>pugbasement</h4>
											<p>left a comment on your photo:</p>
											<a href="">Soooooo cute</a>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
											<img src={require('../../assets/images/post-4.jpg')}/>
											</div>
										</div>
									</div>
								</div>
								
								<div className="notification-list">
									<div className="noti-time">23m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-7.jpg')}/>
										</div>
										<div className="NLD-cont">
											<h4>awesome_earthpix</h4>
											<p><span>liked</span> your photo</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
											<img src={require('../../assets/images/post-1.jpg')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">18m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-2.jpg')}/>
										</div>
										<div className="NLD-cont">
											<h4>sarahanloreth</h4>
											<p>Started following you</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img following">
											<img src={require('../../assets/images/follow-icon.png')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">1d</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-2.jpg')}/>
										</div>
										<div className="NLD-cont">
											<h4>sarahanloreth</h4>
											<p>left a comment on your photo:</p>
											<a href="">Amazing view!</a>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
											<img src={require('../../assets/images/post-2.jpg')}/>
											</div>
										</div>
									</div>
								</div>
							</Scrollbars>
							</Tab>
					        <Tab eventKey="2" title="College update">
					         <Scrollbars  style={{ height: 300 }} className="notification-list-sec scolller_cont">
								<div className="notification-list">
									<div className="noti-time">23m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-7.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>awesome_earthpix</h4>
											<p><span>liked</span> your photo</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
												<img src={require('../../assets/images/post-1.jpg')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">18m</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>sarahanloreth</h4>
											<p>Started following you</p>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img following">
												<img src={require('../../assets/images/follow-icon.png')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">1d</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>sarahanloreth</h4>
											<p>left a comment on your photo:</p>
											<a href="">Amazing view!</a>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
												<img src={require('../../assets/images/post-2.jpg')}/>
											</div>
										</div>
									</div>
								</div>

								<div className="notification-list">
									<div className="noti-time">2d</div>
									<div className="NL-details">
										<div className="NLD-img">
											<img src={require('../../assets/images/user-3.jpg')} alt=""/>
										</div>
										<div className="NLD-cont">
											<h4>isetups</h4>
											<p>mentioned you in a comment:</p>
											<a href="">Source: @mo.k4</a> <a href="">#minimal</a> <a href="">#minimalsetups</a> <a href="">#workspace</a>
										</div>
										<div className="NLD-right">
											<div className="NLD-post-img">
												<img src={require('../../assets/images/post-3.jpg')}/>
											</div>
										</div>
									</div>
								</div>

								
						</Scrollbars>
						</Tab>
					   </Tabs>								
 					 </li>
				</Dropdown.Menu>
			</Dropdown>		
			</div>);
}

function Profile(){
	return(
					<div className="dropi-btn-area top-profile">
						<Dropdown title="Profile" id="Profile">
   		 <Dropdown.Toggle className="remove-btn-css" bsStyle="link" noCaret><img src={require('../../assets/images/profile-img.png')} alt=""/></Dropdown.Toggle>
 <Dropdown.Menu className="profil_dropi">
 		<h4>Hi, Shawaz!</h4>
	      <MenuItem eventKey="1" className="active">College Backend</MenuItem>
	      <MenuItem eventKey="2">Profile</MenuItem>
	      <MenuItem eventKey="3">Setting</MenuItem>
	      <MenuItem eventKey="4">Sign Out</MenuItem>
	</Dropdown.Menu>
	</Dropdown>
	
					</div>);
}
class Header extends Component{
	 constructor(props){
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            width: false
        };
    }
    mobileSidebarToggle(e){
    	console.log(e);
	    var newWidth = this.state.width === '400px' ? false : '400px';
    	this.setState({ width: newWidth });
    }

    render(){
        return (		
<header className="header">
	<div className="nav-sec">
		<div className="logo-area">
			<a className="navbar-brand" href="#brand"><img src={require('../../assets/images/logo.png')} className="logo" alt=""/></a>
		</div>
		<div className="profile-sec navbar-right">
			<ul>
				<li>
					<Upload />
				</li>				
				<li>
					<Notification />					
				</li>				
				<li><span style={{cursor:'pointer'}} onClick={this.mobileSidebarToggle}><img src={require('../../assets/images/menu-icon.png')}/></span></li>
				<li>
					<Profile />
				</li>

			</ul>
		</div>

		 <div className="header-search-sec">
			<div className="header-search">
				<i aria-hidden="true" className="fa fa-search"></i>
				<input placeholder="Search for posts, members, courses, colleg's, companies, jobs" className="form-control"/>
			</div>
		</div>
        <div className="sidenav" style={{width:this.state.width}}>
		  <a href="javascript:void(0)" onClick={this.mobileSidebarToggle} className="closebtn">&times;</a>
		  <div className="cus-tab-area">
		  <Tabs id="tabs" activeKey={this.state.key} onSelect={this.handleSelect} className="nav nav-tabs menu-tab">
		        <Tab eventKey={1} title="assignments"><div className="menu-tab-details">
						<div className="menu-tab-heading">
							Assignment due
						</div>
						
						<div className="assignment-due-list-sec">
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-3.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-2.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-4.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-6.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
						</div>
						
						<div className="menu-tab-heading">
							Assignment  Submitted
						</div>
						
						<div className="assignment-due-list-sec">
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-3.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Assignment tittle will be give here</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-2.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Assignment tittle will be give here</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-4.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Assignment tittle will be give here</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-6.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Assignment tittle will be give here</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot"></div>
									</div>
								</div>							
							</div>
						</div>
					
					
					</div></Tab>
		        <Tab eventKey={2} title="events"><div className="menu-tab-heading">
							Event
						</div>
						
						<div className="assignment-due-list-sec">
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-3.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-2.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-4.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-6.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
						</div></Tab>
		        <Tab eventKey={3} title="reports"><div className="menu-tab-heading">
							Reports
						</div>
						
						<div className="assignment-due-list-sec">
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-3.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-2.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-4.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
							
							<div className="assignment-due-list">
								<div className="ADL-img">
									<img src={require('../../assets/images/user-6.jpg')} alt=""/>
								</div>								
								<div className="ADL-cont-area">
									<div className="ADL-cont">
										<h4>Submit the thesis on projects</h4>
										<p>Due Date : June 2017 4:00 PM</p>
										<div className="assignmebt-dot blank"></div>
									</div>
								</div>							
							</div>
						</div></Tab>
		    </Tabs> 
		  </div>
		</div>
	</div>
</header>
        );
    }
}

export default Header;
