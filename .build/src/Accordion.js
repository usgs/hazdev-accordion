(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFDQ09SRElPTl9PUFRJT05TID0ge1xuICBhY2NvcmRpb25zOiBudWxsLFxuICBlbDogbnVsbFxufTtcblxudmFyIEFERF9BQ0NPUkRJT05fT1BUSU9OUyA9IHtcbiAgdG9nZ2xlVGV4dDogJ0RldGFpbHMnLFxuICB0b2dnbGVFbGVtZW50OiAnc3BhbicsXG4gIGNvbnRlbnRUZXh0OiAnQ29udGVudHMnLFxuICBjbGFzc2VzOiAnYWNjb3JkaW9uLXN0YW5kYXJkJ1xufTtcblxudmFyIEFDQ09SRElPTl9DTE9TRUQgPSAnYWNjb3JkaW9uLWNsb3NlZCcsXG4gICAgQUNDT1JESU9OX1RPR0dMRSA9ICdhY2NvcmRpb24tdG9nZ2xlJyxcbiAgICBBQ0NPUkRJT05fQ09OVEVOVCA9ICdhY2NvcmRpb24tY29udGVudCc7XG5cbi8qKlxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gb25lIG9yIG1vcmUgb2JqZWN0cyBvbnRvIGFub3RoZXIgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSBkc3Qge09iamVjdH1cbiAqICAgICAgICBEZXN0aW5hdGlvbiBvYmplY3Qgd2hlcmUgcHJvcGVydGllcyBhcmUgY29waWVkXG4gKiBAcGFyYW0gdmFyYXJncyB7T2JqZWN0Li4ufVxuICogICAgICAgIFZhcmlhYmxlIG51bWJlciBvZiBvYmplY3RzIHdoZXJlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBmcm9tLlxuICogICAgICAgIE9iamVjdHMgZWFybGllciBpbiB0aGUgYXJndW1lbnRzIGxpc3QgaGF2ZSB0aGVpciBwcm9wZXJ0aWVzXG4gKiAgICAgICAgb3ZlcnJpZGRlbiBieSBvYmplY3RzIGxhdGVyIGluIHRoZSBhcmd1bWVudHMgbGlzdC5cbiAqIEByZXR1cm4gZHN0LlxuICovXG52YXIgX2V4dGVuZCA9IGZ1bmN0aW9uKGRzdCkge1xuICBmb3IgKHZhciBpPTEsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgdmFyIG8gPSBhcmd1bWVudHNbaV07XG4gICAgZm9yICh2YXIgcHJvcCBpbiBvKSB7XG4gICAgICBkc3RbcHJvcF0gPSBvW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufTtcblxudmFyIF9vbkNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICB2YXIgdGFyZ2V0ID0gZXZ0LnRhcmdldDtcblxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhBQ0NPUkRJT05fVE9HR0xFKSkge1xuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQUNDT1JESU9OX0NMT1NFRCk7XG4gIH1cbn07XG5cbnZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gX2V4dGVuZCh7fSwgQUNDT1JESU9OX09QVElPTlMsIG9wdGlvbnMpO1xuICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5fZWwgPSBvcHRpb25zLmVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcblxuICB0aGlzLl9pbml0aWFsaXplKCk7XG59O1xuXG5BY2NvcmRpb24ucHJvdG90eXBlLl9pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMsXG4gICAgICBpLFxuICAgICAgbGVuO1xuXG4gIHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX29uQ2xpY2spO1xuXG4gIGlmIChvcHRpb25zLmFjY29yZGlvbnMpIHtcbiAgICBsZW4gPSBvcHRpb25zLmFjY29yZGlvbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGhpcy5hZGRBY2NvcmRpb24ob3B0aW9ucy5hY2NvcmRpb25zW2ldKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qXG4gKiB0aGlzIHdpbGwgYnVpbGQgdGhlIG1hcmt1cCBmb3IgYW4gYWNjb3JkaW9uIGVsZW1lbnRcbiAqL1xuQWNjb3JkaW9uLnByb3RvdHlwZS5hZGRBY2NvcmRpb24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBhY2NvcmRpb24sXG4gICAgICB0aXRsZSxcbiAgICAgIGNvbnRlbnQ7XG5cbiAgb3B0aW9ucyA9IF9leHRlbmQoe30sIEFERF9BQ0NPUkRJT05fT1BUSU9OUywgb3B0aW9ucyk7XG5cbiAgYWNjb3JkaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBhY2NvcmRpb24uY2xhc3NOYW1lID0gJ2FjY29yZGlvbiAnICsgb3B0aW9ucy5jbGFzc2VzO1xuXG4gIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnRvZ2dsZUVsZW1lbnQpO1xuICB0aXRsZS5jbGFzc05hbWUgPSBBQ0NPUkRJT05fVE9HR0xFO1xuICB0aXRsZS5pbm5lckhUTUwgPSBvcHRpb25zLnRvZ2dsZVRleHQ7XG4gIGFjY29yZGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IEFDQ09SRElPTl9DT05URU5UO1xuICBjb250ZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudFRleHQ7XG4gIGFjY29yZGlvbi5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICB0aGlzLl9lbC5hcHBlbmRDaGlsZChhY2NvcmRpb24pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY2NvcmRpb247XG5cbiJdfQ==
