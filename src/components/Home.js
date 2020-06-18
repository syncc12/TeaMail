import React from 'react';
import Templates from './Templates'
import Data from './Data'
import proper from '../helpers/proper'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showTemplates: true,
      showData: false,
      showEmails: false
    }
  }

  showHandle = (componentName,newState) => {
    const showComponent = `show${proper(componentName)}`;
    const showState = newState || !this.state[showComponent];

    this.setState({[showComponent]:showState});
  }

  render() {
    return (
      <>
        <div id="templates-div">
          <Templates topic={'test'} showHandle={this.showHandle} />
        </div>
        <div id="data-div">
          <Data topic={'test'} showHandle={this.showHandle} />
        </div>
      </>
    )
  }
}

export default Home;
