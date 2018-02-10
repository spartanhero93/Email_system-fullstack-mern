import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard  = () => <h2>Dashboard</h2>
const SurveyNew = () =>  <h2>Survey New</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            {/* <Route path='/' component={}/>
          <Route path='/' component={}/> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

// export default class App extends Component {
//   state = {count: 0}

//   add = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }))
//     console.log(`Current count is ${this.state.count}`)
//   }

//   render(){
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.add}>Add</button>
//       </div>
//     )
//   }
// }