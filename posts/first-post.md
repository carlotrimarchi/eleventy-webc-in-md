---
title: First post
---

<div style="border: 3px solid teal; padding: 10px; margin: 30px 0">
Demo embed in first-post.md: 

- like above, there are elements added more than once
- I guess that since we are inside of a markdown file, these elements are wrapped in a p tag
- in the resulting html, the div with class demo-embed appears more than once

{% renderTemplate "webc" %}
<demo-embed><my-counter></my-counter></demo-embed>
{% endrenderTemplate %}

</div>


<div style="border: 3px solid teal; padding: 10px; margin: 30px 0">

- Another demo, using first-demo component instead of my-counter
- also here there are duplicated tags and extra p tags added

{% renderTemplate "webc" %}
<demo-embed> <first-demo></first-demo> </demo-embed>
{% endrenderTemplate %}

</div>

<div style="border: 3px solid teal; padding: 10px; margin: 30px 0">

- same example as before, but this time I'm formatting the components on multiple lines
- even if I'm using first-demo only once, it appears multiple times

{% renderTemplate "webc" %}

<demo-embed> 
    <first-demo></first-demo>
</demo-embed>

{% endrenderTemplate %}

</div>