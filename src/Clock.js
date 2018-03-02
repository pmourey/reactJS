import React from 'react';
import { clearInterval } from 'timers';

class Clock extends React.Component {

  // obtenir le jour de la semaine avec une date longue
  optionsDate = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
  optionsHour = {hour: "numeric", minute: "numeric", second: "numeric", timeZone: "UTC", timeZoneName: "short"};

  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      timeDate: date.toLocaleString("fr-FR", this.optionsDate),
      timeHour: date.toLocaleString("fr-FR", this.optionsHour)
    }
    //this.updateClock = this.updateClock.bind(this); //1ère solution pour la perte de référence: App Component loses reference when this.updateClock function is called as a callback function
  }

  componentDidMount() {
    this.intervalID = setInterval(
      //this.updateClock, //1ère solution pour la perte de référence
      () => this.updateClock(), //2ème solution pour la perte de référence
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    //console.log(this);
    var date = new Date();
    this.setState({
      timeDate: date.toLocaleString("fr-FR", this.optionsDate),
      timeHour: date.toLocaleString("fr-FR", this.optionsHour)
    });
  }

  render() {
    return (
      <p className="App-clock">
        Nous sommes le {this.state.timeDate} et il est {this.state.timeHour}
      </p>
    );
  }

}
export default Clock;