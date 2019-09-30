import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="twelve columns flex-container">
                  <ul>
                     <li><iframe src="https://open.spotify.com/embed/track/3zwmW1gM4E8FlHXV5nE16u" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> <iframe src="https://open.spotify.com/embed/track/1vcxF91pWs9uNwDROuiCPB" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/44JEbGi3NxptsEuxDNGiAR" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/4q8ce3VGQzroZzwrRhRwKf" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/06Zz2l7cVTCTgCNDe1bnEF" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/0rmGAIH9LNJewFw7nKzZnc" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/0X1sqQ652p1sceKM2nJlIJ" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/0v1XpBHnsbkCn7iJ9Ucr1l" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/5sD5RjDozm0mq6m2vqNz8f" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/3mYCd23hPxJW5okSvMoy3x" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/5itESjyBsj01w8Qx8lkPol" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/0VhhaYztcRWc7PEjJCjr1g" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/5YXr4AGfUQpLSxtFSsKUh6" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/7vjzFWG4neQ9YYMN9yZ9hr" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe><iframe src="https://open.spotify.com/embed/track/53SwFx4JgWwDFFl4oyMz1V" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></li>
                     <li><iframe width="400" height="225" src="https://www.youtube.com/embed/agEzNCIfgGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="400" height="225" src="https://www.youtube.com/embed/HcYsNRZIQaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="400" height="225" src="https://www.youtube.com/embed/jmZsqcInlBY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="400" height="225" src="https://www.youtube.com/embed/h49rP3Afdx0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
