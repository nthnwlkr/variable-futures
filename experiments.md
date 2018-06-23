---
layout: page
title: Experiments
permalink: /experiments/
group: "navigation"
body_classes: experiments-page
experiments: 
 - Bounce
 - Scroll It
 - Unz Unz Unz
 - Failure
 - Caterpillar
 - Stacking & Tracking
 - Shapeshifter
 - Morning Coffee

description: 'Initial experiments with the OpenType CSS spec.'
---
<div class="title-container">
	<h1 class="box-1">ex</h1>
	<h1 class="box-2">per</h1>
	<h1 class="box-3">iments</h1>
</div>
<div class="experiment-list-container">
	<h1 class="small-title white">Check them out:</h1>
	<ul class="experiment-list">
		{% for item in page.experiments %}
		<li class="experiment-item"><a href="/experiment-{{forloop.index}}" class="experiment-link">{{item}}</a></li>
		{% endfor %}
	</ul>
</div>
