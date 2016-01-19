'use strict';
let Clock = new require('./clock');

describe('Clock', function() {
  it('should exist', function() {
    expect(Clock).toBeDefined();
  })

  it('should accept a timezone or default to UTC', function() {
    expect(new Clock(null, 'elephant').options.timeZone).toEqual('elephant');
    expect(new Clock().options.timeZone).toEqual('UTC');
  })

  it("doesn't have an interval_id until the clock is started", function() {
    let clock = new Clock();

    expect(clock.interval_id).toBeNull();
    expect(clock.start()).not.toBeNull();
    expect(clock.interval_id).not.toBeNull();
  })

  it("can stop updating and clear the interval_id", function() {
    let clock = new Clock();

    expect(clock.interval_id).toBeNull();
    clock.start();
    expect(clock.interval_id).not.toBeNull();
    clock.stop();
    expect(clock.interval_id).toBeNull();
  })
})
