Ext.data.JsonP.KISSY_Component_Extension_Box({"tagname":"class","name":"KISSY.Component.Extension.Box","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-KISSY.Component.Extension.Box","members":{"cfg":[{"name":"content","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-content"},{"name":"elAttrs","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-elAttrs"},{"name":"elBefore","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-elBefore"},{"name":"elCls","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-elCls"},{"name":"elStyle","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-elStyle"},{"name":"height","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-height"},{"name":"render","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-render"},{"name":"srcNode","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-srcNode"},{"name":"visible","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-visible"},{"name":"visibleMode","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-visibleMode"},{"name":"width","tagname":"cfg","owner":"KISSY.Component.Extension.Box","meta":{},"id":"cfg-width"}],"property":[{"name":"content","tagname":"property","owner":"KISSY.Component.Extension.Box","meta":{},"id":"property-content"},{"name":"el","tagname":"property","owner":"KISSY.Component.Extension.Box","meta":{"readonly":true},"id":"property-el"},{"name":"height","tagname":"property","owner":"KISSY.Component.Extension.Box","meta":{},"id":"property-height"},{"name":"visible","tagname":"property","owner":"KISSY.Component.Extension.Box","meta":{},"id":"property-visible"},{"name":"width","tagname":"property","owner":"KISSY.Component.Extension.Box","meta":{},"id":"property-width"}],"method":[{"name":"hide","tagname":"method","owner":"KISSY.Component.Extension.Box","meta":{"chainable":true},"id":"method-hide"},{"name":"show","tagname":"method","owner":"KISSY.Component.Extension.Box","meta":{"chainable":true},"id":"method-show"}],"event":[{"name":"afterVisibleChange","tagname":"event","owner":"KISSY.Component.Extension.Box","meta":{},"id":"event-afterVisibleChange"},{"name":"beforeVisibleChange","tagname":"event","owner":"KISSY.Component.Extension.Box","meta":{},"id":"event-beforeVisibleChange"},{"name":"hide","tagname":"event","owner":"KISSY.Component.Extension.Box","meta":{},"id":"event-hide"},{"name":"show","tagname":"event","owner":"KISSY.Component.Extension.Box","meta":{},"id":"event-show"}],"css_var":[],"css_mixin":[]},"linenr":8,"files":[{"filename":"box.js","href":"box.html#KISSY-Component-Extension-Box"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["KISSY.Component.Controller"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/KISSY.Component.Controller' rel='KISSY.Component.Controller' class='docClass'>KISSY.Component.Controller</a></div><h4>Files</h4><div class='dependency'><a href='source/box.html#KISSY-Component-Extension-Box' target='_blank'>box.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Box extension class.Represent a dom element.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-content' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-content' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-content' class='name expandable'>content</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span></div><div class='description'><div class='short'>component's html content. ...</div><div class='long'><p>component's html content. Note: content and srcNode can not be set both!</p>\n</div></div></div><div id='cfg-elAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-elAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-elAttrs' class='name not-expandable'>elAttrs</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>name-value pair attribute of component's root element</p>\n</div><div class='long'><p>name-value pair attribute of component's root element</p>\n</div></div></div><div id='cfg-elBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-elBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-elBefore' class='name not-expandable'>elBefore</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span></div><div class='description'><div class='short'><p>archor element where component insert before</p>\n</div><div class='long'><p>archor element where component insert before</p>\n</div></div></div><div id='cfg-elCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-elCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-elCls' class='name not-expandable'>elCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>css class of component's root element</p>\n</div><div class='long'><p>css class of component's root element</p>\n</div></div></div><div id='cfg-elStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-elStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-elStyle' class='name not-expandable'>elStyle</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>name-value pair css style of component's root element</p>\n</div><div class='long'><p>name-value pair css style of component's root element</p>\n</div></div></div><div id='cfg-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-height' class='name not-expandable'>height</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>component's height</p>\n</div><div class='long'><p>component's height</p>\n</div></div></div><div id='cfg-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-render' class='name not-expandable'>render</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span></div><div class='description'><div class='short'><p>archor element where component append to</p>\n</div><div class='long'><p>archor element where component append to</p>\n</div></div></div><div id='cfg-srcNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-srcNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-srcNode' class='name expandable'>srcNode</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>kissy node or css selector to find the first match node\n\nparsed for configuration values,\npassed to component's HTML_...</div><div class='long'><p>kissy node or css selector to find the first match node</p>\n\n<p>parsed for configuration values,\npassed to component's HTML_PARSER definition</p>\n</div></div></div><div id='cfg-visible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-visible' class='name expandable'>visible</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>whether this component is visible after created. ...</div><div class='long'><p>whether this component is visible after created.</p>\n\n<p>will add css class {prefix}{component}-hidden\nor {prefix}{component}-shown to component's root el.</p>\n</div></div></div><div id='cfg-visibleMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-visibleMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-visibleMode' class='name not-expandable'>visibleMode</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>component's visibleMode,use css \"display\" or \"visibility\" to show this component</p>\n</div><div class='long'><p>component's visibleMode,use css \"display\" or \"visibility\" to show this component</p>\n</div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-cfg-width' class='name not-expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>component's width</p>\n</div><div class='long'><p>component's width</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-content' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-property-content' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-property-content' class='name expandable'>content</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span></div><div class='description'><div class='short'>component's html content. ...</div><div class='long'><p>component's html content. Note: content and srcNode can not be set both!</p>\n</div></div></div><div id='property-el' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-property-el' class='name not-expandable'>el</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>root element of current component</p>\n</div><div class='long'><p>root element of current component</p>\n</div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-property-height' class='name not-expandable'>height</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>component's height</p>\n</div><div class='long'><p>component's height</p>\n</div></div></div><div id='property-visible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-property-visible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-property-visible' class='name expandable'>visible</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>whether this component is visible. ...</div><div class='long'><p>whether this component is visible.</p>\n\n<p>will add css class {prefix}{component}-hidden\nor {prefix}{component}-shown to component's root el.</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-property-width' class='name not-expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>component's width</p>\n</div><div class='long'><p>component's width</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-hide' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.Component.Extension.Box\" rel=\"KISSY.Component.Extension.Box\" class=\"docClass\">KISSY.Component.Extension.Box</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>hide component ...</div><div class='long'><p>hide component</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Component.Extension.Box\" rel=\"KISSY.Component.Extension.Box\" class=\"docClass\">KISSY.Component.Extension.Box</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-method-show' class='name expandable'>show</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.Component.Extension.Box\" rel=\"KISSY.Component.Extension.Box\" class=\"docClass\">KISSY.Component.Extension.Box</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>show component ...</div><div class='long'><p>show component</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Component.Extension.Box\" rel=\"KISSY.Component.Extension.Box\" class=\"docClass\">KISSY.Component.Extension.Box</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-afterVisibleChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-event-afterVisibleChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-event-afterVisibleChange' class='name expandable'>afterVisibleChange</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>fired after visible is changed ...</div><div class='long'><p>fired after visible is changed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/KISSY.Event.CustomEventObject\" rel=\"KISSY.Event.CustomEventObject\" class=\"docClass\">KISSY.Event.CustomEventObject</a><div class='sub-desc'>\n<ul><li><span class='pre'>prevVal</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>current component 's previous visible value</p>\n</div></li><li><span class='pre'>prevVal</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>current component 's visible value</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-beforeVisibleChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-event-beforeVisibleChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-event-beforeVisibleChange' class='name expandable'>beforeVisibleChange</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>fired before visible is changed,\ncan return false to prevent this change ...</div><div class='long'><p>fired before visible is changed,\ncan return false to prevent this change</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/KISSY.Event.CustomEventObject\" rel=\"KISSY.Event.CustomEventObject\" class=\"docClass\">KISSY.Event.CustomEventObject</a><div class='sub-desc'>\n<ul><li><span class='pre'>prevVal</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>current component 's visible value</p>\n</div></li><li><span class='pre'>prevVal</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>visible value to be changed</p>\n</div></li></ul></div></li></ul></div></div></div><div id='event-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-event-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-event-hide' class='name expandable'>hide</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>fired after current component hides ...</div><div class='long'><p>fired after current component hides</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/KISSY.Event.CustomEventObject\" rel=\"KISSY.Event.CustomEventObject\" class=\"docClass\">KISSY.Event.CustomEventObject</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Extension.Box'>KISSY.Component.Extension.Box</span><br/><a href='source/box.html#KISSY-Component-Extension-Box-event-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Extension.Box-event-show' class='name expandable'>show</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>fired after current component shows ...</div><div class='long'><p>fired after current component shows</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/KISSY.Event.CustomEventObject\" rel=\"KISSY.Event.CustomEventObject\" class=\"docClass\">KISSY.Event.CustomEventObject</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});