<em><strong>Demo:</strong></em> <a href="http://onepageknockout.raydeveloperonline.com/" rel="noopener" target="_blank">Knockout.js - One-Page Application Demo</a>
<em><strong>Source Code:</strong></em> <a href="https://github.com/raytnham/KnockoutJS-OnePageApplication" rel="noopener" target="_blank">GitHub - Knockout.js - One-Page Application Demo</a>

This article will show step-by-step on how to implement a simple Sing-page CRUD (Create-Read-Update-Delete). In this web page, after the page is loaded, all user interactions are handled in JavaScript by using Knockout.js library.
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


<h2>PAGE LAYOUT</h2>
<div class="highlight"><pre><span></span><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;jumbotron&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">h1</span><span class="p">&gt;</span>One-Page Application Demo (Knockout.js)<span class="p">&lt;/</span><span class="nt">h1</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>
    <span class="c">&lt;!-- Button to add new product item --&gt;</span>
    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn-create btn btn-primary&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: addProduct&quot;</span><span class="p">&gt;</span>Add Product<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>

<span class="c">&lt;!-- Start: List of product items --&gt;</span>
<span class="p">&lt;</span><span class="nt">table</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;table table-bordered table-hover&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">thead</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">tr</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;col&quot;</span><span class="p">&gt;</span>
                ID
            <span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;col&quot;</span><span class="p">&gt;</span>
                Name
            <span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;col&quot;</span><span class="p">&gt;</span>
                Price ($AUD)
            <span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;col&quot;</span><span class="p">&gt;</span>
                Company
            <span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">th</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;col&quot;</span><span class="p">&gt;</span>Actions<span class="p">&lt;/</span><span class="nt">th</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">thead</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">tbody</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;foreach: products&quot;</span><span class="p">&gt;</span>
        <span class="p">&lt;</span><span class="nt">tr</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;visible: isActive&quot;</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">td</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: ID&quot;</span> <span class="na">scope</span><span class="o">=</span><span class="s">&quot;row&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">td</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productName&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">td</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productPrice&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">td</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: companyName&quot;</span><span class="p">&gt;&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">td</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn-details btn btn-primary&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: $parent.viewProduct&quot;</span><span class="p">&gt;</span>Details<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn-edit btn btn-success&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: $parent.editProduct&quot;</span><span class="p">&gt;</span>Edit<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn-delete btn btn-danger&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: $parent.deleteProduct&quot;</span><span class="p">&gt;</span>Delete<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">td</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">tr</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">tbody</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">table</span><span class="p">&gt;</span>
<span class="c">&lt;!-- End: List of product items --&gt;</span>
</pre></div>


This is a typical layout for an index page. In the code snippet above, beside some HTML codes and bootstrap classes, the data-bind attribute is specific to <strong>Knockout.js</strong> library. That attribute provides a two-way binding between HTML DOM elements and the ViewModel in JavaScript. Thus, any changes in the ViewModel will be synchronized with the DOM elements and vice versa. For example, the table rows are bound  to the array named <strong>products</strong> via <em>"data-bind="foreach: products"</em>. Therefore, whenever the data in the array <strong>products</strong> is changed, the HTML table would be updated accordingly.

