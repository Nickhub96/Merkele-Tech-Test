class Time {
  // creating our constructor and our variable for values to be assigned to
  constructor(hours, minutes, seconds, scale) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.increase = increase
  }
  /*if there are more than 23 hours in the day we are taking the remaining hours and
  add them back the with the ramining amount less than a whole day being the new hours
  */
  setHours() {
    if (this.hours >= 24) {
      let leftOverHours = this.hours % 24;
      this.hours = leftOverHours;
      return this;
    }
  }
  /* if the minutes is more than 59 we are making the appropriate chages to the hours to 
  account for the extra minutes and changing minutes to the remaining minutes less than an hour
  */
  setMinutes() {
    if (this.minutes >= 60) {
      let leftOverhours = Math.floor(this.minutes / 60);
      this.hours = this.hours + leftOverhours;
      this.minutes = MAth.trunc(((this.minutes / 60) % 1) * 60);
      return this;
    }
  }
  /* if the seconds is over 59 making the appropriate changes to the minutes to account for the 
    extra seconds and changing seconds to the reamining amount of seconds less than a whole minute
    */
  setSeconds() {
    if (this.seconds >= 60) {
      let leftOverMins = Math.floor(this.seconds / 60);
      this.minutes = this.minutes + leftOverMins;
      this.seconds = Math.trunc(((this.seconds / 60) % 1) * 60);
      return this;
    }
  }
  // method to increase the time by the amount of seconds given accordingly, to match the required format
  scale() {
      if(this.increase < 60){
          this.seconds = this.seconds + this.increase;
      } 

    // ideally i could use my previous methods for setSeconds, setMinutes, setHours universally in here to correct the time.
  }
  // creating a string with all the correct time values in the appropriate format
  timeFormat() {
    let timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    return this;
  }
}
const time = new Time(26, 20, 70, 59);
time.setHours();

module.exports = { Time };
