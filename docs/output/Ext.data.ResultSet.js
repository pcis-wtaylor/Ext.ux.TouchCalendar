Ext.data.JsonP.Ext_data_ResultSet({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Object","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"count"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"loaded"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"records"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"success"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"total"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"constructor"}],"property":[{"static":false,"required":null,"tagname":"property","owner":"Ext.data.ResultSet","protected":false,"deprecated":null,"name":"totalRecords"}]},"author":"Ed Spencer","protected":false,"linenr":9906,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.data.ResultSet","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><div class='doc-contents'><p>Simple wrapper class that represents a set of records returned by a Proxy.</p>\n\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-count' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-cfg-count' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-cfg-count' class='name expandable'>count</a><span> : Number</span></div><div class='description'><div class='short'>The number of records in this ResultSet. ...</div><div class='long'><p>The number of records in this ResultSet. Note that total may differ from this number</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-loaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-cfg-loaded' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-cfg-loaded' class='name expandable'>loaded</a><span> : Boolean</span></div><div class='description'><div class='short'>True if the records have already been loaded. ...</div><div class='long'><p>True if the records have already been loaded. This is only meaningful when dealing with\nSQL-backed proxies</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-records' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-cfg-records' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-cfg-records' class='name expandable'>records</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>The array of record instances. ...</div><div class='long'><p>The array of record instances. Required</p>\n</div></div></div><div id='cfg-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-cfg-success' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-cfg-success' class='name expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'>True if the ResultSet loaded successfully, false if any errors were encountered ...</div><div class='long'><p>True if the ResultSet loaded successfully, false if any errors were encountered</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-total' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-cfg-total' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-cfg-total' class='name expandable'>total</a><span> : Number</span></div><div class='description'><div class='short'>The total number of records reported by the data source. ...</div><div class='long'><p>The total number of records reported by the data source. This ResultSet may form a subset of\nthose records (see count)</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-totalRecords' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-property-totalRecords' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.ResultSet-property-totalRecords' class='name expandable'>totalRecords</a><span> : Mixed</span></div><div class='description'><div class='short'>DEPRECATED - will be removed in Ext JS 5.0. ...</div><div class='long'><p>DEPRECATED - will be removed in Ext JS 5.0. This is just a copy of this.total - use that instead</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.ResultSet' rel='Ext.data.ResultSet' class='definedIn docClass'>Ext.data.ResultSet</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-ResultSet-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.data.ResultSet-method-constructor' class='name expandable'>Ext.data.ResultSet</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Creates the new ResultSet ...</div><div class='long'><p>Creates the new ResultSet</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-data-ResultSet"});