<h2>BOOTSTRAP MODALS FOR CRUD OPERATIONS</h2>
In this application, all CRUD operations will be performed in Bootstrap Modal. To do this, we need to include the bootstrap modals in the index page and display them whenever the user triggers the action.
<strong>Modal for "Add Product" action</strong>
<div class="highlight"><pre><span></span><span class="c">&lt;!-- Start: Modal for ADD operation --&gt;</span>
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;add-product-modal&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal fade&quot;</span> <span class="na">role</span><span class="o">=</span><span class="s">&quot;dialog&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-dialog&quot;</span><span class="p">&gt;</span>
        <span class="c">&lt;!-- Modal content--&gt;</span>
        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-content&quot;</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-body&quot;</span><span class="p">&gt;</span>
                <span class="c">&lt;!-- Modal content goes here --&gt;</span>
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-horizontal&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;with: newProduct&quot;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">h4</span><span class="p">&gt;</span>Add Product<span class="p">&lt;/</span><span class="nt">h4</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">hr</span> <span class="p">/&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;name-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Name<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;name-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: productName&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Price ($AUD)<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: productPrice&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Comapny<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;company-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: companyName&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-footer&quot;</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-primary&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: addConfirmed&quot;</span><span class="p">&gt;</span>Save<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-danger&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span><span class="p">&gt;</span>Close<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="c">&lt;!-- End: Modal for ADD operation --&gt;</span>
</pre></div>
<strong>Modal for "View Product Detail" action</strong>
<div class="highlight"><pre><span></span><span class="c">&lt;!-- Start: Modal for VIEW operation --&gt;</span>
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;view-product-modal&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal fade&quot;</span> <span class="na">role</span><span class="o">=</span><span class="s">&quot;dialog&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-dialog&quot;</span><span class="p">&gt;</span>
        <span class="c">&lt;!-- Modal content--&gt;</span>
        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-content&quot;</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-body&quot;</span><span class="p">&gt;</span>
                <span class="c">&lt;!-- Modal content goes here --&gt;</span>
                <span class="p">&lt;</span><span class="nt">h2</span><span class="p">&gt;</span>Details<span class="p">&lt;/</span><span class="nt">h2</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-horizontal&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;with: selectedProduct&quot;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">h4</span><span class="p">&gt;</span>Product<span class="p">&lt;/</span><span class="nt">h4</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">hr</span> <span class="p">/&gt;</span>
                    <span class="p">&lt;</span><span class="nt">dl</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;dl-horizontal&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>ID<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: ID&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Name<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productName&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Price ($AUD)<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productPrice&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Company<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: companyName&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Added Date<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: addedDate&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">dl</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-footer&quot;</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-danger&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span><span class="p">&gt;</span>Close<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="c">&lt;!-- End: Modal for VIEW operation --&gt;</span>
