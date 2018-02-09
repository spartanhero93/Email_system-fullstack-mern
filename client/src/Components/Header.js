import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="#" className="left brand-logo">
                Emaily
              </a>
              <ul className="right">
                <li>
                  <a>Login with Google</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}