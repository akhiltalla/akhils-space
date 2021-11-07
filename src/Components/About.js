import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
         <ParticlesBg type="cobweb" bg={true} />
      <div className="row">
         <div className="three columns">
            {/* <img className="profile-pic"  src={profilepic} alt="" /> */}
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>An engineer who is interested in implementing èfficient software solutions, who understands full stack development(from UI, webpack, sessions , etag, local storage, creating APIs, server side caching, queuing, load balancer, DB relational/non-relational, and connecting all of those). </p>
            <p>Very much interested in blockchain technology (GETH/Hyperledger), full stack development, understanding how our universe works(cause why not?). Do check my projects in <a href="https://github.com/akhiltalla">Github</a>.</p>
            <p>I hate light mode more than i love dark mode 😋</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   {/* <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br /> */}
						   <span><a href="tel:+91 9791516477">{phone}</a></span><br />
                     <a href="mailto:notifyakhil17@gmail.com">{email}</a>
                     {/* <span href="mailto:notifyakhil17@gmail.com"></span> */}
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
