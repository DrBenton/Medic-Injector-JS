Ext.data.JsonP.sync_Injector({"tagname":"class","name":"sync.Injector","autodetected":{},"files":[{"filename":"medic-injector.sync.js","href":"medic-injector.sync.html#sync-Injector"}],"members":[{"name":"instancePostInjectionsCallbackName","tagname":"property","owner":"sync.Injector","id":"property-instancePostInjectionsCallbackName","meta":{}},{"name":"constructor","tagname":"method","owner":"sync.Injector","id":"method-constructor","meta":{}},{"name":"addMapping","tagname":"method","owner":"sync.Injector","id":"method-addMapping","meta":{}},{"name":"bind","tagname":"method","owner":"sync.Injector","id":"method-bind","meta":{"private":true}},{"name":"cancelInjectionsInto","tagname":"method","owner":"sync.Injector","id":"method-cancelInjectionsInto","meta":{}},{"name":"createInjectedInstance","tagname":"method","owner":"sync.Injector","id":"method-createInjectedInstance","meta":{}},{"name":"getArgumentNames","tagname":"method","owner":"sync.Injector","id":"method-getArgumentNames","meta":{"private":true}},{"name":"getMapping","tagname":"method","owner":"sync.Injector","id":"method-getMapping","meta":{}},{"name":"hasMapping","tagname":"method","owner":"sync.Injector","id":"method-hasMapping","meta":{}},{"name":"injectInto","tagname":"method","owner":"sync.Injector","id":"method-injectInto","meta":{}},{"name":"parseStr","tagname":"method","owner":"sync.Injector","id":"method-parseStr","meta":{}},{"name":"removeMapping","tagname":"method","owner":"sync.Injector","id":"method-removeMapping","meta":{"chainable":true}},{"name":"resolveInjections","tagname":"method","owner":"sync.Injector","id":"method-resolveInjections","meta":{}},{"name":"trigger","tagname":"method","owner":"sync.Injector","id":"method-trigger","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-sync.Injector","short_doc":"Creates a new \"synchronous operations only\" Injector instance. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/medic-injector.sync.html#sync-Injector' target='_blank'>medic-injector.sync.js</a></div></pre><div class='doc-contents'><p>Creates a new \"synchronous operations only\" Injector instance.</p>\n\n<p>Access this class with\n<code>var Injector = require('medic-injector').InjectorSync;</code></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-instancePostInjectionsCallbackName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-property-instancePostInjectionsCallbackName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-property-instancePostInjectionsCallbackName' class='name expandable'>instancePostInjectionsCallbackName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the function to trigger in a custom JS type instance after the resolution of all its Injections Points. ...</div><div class='long'><p>The name of the function to trigger in a custom JS type instance after the resolution of all its Injections Points.</p>\n<p>Defaults to: <code>'postInjections'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/sync.Injector-method-constructor' class='name expandable'>sync.Injector</a>( <span class='pre'></span> ) : <a href=\"#!/api/sync.Injector\" rel=\"sync.Injector\" class=\"docClass\">sync.Injector</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sync.Injector\" rel=\"sync.Injector\" class=\"docClass\">sync.Injector</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-addMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-addMapping' class='name expandable'>addMapping</a>( <span class='pre'>injectionName</span> ) : <a href=\"#!/api/sync.InjectionMapping\" rel=\"sync.InjectionMapping\" class=\"docClass\">sync.InjectionMapping</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a new InjectionMapping to the Injector. ...</div><div class='long'><p>Adds a new InjectionMapping to the Injector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>injectionName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sync.InjectionMapping\" rel=\"sync.InjectionMapping\" class=\"docClass\">sync.InjectionMapping</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-bind' class='name expandable'>bind</a>( <span class='pre'>func, context</span> ) : Function<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cancelInjectionsInto' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-cancelInjectionsInto' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-cancelInjectionsInto' class='name expandable'>cancelInjectionsInto</a>( <span class='pre'>jsTypeInstance</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the value of all public properties of the target JS object whose name is an injection mapping to \"null\". ...</div><div class='long'><p>Set the value of all public properties of the target JS object whose name is an injection mapping to \"null\".\nThis lets you cancel the effect of <a href=\"#!/api/sync.Injector-method-injectInto\" rel=\"sync.Injector-method-injectInto\" class=\"docClass\">injectInto</a> for clean garbage collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>jsTypeInstance</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createInjectedInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-createInjectedInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-createInjectedInstance' class='name expandable'>createInjectedInstance</a>( <span class='pre'>jsType, [proceedToInjectionsInPostInjectionsMethodToo]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>jsType</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>proceedToInjectionsInPostInjectionsMethodToo</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>a new instance of the given type, with its Injection Points resolved and its \"post injections\" callback triggered</p>\n</div></li></ul></div></div></div><div id='method-getArgumentNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-getArgumentNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-getArgumentNames' class='name expandable'>getArgumentNames</a>( <span class='pre'>fun</span> ) : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>From Prototype library\n@see https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/function.js\n\nProt...</div><div class='long'><p>From Prototype library\n@see https://github.com/sstephenson/prototype/blob/master/src/prototype/lang/function.js</p>\n\n<p>Prototype JavaScript framework\n(c) 2005-2010 Sam Stephenson</p>\n\n<p>Prototype is freely distributable under the terms of an MIT-style license.\nFor details, see the Prototype web site: http://www.prototypejs.org/</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fun</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-getMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-getMapping' class='name expandable'>getMapping</a>( <span class='pre'>injectionName</span> ) : <a href=\"#!/api/sync.InjectionMapping\" rel=\"sync.InjectionMapping\" class=\"docClass\">sync.InjectionMapping</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>injectionName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sync.InjectionMapping\" rel=\"sync.InjectionMapping\" class=\"docClass\">sync.InjectionMapping</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-hasMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-hasMapping' class='name expandable'>hasMapping</a>( <span class='pre'>injectionName</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>injectionName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-injectInto' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-injectInto' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-injectInto' class='name expandable'>injectInto</a>( <span class='pre'>jsTypeInstance, [proceedToInjectionsInPostInjectionsMethodToo]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>jsTypeInstance</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>proceedToInjectionsInPostInjectionsMethodToo</span> : Boolean (optional)<div class='sub-desc'>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div><div id='method-parseStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-parseStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-parseStr' class='name expandable'>parseStr</a>( <span class='pre'>str</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Replaces all \"${injectionName}\" patterns in the given String with the values of the matching Injections Mappings. ...</div><div class='long'><p>Replaces all \"${injectionName}\" patterns in the given String with the values of the matching Injections Mappings.\nFor each <code>null</code> injection mapping value, an empty string is used instead of 'null'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeMapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-removeMapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-removeMapping' class='name expandable'>removeMapping</a>( <span class='pre'>injectionName</span> ) : <a href=\"#!/api/sync.Injector\" rel=\"sync.Injector\" class=\"docClass\">sync.Injector</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Removes an existing InjectionMapping. ...</div><div class='long'><p>Removes an existing InjectionMapping.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>injectionName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/sync.Injector\" rel=\"sync.Injector\" class=\"docClass\">sync.Injector</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>An Error is thrown if the target InjectionMapping has been sealed</p>\n</div></li></ul></div></div></div><div id='method-resolveInjections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-resolveInjections' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-resolveInjections' class='name expandable'>resolveInjections</a>( <span class='pre'>injectionsNamesArray</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>injectionsNamesArray</span> : Array<div class='sub-desc'><p>an Array of Strings</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>an Array of resolved Injections Mappings values</p>\n</div></li></ul></div></div></div><div id='method-trigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='sync.Injector'>sync.Injector</span><br/><a href='source/medic-injector.sync.html#sync-Injector-method-trigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/sync.Injector-method-trigger' class='name expandable'>trigger</a>( <span class='pre'>func, [context]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Triggers the target function with the supplied context. ...</div><div class='long'><p>Triggers the target function with the supplied context.\nThe function args are parsed, and for each of these args whose name equals a registered InjectionMapping name\nthe injection will be resolved and its value will fill the matching function arg value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'>\n<p>Defaults to: <code>null</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the function returned value</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});