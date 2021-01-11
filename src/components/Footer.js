import React from 'react';
import { Button } from './Button';

function Footer(props) {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscritpion-heading">
          Join the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name='email'
              placeholder='Your Email'
              className="footer-input"
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;