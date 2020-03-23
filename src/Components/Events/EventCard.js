import React , { Component } from 'react';
import './EventCard.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class EventCard extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  // <Grid container spacing={3}>
  //   <Grid item xs={6}>
  //     <Paper class="paper">Check In!</Paper>
  //   </Grid>
  // </Grid>

  render() {
    return(
      <div class="main_card">

        <div class="root">

        </div>

        <h1>{this.props.eventname}</h1>
        <div class="line" />
        <h2>{this.props.description}</h2>
      </div>

    );
  }
}
