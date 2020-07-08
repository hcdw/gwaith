import React from 'react';
import logo from '../gwaith-io.svg' 
import styles from './nav.module.scss'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav(props) {
    return (
      <div className={styles.nav}>
      {props.children}
        <img src={logo} alt="Gwaith logo" />
        <div>
        <a href='https://www.twitter.com/gwaith_io' target='_blank' rel='noopener noreferrer' className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
      
    );
  }
  
  export default Nav;
  