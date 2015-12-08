### How Does the Browser Actually Render a Website

--

<ul>
  <li class="basic-flow-box basic-flow-box--translate fragment"
    data-fragment-index="  ">
    Parse HTML + CSS
  </li>
  <li class="basic-flow-box basic-flow-box--arrow fragment"
    data-fragment-index="2">
    ⬇
  </li>
  <li class="basic-flow-box basic-flow-box--construct fragment"
    data-fragment-index="2">
    The Render Tree is constructed<br/>(visual representation of the document)
  </li>
  <li class="basic-flow-box basic-flow-box--arrow fragment"
    data-fragment-index="3">
    ⬇
  </li>
  <li class="basic-flow-box basic-flow-box--calculate fragment"
    data-fragment-index="3">
    Layout<br/>Position and size values are calculated
  </li>
  <li class="basic-flow-box basic-flow-box--arrow fragment"
    data-fragment-index="4">
    ⬇
  </li>
  <li class="basic-flow-box basic-flow-box--paint fragment"
    data-fragment-index="4">
    Paint<br/>Draw the actual pixels onto the screen
  </li>
</ul>
