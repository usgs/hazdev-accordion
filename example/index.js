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
