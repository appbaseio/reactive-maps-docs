webpackJsonp([0xb6e97fe17b44],{416:function(n,s){n.exports={data:{markdownRemark:{html:'<p>We have built this library keeping you, the developer, in mind. If you’re here, it is obvious that you want to create a custom component that is reactive in nature. Perhaps, you already have a component in your design kit and want it to work seamlessly with Reactivesearch.</p>\n<p>With <code>ReactiveComponent</code>, you can convert any Vue Component into a Reactivesearch component i.e. your vue component will be able to talk to other Reactivesearch components and connect with your elasticsearch cluster seamlessly.</p>\n<blockquote>\n<p>How does this work?</p>\n<p><code>ReactiveComponent</code> is a wrapper component that allows you to connect custom component(s) (passed as children) with the Vue ecosystem.</p>\n</blockquote>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>For example, let’s suppose that we are building an e-commerce store where we have a react component called <code>ColorPicker</code> which renders the <code>colors</code> passed to it as tiles, allowing us to filter the products by their colors.</p>\n<p><img src="https://i.imgur.com/wuKhCTT.png" alt="ColorPicker"></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>color<span class="token operator">-</span>picker\n<span class="gatsby-highlight-code-line">    <span class="token punctuation">:</span>colors<span class="token operator">=</span><span class="token string">"[\'#000\', \'#666\', \'#fff\']"</span>\n</span>    @change<span class="token operator">=</span><span class="token string">"handleColorChange"</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Now, let’s assume that we have all these hex-codes stored as <code>keywords</code> in an Elasticsearch index. To display each unique color tile, we can run a <code>terms</code> aggregations query. The <code>defaultQuery</code> prop of ReactiveComponent allows us to do this and pass the results to a child component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>reactive<span class="token operator">-</span>component\n    componentId<span class="token operator">=</span><span class="token string">"myColorPicker"</span>   <span class="token comment">// a unique id we will refer to later</span>\n    <span class="token punctuation">:</span>defaultQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`() => ({\n        aggs: {\n            color: {\n                terms: {\n                    field: \'color\'\n                }\n            }\n        }\n    })`</span></span>\n<span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ aggregations, hits, setQuery }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>color-picker-wrapper</span> <span class="token attr-name">:aggregations</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aggregations<span class="token punctuation">"</span></span> <span class="token attr-name">:hits</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hits<span class="token punctuation">"</span></span> <span class="token attr-name">:setQuery</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>setQuery<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reactive-component</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The above snippet runs the <code>defaultQuery</code> passed to the ReactiveComponent when the component gets mounted and consequently pass the query results to the <code>ColorPickerWraper</code> component (i.e. child component of ReactiveComponent) as the following two props: <code>hits</code> and <code>aggregations</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>colors<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>color<span class="token operator">-</span>picker\n            colors<span class="token operator">=</span><span class="token string">"colors"</span>\n            @change<span class="token operator">=</span><span class="token template-string"><span class="token string">`() => {\n                // handles color change\n                // we will define this in the next step\n            }`</span></span>\n        <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        aggregations<span class="token punctuation">:</span> Object<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        colors<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>\n                <span class="token comment">// checking for when component gets the aggregation results</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations\n                <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors\n                <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>buckets<span class="token punctuation">.</span>length\n            <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                colors <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>color <span class="token operator">=></span> color<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> colors<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Up until this point, we have figured out how to display the colored tiles by running an Elasticsearch query and passing the results to our <code>ColorPickerWrapper</code> component.</p>\n<p>But we also need to be able to filter the products by a color tile when selected by the end-user. This is where <code>setQuery()</code> prop comes in handy. It takes an object param of shape:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    query<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>where,</p>\n<ul>\n<li><strong>query</strong> - is the query of the component,</li>\n<li><strong>value</strong> - can be an array, string or number (This will be shown in selected filters and URLParams if active. In our case, this is the hex-code of the selected color tile)</li>\n</ul>\n<p>In our current example, we would simply have to call <code>this.$props.setQuery()</code> with the updated query and value of the component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>colors<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>color<span class="token operator">-</span>picker\n            colors<span class="token operator">=</span><span class="token string">"colors"</span>\n            @change<span class="token operator">=</span><span class="token string">"onChange"</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    props<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        aggregations<span class="token punctuation">:</span> Object<span class="token punctuation">,</span>\n        setQuery<span class="token punctuation">:</span> Function<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token function">onChange</span><span class="token punctuation">(</span>newColor<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// handles color change</span>\n            <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token punctuation">{</span>\n                query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    term<span class="token punctuation">:</span> <span class="token punctuation">{</span> color<span class="token punctuation">:</span> newColor <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span><span class="token function">setQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                query<span class="token punctuation">,</span>\n                value<span class="token punctuation">:</span> newColor\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        colors<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>\n                <span class="token comment">// checking for when component gets the aggregation results</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations\n                <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors\n                <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>buckets<span class="token punctuation">.</span>length\n            <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                colors <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>color <span class="token operator">=></span> color<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> colors<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<h4 id="scope-data-object"><a href="#scope-data-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Scope Data Object</h4>\n<ul>\n<li><strong>hits</strong> <code>Array</code><br>\n<code>hits</code> prop is an array of results from the Elasticsearch query of the component.</li>\n<li><strong>aggregations</strong> <code>Object</code><br>\n<code>aggregations</code> prop contains the results from <code>aggs</code> Elasticsearch query of the component.</li>\n<li>\n<p><strong>setQuery</strong> <code>function</code><br>\n<code>setQuery</code> function sets the query of the component. It takes an object param of shape:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    query<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// query of the component</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>  <span class="token comment">// value of the component</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li><strong>selectedValue</strong> <code>any</code><br>\n<code>selectedValue</code> contains the current value of the component (which can be set via <code>setQuery()</code> function). This is used for URLParams and SelectedFilters.</li>\n</ul>\n<h4 id="reactivecomponent"><a href="#reactivecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveComponent</h4>\n<ul>\n<li>\n<p><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</p>\n</li>\n<li>\n<p><strong>defaultQuery</strong> <code>Function</code><br>\n<strong>returns</strong> the default query to be applied to the component, as defined in Elasticsearch Query DSL.</p>\n</li>\n<li>\n<p><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</p>\n</li>\n<li>\n<p><strong>react</strong> <code>Object</code>\n<code>react</code> prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. <a href="/reactive-manual/map-components/reactivemap.html"><code>ReactiveMap</code></a>, <a href="/reactive-manual/basic-components/reactivelist.html"><code>ReactiveList</code></a>.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code></p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</p>\n</li>\n</ul>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li><strong>queryChange</strong>\nis a event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li><strong>allData</strong><br>\nevent which provides <code>hits</code> and <code>aggregations</code> as an object properties.</li>\n</ul>',frontmatter:{title:"Reactive Component",next:"advanced/writingdata.html",prev:"advanced/react.html",nextTitle:"Writing Data",prevTitle:"React Prop"},fields:{path:"docs/advanced/ReactiveComponent.md",slug:"advanced/reactivecomponent.html"}}},pathContext:{slug:"advanced/reactivecomponent.html"}}}});
//# sourceMappingURL=path---advanced-reactivecomponent-html-01216569da1b83064772.js.map