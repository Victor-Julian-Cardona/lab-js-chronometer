class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalID = setInterval(() =>{
      this.currentTime++;
      if (printTimeCallback) {
      printTimeCallback();
      }
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime-(this.getMinutes()*60)
  }

  computeTwoDigitNumber(value) {
    if (value-10 < 0) {
      return "0".concat(String(value))
    }
    else {
      return String(value)
    }
  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
