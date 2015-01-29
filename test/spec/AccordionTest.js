/* global describe, it */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var Accordion = require('Accordion');

var emptyAccordion = new Accordion({
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
			expect(emptyAccordion).to.be.an.instanceof(Accordion);
		});

		it('Sets options on itself.', function () {
			expect(emptyAccordion).to.be.an.instanceof(Object);
		});

		it('Can be required.', function () {
			/* jshint -W030 */
			expect(Accordion).to.not.be.null;
			/* jshint +W030 */
		});

		it('Has all expected methods.', function () {
			expect(emptyAccordion).to.respondTo('_initialize');
			expect(emptyAccordion).to.respondTo('addAccordion');
		});

		it('Has all expected properties.', function () {
			expect(emptyAccordion).to.have.property('_options');
			expect(emptyAccordion).to.have.property('_el');
		});

		it('Has proper default attributes.', function () {
			/* jshint -W030 */
			expect(emptyAccordion.el).to.not.be.null;
			expect(emptyAccordion.accordions).to.not.be.null;
			expect(emptyAccordion.accordion).to.not.be.null;
			expect(emptyAccordion.title).to.not.be.null;
			expect(emptyAccordion.content).to.not.be.null;
			/* jshint +W030 */
		});

	});

});


