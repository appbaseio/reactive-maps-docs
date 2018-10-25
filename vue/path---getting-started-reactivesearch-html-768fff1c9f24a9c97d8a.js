webpackJsonp([41984078544437],{423:function(n,a){n.exports={data:{markdownRemark:{html:'<h3 id="step-0-create-boilerplate-with-vue-cli"><a href="#step-0-create-boilerplate-with-vue-cli" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 0: Create Boilerplate with Vue Cli</h3>\n<p>We can either add ReactiveSearch to an existing app or create a boilerplate app with <a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create">Vue Cli</a>. For this quickstart guide, we will use the Vue Cli.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>vue create my-awesome-search <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> my-awesome-search\n</code></pre>\n      </div>\n<h3 id="step-1-install-reactivesearch"><a href="#step-1-install-reactivesearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Install ReactiveSearch</h3>\n<p>We will fetch and install <a href="https://www.npmjs.com/package/@appbaseio/reactivesearch-vue"><code>reactivesearch-vue</code></a> module using yarn or npm.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add @appbaseio/reactivesearch-vue\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @appbaseio/reactivesearch-vue\n</code></pre>\n      </div>\n<h4 id="use-reactivesearchs-components"><a href="#use-reactivesearchs-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use ReactiveSearch’s Components</h4>\n<h3 id="fully-import"><a href="#fully-import" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fully Import</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword">import</span> ReactiveSearch <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch-vue\'</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span>\nVue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ReactiveSearch<span class="token punctuation">)</span>\n\n<span class="token comment">/* eslint-disable no-new */</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> <span class="token string">\'&lt;App/>\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The above imports ReactiveSearch entirely.</p>\n<h3 id="only-import-the-components-you-need"><a href="#only-import-the-components-you-need" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Only import the components you need</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch-vue\'</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span>\n\nVue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>\n\nVue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>ReactiveBase<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ReactiveBase<span class="token punctuation">)</span>\n\n<span class="token comment">/* eslint-disable no-new */</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> <span class="token string">\'&lt;App/>\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<hr>\n<h3 id="step-2-adding-the-first-component"><a href="#step-2-adding-the-first-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Adding the first component</h3>\n<p>Lets add our first ReactiveSearch component: <a href="/reactive-manual/getting-started/reactivebase.html">ReactiveBase</a>, it is a backend connector where we can configure the Elasticsearch index / authorization setup.</p>\n<p>We will demonstrate creating an index using <a href="https://appbase.io">appbase.io</a> service, although you can use any Elasticsearch backend within ReactiveBase.</p>\n<p><img src="https://i.imgur.com/r6hWKAG.gif" alt="create an appbase.io app"></p>\n<p><strong>Caption:</strong> For the example that we will build, the app is called <strong>car-store</strong> and the associated read-only credentials are <strong>cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c</strong>. You can browse and clone the dataset into your own app from  <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJrAAAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsta-jK5IyCHPDQHd0vFqnW3IIPckWf81EYz6c9_C1aGQkSbGptS4zcGd_lZI2UVGi7gEHVqkGAZzrbpw4o5m3TwqV4NeFg28vpiRpym93H_qNV7y_gPH___dHIAA">here</a>.</p>\n<p>We will update our <code>src/App.js</code> file to add ReactiveBase component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">\'vue\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch-vue\'</span>\n\nVue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>\n\nVue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>ReactiveBase<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ReactiveBase<span class="token punctuation">)</span>\n\n<span class="token comment">/* eslint-disable no-new */</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span> ReactiveBase <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  template<span class="token punctuation">:</span> \n\t  <span class="token template-string"><span class="token string">`&lt;ReactiveBase \n\t\t\tapp="car-store" \n\t\t\tcredentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">\n\t\t\t// other components will go here.\n\t\t\t&lt;div>\n\t\t\t\tHello ReactiveSearch!\n\t\t\t&lt;/div>\n\t\t&lt;/ReactiveBase>`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>This is how the app should look after running the <code>yarn start</code> command.</p>\n<p><img src="https://i.imgur.com/M7AAhTh.png"></p>\n<hr>',frontmatter:{title:"ReactiveSearch Quickstart",next:"getting-started/data.html",prev:null,nextTitle:"Importing Data",prevTitle:null},fields:{path:"getting-started/reactivesearch.md",slug:"getting-started/reactivesearch.html"}}},pathContext:{slug:"getting-started/reactivesearch.html"}}}});
//# sourceMappingURL=path---getting-started-reactivesearch-html-768fff1c9f24a9c97d8a.js.map