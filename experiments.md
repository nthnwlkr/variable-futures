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
<div class="experiment-list-container">
	<ul class="experiment-list">
		{% for item in page.experiments %}
		<li class="experiment-item"><a href="/experiment-{{forloop.index}}" class="experiment-link">{{item}}</a></li>
		{% endfor %}
	</ul>
</div>
