---
layout: tool-page
title: Crosshair tool
permalink: /tool-1
body_classes: tool-page
code_types: 
  - css
  - scss
  - sass 
  - less

group: 'tools'
---
<main class="tool-main page-content" aria-label="Content">
	<div class="ui-elements-container">
		<div class="site-wrapper">
			<div class="axis-controls-section">
				<div class="axis-switch-block">
          <h2 class="ui-section-label">Customise axes</h2> 
          <div class="switch-container">
            <div class="switch switch-horizontal">
              <div class="switch-icon"></div>
              <div class="switch-style">
                <select class="switch-input switch-horizontal-input ui-element" onchange="onValueChange()">
                  <option value="'wght'" selected="true">Weight</option>
                  <option value="'ital'">Italic</option>
                  <option value="'wdth'">Width</option>
                </select>
              </div>
            </div>
            <div class="switch switch-vertical">
              <div class="switch-icon"></div>
              <div class="switch-style">
                <select class="switch-input switch-vertical-input ui-element" onchange="onValueChange()">
                  <option value="'wght'">Weight</option>
                  <option value="'ital'" selected="true">Italic</option>
                  <option value="'wdth'">Width</option>
                </select>
              </div>
            </div>
          </div>   
        </div>
				<div class="axis-values-container"></div>
			</div>
			<div class="code-export-controls">
        <div class="code-export-block">
          <h2 class="ui-section-label">CSS Export</h2>
          <div class="syntax-selectors">
            <form action="" class="syntax-options">
              {% for item in page.code_types %}
              <div class="syntax-radio-container">
                <input type="radio" onchange="onSyntaxChange(this)" class="syntax-radio {{item}}" name="syntax-option" value="{{item}}" {% if item == 'css' %} checked="checked" {% endif %}>
                <p class="radio-label">{{item | capitalize}}</p>
              </div>
              {% endfor %}
            </form>
          </div>
          <div class="show-hide-button-container ui-element">
            <div class="reveal-code-button code-button" onClick="revealCode()">
              <p class="show-button-label button-label">Show code</p>
            </div>
            <div class="hide-code-button code-button hide" onClick="hideCode()">
              <p class="hide-button-label button-label">Hide code</p>
            </div>
            <div class="show-hide-icon"></div>
          </div>
          <div class="code-to-copy">
            {% for syntaxType in page.code_types %}
            <pre class="formatted-code {{syntaxType}}-format {% if syntaxType != 'css' %}hide{% endif %}">
              {%- include syntaxes/{{syntaxType}}-syntax.html -%}
            </pre>
            {% endfor %}
          </div>
          <div class="css-flavour-selector"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="type-canvas">
    <div class="cross-hairs-container">
      <div id="crosshairclicktarget" class="cross-hair-click-target">
        <div class="crosshair-tooltip">Drag me</div>
        <div class="cross-hair-handle"></div>
        <div class="crosshair crosshair-vertical"></div>
        <div class="crosshair crosshair-horizontal"></div>
      </div>
    </div>
    <div class="text-box-wrapper">
      <div class="text-entry-box" id="text-entry-box" contenteditable="true" autofocus="autofocus">Type here</div>
    </div>
  </div>
</main>

<!-- {%- include footer.html -%} -->

<script src="{{ "/assets/js/crosshair-drag.js" | relative_url }}"></script>
<script src="{{ "/assets/js/mouse-trail.js" | relative_url }}"></script>
<script src="{{ "/assets/js/code-export.js" | relative_url }}"></script>