</pre></div>
<strong>Modal for "Edit Product Detail" action</strong>
<div class="highlight"><pre><span></span><span class="c">&lt;!-- Start: Modal for EDIT operation --&gt;</span>
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;edit-product-modal&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal fade&quot;</span> <span class="na">role</span><span class="o">=</span><span class="s">&quot;dialog&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-dialog&quot;</span><span class="p">&gt;</span>
        <span class="c">&lt;!-- Modal content--&gt;</span>
        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-content&quot;</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-body&quot;</span><span class="p">&gt;</span>
                <span class="c">&lt;!-- Modal content goes here --&gt;</span>
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-horizontal&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;with: newProduct&quot;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">h4</span><span class="p">&gt;</span>Edit Product<span class="p">&lt;/</span><span class="nt">h4</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">hr</span> <span class="p">/&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;name-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Name<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;name-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: productName&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Price ($AUD)<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: productPrice&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&quot;price-input&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4 col-form-label&quot;</span><span class="p">&gt;</span>Comapny<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">input</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-control&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;company-input&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: companyName&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-footer&quot;</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-primary&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: editConfirmed&quot;</span><span class="p">&gt;</span>Save<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-danger&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span><span class="p">&gt;</span>Close<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="c">&lt;!-- End: Modal for EDIT operation --&gt;</span>
</pre></div>
<strong>Modal for "Delete Product" action</strong>
<div class="highlight"><pre><span></span><span class="c">&lt;!-- Start Modal for DELETE operation --&gt;</span>
<span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;delete-product-modal&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal fade&quot;</span> <span class="na">role</span><span class="o">=</span><span class="s">&quot;dialog&quot;</span><span class="p">&gt;</span>
    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-dialog&quot;</span><span class="p">&gt;</span>
        <span class="c">&lt;!-- Modal content--&gt;</span>
        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-content&quot;</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-body&quot;</span><span class="p">&gt;</span>
                <span class="c">&lt;!-- Modal content goes here --&gt;</span>
                <span class="p">&lt;</span><span class="nt">h2</span><span class="p">&gt;</span>Delete<span class="p">&lt;/</span><span class="nt">h2</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">h3</span><span class="p">&gt;</span>Are you sure you want to delete this?<span class="p">&lt;/</span><span class="nt">h3</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">div</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;delete-product&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;with: selectedProduct&quot;</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">h4</span><span class="p">&gt;</span>Product<span class="p">&lt;/</span><span class="nt">h4</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">hr</span> <span class="p">/&gt;</span>
                    <span class="p">&lt;</span><span class="nt">dl</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;dl-horizontal&quot;</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>ID<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: ID&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Name<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productName&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Price ($AUD)<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: productPrice&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Company<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: companyName&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;form-group row&quot;</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-4&quot;</span><span class="p">&gt;</span>Added Date<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
                            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;col-8&quot;</span><span class="p">&gt;</span>
                                <span class="p">&lt;</span><span class="nt">p</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;text: addedDate&quot;</span> <span class="p">/&gt;</span>
                            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
                    <span class="p">&lt;/</span><span class="nt">dl</span><span class="p">&gt;</span>
                    <span class="p">&lt;</span><span class="nt">input</span> <span class="na">hidden</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;value: ID&quot;</span> <span class="na">id</span><span class="o">=</span><span class="s">&quot;ID&quot;</span> <span class="na">name</span><span class="o">=</span><span class="s">&quot;ID&quot;</span> <span class="p">/&gt;</span>
                <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
            <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;modal-footer&quot;</span><span class="p">&gt;</span>
                <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">value</span><span class="o">=</span><span class="s">&quot;Delete&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-default&quot;</span> <span class="na">data-bind</span><span class="o">=</span><span class="s">&quot;click: deleteConfirmed&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span> <span class="p">/&gt;</span>
                <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&quot;button&quot;</span> <span class="na">class</span><span class="o">=</span><span class="s">&quot;btn btn-danger&quot;</span> <span class="na">data-dismiss</span><span class="o">=</span><span class="s">&quot;modal&quot;</span><span class="p">&gt;</span>Close<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
            <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
        <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
<span class="c">&lt;!-- End: Modal for DELETE operation --&gt;</span>
</pre></div>

This is pretty much everything we need for the HTML part. Now a JavaScript ViewModel needs to be designed to take care of user interactions.

<h2>IMPLEMENTING A KNOCKOUTJS VIEWMODEL</h2>
The snippet below includes all the codes required for a ViewModel to function. Note that a typical Knockoutjs ViewModel is coded in the form of JavaScript <strong>function</strong>.
<div class="highlight"><pre><span></span><span class="cm">/* A function to get current date in dd/mm/yyyy format.</span>
<span class="cm"> * params: none. return: string.</span>
<span class="cm"> */</span>
<span class="kd">function</span> <span class="nx">getCurrentDate</span><span class="p">()</span> <span class="p">{</span>
    <span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span>
    <span class="c1">//convert month to 2 digits</span>
    <span class="kd">var</span> <span class="nx">twoDigitMonth</span> <span class="o">=</span> <span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">().</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">:</span> <span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
    <span class="kd">var</span> <span class="nx">currentDate</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getDate</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">twoDigitMonth</span> <span class="o">+</span> <span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">();</span>
    <span class="k">return</span> <span class="nx">currentDate</span><span class="p">;</span>
<span class="p">}</span>

