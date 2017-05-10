import React, { Component } from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    availability: store.availability.entities,
  };
})
export default class Layout extends React.Component {

  static defaultProps = {
    center: {lat: 40.751045, lng: -73.946459},
    zoom: 15
  };

  componentWillMount() {
    this.props.dispatch(fetchAvailability())
  }

  fetchAvailability() {
    this.props.dispatch(fetchAvailability())
  }

  render() {
    const { availability } = this.props;

    return <div>


    </div>
  }
}
