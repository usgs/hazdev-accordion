'use strict';

var _ACCORDION_OPTIONS,
    _ADD_ACCORDION_OPTIONS,
    _ACCORDION_CLOSED,
    _ACCORDION_TOGGLE,
    _ACCORDION_CONTENT;


_ACCORDION_OPTIONS = {
  accordions: null,
  el: null
};

_ADD_ACCORDION_OPTIONS = {
  toggleText: 'Details',
  toggleElement: 'span',
  content: 'Contents',
  classes: 'accordion-standard'
};

_ACCORDION_CLOSED = 'accordion-closed';
_ACCORDION_TOGGLE = 'accordion-toggle';
_ACCORDION_CONTENT = 'accordion-content';


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
var _extend = function (dst) {
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

  if (target.classList.contains(_ACCORDION_TOGGLE)) {
    target.parentElement.classList.toggle(_ACCORDION_CLOSED);
  }
};


var Accordion = function (options) {
  var _this,
      _initialize,

      _el,
      _options;


  _this = {
    addAccordion: null,
    destroy: null
  };

  _initialize = function (options) {
    var i,
        len;

    _options = _extend({}, _ACCORDION_OPTIONS, options);
    _el = _options.el || document.createElement('section');
    _el.addEventListener('click', _onClick);

    if (options.accordions) {
      len = options.accordions.length;
      for (i = 0; i < len; i++) {
        _this.addAccordion(options.accordions[i]);
      }
    }
  };


  /*
   * this will build the markup for an accordion element
   */
  _this.addAccordion = function (options) {
    var accordion,
        title,
        content;

    options = _extend({}, _ADD_ACCORDION_OPTIONS, options);

    accordion = document.createElement('section');
    accordion.className = 'accordion ' + options.classes;

    title = document.createElement(options.toggleElement);
    title.className = _ACCORDION_TOGGLE;
    title.innerHTML = options.toggleText;
    accordion.appendChild(title);

    content = document.createElement('div');
    content.className = _ACCORDION_CONTENT;

    // Support legacy "contentText" if still present, but prefert "content"
    if (options.contentText) {
      content.innerHTML = options.contentText;
    } else {
      // Check if string content or DOM content
      if (typeof options.content === 'string') {
        content.innerHTML = options.content;
      } else {
        content.appendChild(options.content);
      }
    }

    accordion.appendChild(content);

    _el.appendChild(accordion);
  };

  _this.destroy = function () {
    _el.removeEventListener('click', _onClick);

    _el = null;
    _options = null;

    _this = null;
  };


  _initialize(options);
  options = null;
  return _this;
};

module.exports = Accordion;
