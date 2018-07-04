--- 
layout: page
title: Tools
permalink: /tools
description: A digital typographic playground.
tools_list: 
  - In the crosshairs
  - A(bounding) Boxes

crosshair-info:
  - 'Dragging the crosshair around the page lets you interpolate between two axes in the font file at once.'
  - 'Use the dropdowns to choose which axes your drag direction controls.'
  - 'If you find a combination you like, get the CSS that works for you to use in your own code.'

boxes-info:
  - 'Click and drag anywhere to create a text box. Add your own text.'
  - 'Drag the handle to play with the variable width axis.'
  - 'Click around as many times as you want.'

code_types: 
  - css
  - scss
  - sass 
  - less

body_classes: tool-page

---
<div class="title-container">
	<h1 class="box-1">too</h1>
	<h1 class="box-2">ls</h1>
</div>
<div class="tools-list-container">
	<h1 class="small-title">Try them out:</h1>
	<ul class="tools-list">
		{% for item in page.tools_list %}
		<li class="tool-item"><a href="/tool-{{forloop.index}}" class="tool-link">{{item}}</a></li>
		{% endfor %}
	</ul>
</div>
<div class="tool-info-container crosshair-images">
	<div class="tool-wrapper">
		{% for item in page.crosshair-info %}
		<div class="content-block content-block-{{forloop.index}}">
			<div class="img-block block-{{forloop.index}}">
				<img class="tool-img-{{forloop.index}} tool-img" src="assets/images/tool-images/tool-img-{{forloop.index}}.png" alt="">
				<span class="img-caption">{{item}}</span>
			</div>
		</div>
		{% endfor %}
		<!-- <a href="/tool-1" class="tool-link anchored">Try the tool</a> -->
	</div>
</div>

<div class="tool-info-container boxes-images">
	{% for item in page.boxes-info %}
	<div class="content-block content-block-{{forloop.index}}">
		<div class="img-block block-{{forloop.index}}">
			<img class="tool-img-{{forloop.index}} tool-img" src="assets/images/tool-images/tool-img-{{forloop.index|plus:3}}.png" alt="">
			<span class="img-caption">{{item}}</span>
		</div>
	</div>
	{% endfor %}
	<!-- <a href="/tool-2" class="tool-button">Try the tool</a> -->
</div>

