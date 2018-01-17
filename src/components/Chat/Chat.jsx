import React, {Component} from 'react';
import { MenuItem,Dropdown } from 'react-bootstrap';

class Chat extends Component{ 

	constructor(props){
        super(props);
        this.chatOpen = this.chatOpen.bind(this);
        this.state = {
            open: 'none'
        };
    }
    chatOpen(e){
    	console.log(e);
	    var open = this.state.open === 'block' ? 'none' : 'block';
    	this.setState({ open: open });
    }
    render(){
        return (
		<div className="right-chat-sec">
			<div className="right-chat-search">
				<form id="demo-2">
					<input type="search" placeholder="Search Members"/>
				</form>		
			</div>			
			<div className="chat-user-list-sec">
				<div className="chat-user-list">
					<ul>
						<li>
							<div className="chat-user">
								<a onClick={this.chatOpen} href="#" className="chat-user-img"><img src={require('../../assets/images/user-1.jpg')} alt=""/>
									<div className="chat-message-count">646</div>
								</a>
							</div>
						</li>						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-2.jpg')} alt=""/></a>
							</div>
						</li>						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-3.jpg')} alt=""/></a>
							</div>
						</li>						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-4.jpg')} alt=""/></a>
							</div>
						</li>
						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-5.jpg')} alt=""/></a>
							</div>
						</li>
						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-6.jpg')} alt=""/></a>
							</div>
						</li>
						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-7.jpg')} alt=""/></a>
							</div>
						</li>
						
						<li>
							<div className="chat-user">
								<a href="#" className="chat-user-img"><img src={require('../../assets/images/user-2.jpg')} alt=""/></a>
							</div>
						</li>					
						<div className="popup-box chat-popup" id="qnimate"  style={{display:this.state.open}}>
						  <div className="popup-head">
							<div className="popup-head-left pull-left"><i className="fa fa-circle online"></i> Kristaps Elsins</div>
								  <div className="popup-head-right pull-right">
									<button type="button" className="add-chat-button"><i className="zmdi zmdi-plus"></i></button>
									<Dropdown title="Settings" id="settings">
							   			 <Dropdown.Toggle noCaret className="chat-header-button" bsStyle="link"><i className="zmdi zmdi-settings"></i></Dropdown.Toggle>
										 <Dropdown.Menu className="pull-right">
							     			 <MenuItem eventKey="1">Media</MenuItem>
							     			 <MenuItem eventKey="2">Block</MenuItem>
							     			 <MenuItem eventKey="3">Clear</MenuItem>
							     			 <MenuItem eventKey="4">Email Chat</MenuItem>
							     		</Dropdown.Menu>
     								</Dropdown>	 
									

									<button onClick={this.chatOpen} data-widget="remove" id="removeClass" className="chat-header-button pull-right" type="button">
										<i className="zmdi zmdi-close"></i>
									</button>
								  </div>
						  </div>
						  <div className="popup-messages">			
							  <div className="direct-chat-messages">
							  	<div className="chat-inner-popup-sec">
							  		<div className="chat-popup-user other">
										<div className="chat-pop-pic">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="chat-pop-message">
											<div className="CPM-box">
												<span>Yo, can you update views?</span>
											</div>
										</div>										
									</div>
									
									<div className="chat-pop-date">fir 11:30am</div>
									
									<div className="chat-popup-user other">	
										<div className="chat-pop-pic">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="chat-pop-message">
											<div className="CPM-box">
												<span>I can't see updated views yet</span>
											</div>
										</div>
									</div>
									
									<div className="chat-popup-user me">	
							  			<div className="chat-pop-message togather">
							  				<div className="CPM-box">
												<span>Hi, as I noted in Email last week - I am on vacation. </span>
											</div>
											
											<div className="CPM-box">
												<span>test message</span>
											</div>
											
											<div className="CPM-box">
												<span>I will be back next week</span>
											</div>
										</div>
									</div>
									
									<div className="chat-popup-user other">	
										<div className="chat-pop-pic">
											<img src={require('../../assets/images/user-2.jpg')} alt=""/>
										</div>
										<div className="chat-pop-message togather">
											<div className="CPM-box">
												<span>I can't see updated views yet</span>
											</div>

											<div className="CPM-box">
												<span>test</span>
											</div>

											<div className="CPM-box">
												<span>Lorem ipsum dummy text</span>
											</div>
											
											<div className="CPM-box">
												<span>Hey</span>
											</div>
										</div>
									</div>
									
									<div className="chat-popup-user me">	
							  			<div className="chat-pop-message">
							  				<div className="CPM-box">
												<span>Hello, how r u </span>
											</div>
										</div>
									</div>
									
								</div>
							  </div>
						  </div>
						  
						  <div className="popup-messages-footer">
						  	<textarea className="chat-pop-input" placeholder="Type a message..."></textarea>
						  </div>
					    </div>
					</ul>
				</div>
			</div>
		</div>


        );
    }
}

export default Chat;
