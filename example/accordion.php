<?php

if (!isset($TEMPLATE)) {
  $TITLE = 'Accordion Example';
  $HEAD = '<link rel="stylesheet" href="hazdev-accordion.css"/>';
  $FOOT = '<script src="hazdev-accordion.js"></script>' .
      '<script src="Accordion.js"></script>';
}
include '_example.inc.php';

?>

<p>
  This accordion element is not part of the original DOM, but is injected by
  Javascript at load time. Accordion sections expand and collapse when you
  click on the section headers.
</p>
<p>
  Accordion sections can be grouped or can be used as standalone elements.
</p>


<h2>Ungrouped Accordions</h2>
<p>
  This text is followed by two ungrouped accordions. When an accordion is not
  grouped, the accordion is set apart vertically by the margin defined on
  the .accordion-toggle element.
</p>
<p>
  Ungrouped means that the accordion is not wrapped by an
  <em>accordion-group</em> class. This is the default.
</p>
<div class="accordion-set-1">
  <div class="accordion accordion-standard">
    <h3 class="accordion-toggle">Section Header (Default Open)</h3>
    <div class="accordion-content">
      <h4>A single accordion</h4>
      <p>
        This content in .accordion-content is visible by default because the
        wrapper element (div.accordion) does not share the .accordion-closed
        class.
      </p>
    </div>
  </div>

  <div class="accordion accordion-standard accordion-closed animate">
    <h3 class="accordion-toggle">Section Header (Default Closed)</h3>
    <div class="accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>

<h2>Grouped Accordions</h2>
<p>
  This text is followed by three grouped accordions. When accordions are
  grouped, the top and bottom padding is equal. Margins are cleared on the
  individual .accordion-toggle sections, but the entire .accordion-group
  is given a top/bottom margin.
</p>

<div class="accordion-group accordion-set-2">
  <div class="accordion accordion-standard accordion-closed">
    <h3 class="accordion-toggle">Section Header (Default Closed)</h3>
    <div class="accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>

  <div class="accordion accordion-standard accordion-closed">
    <h4 class="accordion-toggle">Section Header (Default Closed)</h4>
    <div class="accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>

  <div class="accordion accordion-standard">
    <h2 class="accordion-toggle">Section Header (Default Open)</h2>
    <div class="accordion-content">
      <h4>A group of accordions</h4>
      <p>
        The first to accordions in the group are toggled closed. This final
        section is toggled open. You can see that there is no longer any
        vertical space between accordion elements. The .accordion-group
        wrapper ensures that all accordions are grouped together.
      </p>
    </div>
  </div>
</div>



<h2>Accordion Section</h2>
<p>
  This is a generic implementation of the accordion. Anything placed inside
  the .accordion-summary wrapper will be visible at all times. Anything placed
  inside the .accordion-content wrapper will only be visible when the
  .accordion-closed class is not present on the section.accordion wrapper.
</p>
<div class="accordion-set-3">
  <section class="accordion accordion-section example-style">
    <div class="accordion-summary">
      <h3>This is a Title</h3>
      <p>
        Nothing inside of this div will be toggled by the accordion button
        because it is not part of the <em>accordion-content</em> class.
      </p>
    </div>
    <span class="accordion-toggle">Toggle Button</span>
    <div class="accordion-summary">
      <p>
        Another div that will not be toggled by the accordion.
        Yes, 20.
      </p>
    </div>
    <div class="accordion-content">
      <hr />
      <p>
        This is at the beginning of the details that will be hidden/displayed.
        The toggle button will remain wherever it is placed by default and will
        only toggle content within the <em>accordion-content</em> container
        with the same parent as the <em>accordion-toggle</em>. The
        <em>accordion-content</em> container in this example has a blue 1px
        border
      </p>
      <table>
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td>g</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
      <p>
        This is at the end of the details that will be hidden/displayed.
      </p>
    </div>
  </section>
</div>

<h2>Dynamically Created Accordion</h2>
<p>This text will be followed by dynamic accordions.</p>

<div class="test-accordions"></div>
