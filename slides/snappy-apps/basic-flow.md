### Basic Flow of the Rendering Engine

--

<ul>
  <li class="basic-flow-box basic-flow-box--translate fragment"
    data-fragment-index="1">
    Markup gets translated into the DOM Tree
  </li>
  <li class="basic-flow-box basic-flow-box--construct fragment"
    data-fragment-index="2">
    The Render Tree is constructed<br/>(visual representation of the document)
  </li>
  <li class="basic-flow-box basic-flow-box--calculate fragment"
    data-fragment-index="3">
    Position and size values are calculated<br/>i.e., layout or re-flow
  </li>
  <li class="basic-flow-box basic-flow-box--paint fragment"
    data-fragment-index="4">
    Actual pixels of the elements are painted
  </li>
</ul>
