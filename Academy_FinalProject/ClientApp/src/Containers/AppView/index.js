import React from 'react';
import MapBase from '../../Components/MapBaseView';
import RefreshButton from '../../Components/Refreshbutton'
import { HeaderBar } from '../../Components/HeaderBar'

export default class AppView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <RefreshButton/>
        <HeaderBar />
        <MapBase/>
      </React.Fragment>
    )
  }
}