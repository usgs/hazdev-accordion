/* global describe, chai, it */
'use strict';

var expect = chai.expect;
var Accordion = require('accordion/Accordion');

var emptyAccordion = Accordion({
  el: document.querySelector('.page-content'),
  accordions: [
    {} // Empty accordion - use all of the defaults
  ]
});

describe('Accordion test suite', function () {

  describe('_initialize()', function () {
    it('Is defined', function () {
      expect(typeof Accordion).to.equal('function');
    });

    it('Can be instantiated.', function () {
      expect(emptyAccordion).to.be.an.instanceof(Object);
    });

    it('Can be required.', function () {
      /* jshint -W030 */
      expect(Accordion).to.not.be.null;
      /* jshint +W030 */
    });

    it('Has all expected methods.', function () {
      expect(emptyAccordion).to.respondTo('addAccordion');
    });

  });
});