<span class="cm">/* the Model class for Product item.</span>
<span class="cm"> * param: data (JSON or JS object format)</span>
<span class="cm"> * return: an instance of Product model.</span>
<span class="cm"> */</span>
<span class="kd">function</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
    <span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">ID</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">ID</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">productName</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">productName</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">productPrice</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">productPrice</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">companyName</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">companyName</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">())</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">addedDate</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">addedDate</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">isActive</span> <span class="o">=</span> <span class="p">(</span><span class="nx">data</span> <span class="o">?</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">isActive</span><span class="p">)</span> <span class="o">:</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">());</span>
<span class="p">}</span>

<span class="c1">// The page ViewModel definition.</span>
<span class="kd">function</span> <span class="nx">PageViewModel</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
    <span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span>
    <span class="c1">// An array to store a list of the product items.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">products</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observableArray</span><span class="p">();</span>
    <span class="c1">// Inject existing data in the json file into the productList.</span>
    <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">data</span><span class="p">[</span><span class="nx">key</span><span class="p">])));</span>
    <span class="p">}</span>
    <span class="c1">// Some placeholders to stores data as users interact with the page.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProduct</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">();</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">newProduct</span> <span class="o">=</span> <span class="nx">ko</span><span class="p">.</span><span class="nx">observable</span><span class="p">();</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProductPointer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span>

    <span class="c1">// Function to add new product item into the list of product.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">addProduct</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
        <span class="kd">var</span> <span class="nx">product</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Product</span><span class="p">();</span>
        <span class="nx">product</span><span class="p">.</span><span class="nx">ID</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">().</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span>
        <span class="nx">product</span><span class="p">.</span><span class="nx">addedDate</span><span class="p">(</span><span class="nx">getCurrentDate</span><span class="p">());</span>
        <span class="nx">product</span><span class="p">.</span><span class="nx">isActive</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">newProduct</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">product</span><span class="p">));</span>
        <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#add-product-modal&#39;</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">addConfirmed</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">newProduct</span><span class="p">)));</span>
    <span class="p">}</span>
    <span class="c1">// Function to edit a product item.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">viewProduct</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProduct</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span>
        <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#view-product-modal&#39;</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span>
    <span class="p">}</span>

    <span class="nx">self</span><span class="p">.</span><span class="nx">editProduct</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProductPointer</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">newProduct</span><span class="p">(</span><span class="k">new</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">item</span><span class="p">)));</span>
        <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#edit-product-modal&#39;</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">editConfirmed</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">selectedProductPointer</span><span class="p">,</span>
            <span class="k">new</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">newProduct</span><span class="p">)));</span>
    <span class="p">}</span>
    <span class="c1">// Function to delete a product item.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">deleteProduct</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProduct</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">selectedProductPointer</span> <span class="o">=</span> <span class="nx">item</span><span class="p">;</span>
        <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;#delete-product-modal&#39;</span><span class="p">).</span><span class="nx">modal</span><span class="p">(</span><span class="s1">&#39;show&#39;</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">deleteConfirmed</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
        <span class="kd">var</span> <span class="nx">product</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Product</span><span class="p">(</span><span class="nx">ko</span><span class="p">.</span><span class="nx">toJS</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">selectedProduct</span><span class="p">));</span>
        <span class="nx">product</span><span class="p">.</span><span class="nx">isActive</span><span class="p">(</span><span class="kc">false</span><span class="p">);</span>
        <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">selectedProductPointer</span><span class="p">,</span> <span class="nx">product</span><span class="p">);</span>
    <span class="p">}</span>
    <span class="c1">// Function to recover all deleted items.</span>
    <span class="nx">self</span><span class="p">.</span><span class="nx">recoverDeletedItems</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>
        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">().</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>
            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">()[</span><span class="nx">i</span><span class="p">].</span><span class="nx">isActive</span><span class="p">())</span> <span class="p">{</span>
                <span class="nx">self</span><span class="p">.</span><span class="nx">products</span><span class="p">()[</span><span class="nx">i</span><span class="p">].</span><span class="nx">isActive</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
            <span class="p">}</span>
        <span class="p">}</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre></div>

