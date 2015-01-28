(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Accordion = require('Accordion');

new Accordion({
	el:document.querySelector('.accordion-set-1')
});

new Accordion({
	el:document.querySelector('.accordion-set-2')
});

new Accordion({
	el:document.querySelector('.accordion-set-3')
});

var accordion = new Accordion({
	el: document.querySelector('.test-accordions'),
	accordions: [
		{
			toggleText: 'Section Header (Dynamically Created)',
			toggleElement: 'h3',
			contentText:
				'<p>This accordion element is not part of the original DOM, but is ' +
				'injected by Javascript at load time. Just an example of what can ' +
				'be done. Using the <em>accordion.addAccordion</em> method will ' +
				'create a "standard" accordion with a header/banner at the top ' +
				'being used for the clickable toggle.</p>' +
				'<p>If this accordion were created with <em>accordion-closed</em> ' +
				'defined as one of the classes. That class would ensure that the ' +
				'accordion was collpased by default.</p>'
		},
		{
			toggleText: 'Section Header 2 (Dynamically Created)',
			toggleElement: 'a',
			contentText:
				'<p>My awesome contents for this great accordion</p>',
			classes: 'accordion-section example-style'
		}
	]
});

// build from content/title passed in
accordion.addAccordion({
	toggleText: 'Section Header 3 (Dynamically Created)',
	contentText:
	'<p>This accordion element is also not part of the original DOM, but is ' +
	'injected by Javascript at load time. This accordion is also not part ' +
	'of the initial accordion creation, it was added later with a direct ' +
	'call to <em>addAccordion()</em>. All your base are belong to us.</p>'
});

},{"Accordion":2}],2:[function(require,module,exports){
'use strict';

var ACCORDION_OPTIONS = {
  accordions: null,
  el: null
};

var ADD_ACCORDION_OPTIONS = {
  toggleText: 'Details',
  toggleElement: 'span',
  contentText: 'Contents',
  classes: 'accordion-standard'
};

var ACCORDION_CLOSED = 'accordion-closed',
    ACCORDION_TOGGLE = 'accordion-toggle',
    ACCORDION_CONTENT = 'accordion-content';

/**
 * Copy properties from one or more objects onto another object.
 *
 * @param dst {Object}
 *        Destination object where properties are copied
 * @param varargs {Object...}
 *        Variable number of objects where properties are copied from.
 *        Objects earlier in the arguments list have their properties
 *        overridden by objects later in the arguments list.
 * @return dst.
 */
var _extend = function(dst) {
  for (var i=1, len=arguments.length; i<len; i++) {
    var o = arguments[i];
    for (var prop in o) {
      dst[prop] = o[prop];
    }
  }
  return dst;
};

var _onClick = function (evt) {
  var target = evt.target;

  if (target.classList.contains(ACCORDION_TOGGLE)) {
    target.parentElement.classList.toggle(ACCORDION_CLOSED);
  }
};

var Accordion = function (options) {
  options = _extend({}, ACCORDION_OPTIONS, options);
  this._options = options;
  this._el = options.el || document.createElement('section');

  this._initialize();
};

Accordion.prototype._initialize = function () {
  var options = this._options,
      i,
      len;

  this._el.addEventListener('click', _onClick);

  if (options.accordions) {
    len = options.accordions.length;
    for (i = 0; i < len; i++) {
      this.addAccordion(options.accordions[i]);
    }
  }
};

/*
 * this will build the markup for an accordion element
 */
Accordion.prototype.addAccordion = function(options) {
  var accordion,
      title,
      content;

  options = _extend({}, ADD_ACCORDION_OPTIONS, options);

  accordion = document.createElement('section');
  accordion.className = 'accordion ' + options.classes;

  title = document.createElement(options.toggleElement);
  title.className = ACCORDION_TOGGLE;
  title.innerHTML = options.toggleText;
  accordion.appendChild(title);

  content = document.createElement('div');
  content.className = ACCORDION_CONTENT;
  content.innerHTML = options.contentText;
  accordion.appendChild(content);

  this._el.appendChild(accordion);
};

module.exports = Accordion;


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwic3JjL0FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWNjb3JkaW9uID0gcmVxdWlyZSgnQWNjb3JkaW9uJyk7XG5cbm5ldyBBY2NvcmRpb24oe1xuXHRlbDpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLXNldC0xJylcbn0pO1xuXG5uZXcgQWNjb3JkaW9uKHtcblx0ZWw6ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1zZXQtMicpXG59KTtcblxubmV3IEFjY29yZGlvbih7XG5cdGVsOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24tc2V0LTMnKVxufSk7XG5cbnZhciBhY2NvcmRpb24gPSBuZXcgQWNjb3JkaW9uKHtcblx0ZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0LWFjY29yZGlvbnMnKSxcblx0YWNjb3JkaW9uczogW1xuXHRcdHtcblx0XHRcdHRvZ2dsZVRleHQ6ICdTZWN0aW9uIEhlYWRlciAoRHluYW1pY2FsbHkgQ3JlYXRlZCknLFxuXHRcdFx0dG9nZ2xlRWxlbWVudDogJ2gzJyxcblx0XHRcdGNvbnRlbnRUZXh0OlxuXHRcdFx0XHQnPHA+VGhpcyBhY2NvcmRpb24gZWxlbWVudCBpcyBub3QgcGFydCBvZiB0aGUgb3JpZ2luYWwgRE9NLCBidXQgaXMgJyArXG5cdFx0XHRcdCdpbmplY3RlZCBieSBKYXZhc2NyaXB0IGF0IGxvYWQgdGltZS4gSnVzdCBhbiBleGFtcGxlIG9mIHdoYXQgY2FuICcgK1xuXHRcdFx0XHQnYmUgZG9uZS4gVXNpbmcgdGhlIDxlbT5hY2NvcmRpb24uYWRkQWNjb3JkaW9uPC9lbT4gbWV0aG9kIHdpbGwgJyArXG5cdFx0XHRcdCdjcmVhdGUgYSBcInN0YW5kYXJkXCIgYWNjb3JkaW9uIHdpdGggYSBoZWFkZXIvYmFubmVyIGF0IHRoZSB0b3AgJyArXG5cdFx0XHRcdCdiZWluZyB1c2VkIGZvciB0aGUgY2xpY2thYmxlIHRvZ2dsZS48L3A+JyArXG5cdFx0XHRcdCc8cD5JZiB0aGlzIGFjY29yZGlvbiB3ZXJlIGNyZWF0ZWQgd2l0aCA8ZW0+YWNjb3JkaW9uLWNsb3NlZDwvZW0+ICcgK1xuXHRcdFx0XHQnZGVmaW5lZCBhcyBvbmUgb2YgdGhlIGNsYXNzZXMuIFRoYXQgY2xhc3Mgd291bGQgZW5zdXJlIHRoYXQgdGhlICcgK1xuXHRcdFx0XHQnYWNjb3JkaW9uIHdhcyBjb2xscGFzZWQgYnkgZGVmYXVsdC48L3A+J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dG9nZ2xlVGV4dDogJ1NlY3Rpb24gSGVhZGVyIDIgKER5bmFtaWNhbGx5IENyZWF0ZWQpJyxcblx0XHRcdHRvZ2dsZUVsZW1lbnQ6ICdhJyxcblx0XHRcdGNvbnRlbnRUZXh0OlxuXHRcdFx0XHQnPHA+TXkgYXdlc29tZSBjb250ZW50cyBmb3IgdGhpcyBncmVhdCBhY2NvcmRpb248L3A+Jyxcblx0XHRcdGNsYXNzZXM6ICdhY2NvcmRpb24tc2VjdGlvbiBleGFtcGxlLXN0eWxlJ1xuXHRcdH1cblx0XVxufSk7XG5cbi8vIGJ1aWxkIGZyb20gY29udGVudC90aXRsZSBwYXNzZWQgaW5cbmFjY29yZGlvbi5hZGRBY2NvcmRpb24oe1xuXHR0b2dnbGVUZXh0OiAnU2VjdGlvbiBIZWFkZXIgMyAoRHluYW1pY2FsbHkgQ3JlYXRlZCknLFxuXHRjb250ZW50VGV4dDpcblx0JzxwPlRoaXMgYWNjb3JkaW9uIGVsZW1lbnQgaXMgYWxzbyBub3QgcGFydCBvZiB0aGUgb3JpZ2luYWwgRE9NLCBidXQgaXMgJyArXG5cdCdpbmplY3RlZCBieSBKYXZhc2NyaXB0IGF0IGxvYWQgdGltZS4gVGhpcyBhY2NvcmRpb24gaXMgYWxzbyBub3QgcGFydCAnICtcblx0J29mIHRoZSBpbml0aWFsIGFjY29yZGlvbiBjcmVhdGlvbiwgaXQgd2FzIGFkZGVkIGxhdGVyIHdpdGggYSBkaXJlY3QgJyArXG5cdCdjYWxsIHRvIDxlbT5hZGRBY2NvcmRpb24oKTwvZW0+LiBBbGwgeW91ciBiYXNlIGFyZSBiZWxvbmcgdG8gdXMuPC9wPidcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQUNDT1JESU9OX09QVElPTlMgPSB7XG4gIGFjY29yZGlvbnM6IG51bGwsXG4gIGVsOiBudWxsXG59O1xuXG52YXIgQUREX0FDQ09SRElPTl9PUFRJT05TID0ge1xuICB0b2dnbGVUZXh0OiAnRGV0YWlscycsXG4gIHRvZ2dsZUVsZW1lbnQ6ICdzcGFuJyxcbiAgY29udGVudFRleHQ6ICdDb250ZW50cycsXG4gIGNsYXNzZXM6ICdhY2NvcmRpb24tc3RhbmRhcmQnXG59O1xuXG52YXIgQUNDT1JESU9OX0NMT1NFRCA9ICdhY2NvcmRpb24tY2xvc2VkJyxcbiAgICBBQ0NPUkRJT05fVE9HR0xFID0gJ2FjY29yZGlvbi10b2dnbGUnLFxuICAgIEFDQ09SRElPTl9DT05URU5UID0gJ2FjY29yZGlvbi1jb250ZW50JztcblxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBvbmUgb3IgbW9yZSBvYmplY3RzIG9udG8gYW5vdGhlciBvYmplY3QuXG4gKlxuICogQHBhcmFtIGRzdCB7T2JqZWN0fVxuICogICAgICAgIERlc3RpbmF0aW9uIG9iamVjdCB3aGVyZSBwcm9wZXJ0aWVzIGFyZSBjb3BpZWRcbiAqIEBwYXJhbSB2YXJhcmdzIHtPYmplY3QuLi59XG4gKiAgICAgICAgVmFyaWFibGUgbnVtYmVyIG9mIG9iamVjdHMgd2hlcmUgcHJvcGVydGllcyBhcmUgY29waWVkIGZyb20uXG4gKiAgICAgICAgT2JqZWN0cyBlYXJsaWVyIGluIHRoZSBhcmd1bWVudHMgbGlzdCBoYXZlIHRoZWlyIHByb3BlcnRpZXNcbiAqICAgICAgICBvdmVycmlkZGVuIGJ5IG9iamVjdHMgbGF0ZXIgaW4gdGhlIGFyZ3VtZW50cyBsaXN0LlxuICogQHJldHVybiBkc3QuXG4gKi9cbnZhciBfZXh0ZW5kID0gZnVuY3Rpb24oZHN0KSB7XG4gIGZvciAodmFyIGk9MSwgbGVuPWFyZ3VtZW50cy5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICB2YXIgbyA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKHZhciBwcm9wIGluIG8pIHtcbiAgICAgIGRzdFtwcm9wXSA9IG9bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkc3Q7XG59O1xuXG52YXIgX29uQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0O1xuXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKEFDQ09SRElPTl9UT0dHTEUpKSB7XG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShBQ0NPUkRJT05fQ0xPU0VEKTtcbiAgfVxufTtcblxudmFyIEFjY29yZGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBfZXh0ZW5kKHt9LCBBQ0NPUkRJT05fT1BUSU9OUywgb3B0aW9ucyk7XG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9lbCA9IG9wdGlvbnMuZWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuXG4gIHRoaXMuX2luaXRpYWxpemUoKTtcbn07XG5cbkFjY29yZGlvbi5wcm90b3R5cGUuX2luaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy5fb3B0aW9ucyxcbiAgICAgIGksXG4gICAgICBsZW47XG5cbiAgdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfb25DbGljayk7XG5cbiAgaWYgKG9wdGlvbnMuYWNjb3JkaW9ucykge1xuICAgIGxlbiA9IG9wdGlvbnMuYWNjb3JkaW9ucy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLmFkZEFjY29yZGlvbihvcHRpb25zLmFjY29yZGlvbnNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxuLypcbiAqIHRoaXMgd2lsbCBidWlsZCB0aGUgbWFya3VwIGZvciBhbiBhY2NvcmRpb24gZWxlbWVudFxuICovXG5BY2NvcmRpb24ucHJvdG90eXBlLmFkZEFjY29yZGlvbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIGFjY29yZGlvbixcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudDtcblxuICBvcHRpb25zID0gX2V4dGVuZCh7fSwgQUREX0FDQ09SRElPTl9PUFRJT05TLCBvcHRpb25zKTtcblxuICBhY2NvcmRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGFjY29yZGlvbi5jbGFzc05hbWUgPSAnYWNjb3JkaW9uICcgKyBvcHRpb25zLmNsYXNzZXM7XG5cbiAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbnMudG9nZ2xlRWxlbWVudCk7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IEFDQ09SRElPTl9UT0dHTEU7XG4gIHRpdGxlLmlubmVySFRNTCA9IG9wdGlvbnMudG9nZ2xlVGV4dDtcbiAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gQUNDT1JESU9OX0NPTlRFTlQ7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50VGV4dDtcbiAgYWNjb3JkaW9uLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIHRoaXMuX2VsLmFwcGVuZENoaWxkKGFjY29yZGlvbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY29yZGlvbjtcblxuIl19
