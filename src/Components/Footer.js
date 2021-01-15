import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
<ParticlesBg type="cobweb" bg={true} />
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>No &copy; Copyright Lol copy this website from my github if you want to but do buy me a <a href="upi://pay?pa=akhil.toon@okhdfcbank&amp;pn=Akhil Talla&amp;cu=INR">coffee</a></li>
              <li>Design by <a title="Akhil">Akhil Talla</a> 🖖</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
