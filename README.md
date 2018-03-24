# KnockoutJS-OnePageApplication
<em><strong>Demo:</strong></em> <a href="http://onepageknockout.raydeveloperonline.com/" rel="noopener" target="_blank">Knockout.js - One-Page Application Demo</a>
<em><strong>Source Code:</strong></em> <a href="https://github.com/raytnham/KnockoutJS-OnePageApplication" rel="noopener" target="_blank">GitHub - Knockout.js - One-Page Application Demo</a>
In this application, after the page is loaded, all user interactions are handled in JavaScript by using Knockout.js library.
<!--more-->

<h2>REQUIREMENTS</h2>
This lists the libraries and dependencies that are needed to build this page:
<ol>
	<li><strong>Knockoutjs:</strong> "a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model." - <a href="http://knockoutjs.com/downloads/index.html" rel="noopener" target="_blank">Download here</a> or use CDN: <em>"https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"</em></li>

<li><strong>JQuery:</strong> is a dependency of Bootstrap and is also a JavaScript library that provides AJAX functionalities to facilitate communication between client and server. - <a href="http://jquery.com/download/" rel="noopener" target="_blank">Download here</a> or use CDN: <em>"https://code.jquery.com/jquery-3.3.1.js"</em></li>

<li><strong>Bootstrap:</strong> an open-source tool-kit to develop responsive, mobile-friendly UI. - <a href="https://getbootstrap.com/docs/4.0/getting-started/download/" rel="noopener" target="_blank">Download here</a> (CDN included). </li>

 <li><strong>A Sample JSON Response:</strong> As this example only focuses on how to use KnockoutJS to create the page, we will need a JSON response to simulate the data received from the server. Below is the sample data. </li>
</ol>

<h2>SAMPLE JSON DATA</h2>
<div class="highlight"><pre><span></span><span class="cm">/*</span>
<span class="cm">  File name: products.js</span>
<span class="cm">  Description: Inital sample data.</span>
<span class="cm">*/</span>
<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">{</span>
        <span class="s2">&quot;ID&quot;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="s2">&quot;productName&quot;</span><span class="o">:</span> <span class="s2">&quot;Teasdale&quot;</span><span class="p">,</span>
        <span class="s2">&quot;companyName&quot;</span><span class="o">:</span> <span class="s2">&quot;INCUBUS&quot;</span><span class="p">,</span>
        <span class="s2">&quot;productPrice&quot;</span><span class="o">:</span> <span class="s2">&quot;1,366.50&quot;</span><span class="p">,</span>
        <span class="s2">&quot;addedDate&quot;</span><span class="o">:</span> <span class="s2">&quot;23-08-2017&quot;</span><span class="p">,</span>
        <span class="s2">&quot;isActive&quot;</span><span class="o">:</span> <span class="kc">true</span>
    <span class="p">},</span>
    <span class="p">{</span>
        <span class="s2">&quot;ID&quot;</span><span class="o">:</span> <span class="mi">2</span><span class="p">,</span>
        <span class="s2">&quot;productName&quot;</span><span class="o">:</span> <span class="s2">&quot;Abiquiu&quot;</span><span class="p">,</span>
        <span class="s2">&quot;companyName&quot;</span><span class="o">:</span> <span class="s2">&quot;COMBOGEN&quot;</span><span class="p">,</span>
        <span class="s2">&quot;productPrice&quot;</span><span class="o">:</span> <span class="s2">&quot;3,485.81&quot;</span><span class="p">,</span>
        <span class="s2">&quot;addedDate&quot;</span><span class="o">:</span> <span class="s2">&quot;28-10-2014&quot;</span><span class="p">,</span>
        <span class="s2">&quot;isActive&quot;</span><span class="o">:</span> <span class="kc">true</span>
    <span class="p">},</span>
    <span class="p">{</span>
        <span class="s2">&quot;ID&quot;</span><span class="o">:</span> <span class="mi">3</span><span class="p">,</span>
        <span class="s2">&quot;productName&quot;</span><span class="o">:</span> <span class="s2">&quot;Sunriver&quot;</span><span class="p">,</span>
        <span class="s2">&quot;companyName&quot;</span><span class="o">:</span> <span class="s2">&quot;ZAGGLES&quot;</span><span class="p">,</span>
        <span class="s2">&quot;productPrice&quot;</span><span class="o">:</span> <span class="s2">&quot;2,568.65&quot;</span><span class="p">,</span>
        <span class="s2">&quot;addedDate&quot;</span><span class="o">:</span> <span class="s2">&quot;05-04-2015&quot;</span><span class="p">,</span>
        <span class="s2">&quot;isActive&quot;</span><span class="o">:</span> <span class="kc">true</span>
    <span class="p">},</span>
    <span class="p">{</span>
        <span class="s2">&quot;ID&quot;</span><span class="o">:</span> <span class="mi">4</span><span class="p">,</span>
        <span class="s2">&quot;productName&quot;</span><span class="o">:</span> <span class="s2">&quot;Tuttle&quot;</span><span class="p">,</span>
        <span class="s2">&quot;companyName&quot;</span><span class="o">:</span> <span class="s2">&quot;ISONUS&quot;</span><span class="p">,</span>
        <span class="s2">&quot;productPrice&quot;</span><span class="o">:</span> <span class="s2">&quot;400.10&quot;</span><span class="p">,</span>
        <span class="s2">&quot;addedDate&quot;</span><span class="o">:</span> <span class="s2">&quot;17-12-2017&quot;</span><span class="p">,</span>
        <span class="s2">&quot;isActive&quot;</span><span class="o">:</span> <span class="kc">true</span>
    <span class="p">}</span>
<span class="p">]</span>
</pre></div>
