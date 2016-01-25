'use strict';

let Clock = function(dom_node, timezone) {
  this.interval_id = null;
  this.dom_node = dom_node;
  this.refresh_delay = 1000; //by default, update the clocks every second
  this.options  = { // to be used with Date#toLocaleTimeString
    timeZone: timezone || 'UTC',
    timeZoneName: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    weekday: 'short'
  }
}

Clock.prototype = {
  refresh: function(time) {
    time = time || Date.now();
    this.dom_node.innerHTML = new Date(time).toLocaleTimeString('en-us', this.options);
  },

  start: function() {
    if(this.interval_id) return this.interval_id;

    this.interval_id = setInterval(this.refresh.bind(this), this.refresh_delay);

    return this.interval_id;
  },

  stop: function() {
    clearInterval(this.interval_id);
    this.interval_id = null;
  }
}

// Export node module so we can require it in tests
// the `module.exports` construct won't exist in a browser, so this is
// safe, though verbose, to include in files destined for web inclusion
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Clock;
}
