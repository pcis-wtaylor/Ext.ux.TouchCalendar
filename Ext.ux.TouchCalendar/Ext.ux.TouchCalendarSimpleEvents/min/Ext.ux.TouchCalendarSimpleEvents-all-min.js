Ext.define("Ext.ux.TouchCalendar",{extend:"Ext.carousel.Carousel",xtype:"calendar",enableSwipeNavigate:true,enableSimpleEvents:false,enableEventBars:false,viewConfig:{},defaultViewConfig:{viewMode:"MONTH",weekStart:1,bubbleEvents:["selectionchange"]},indicator:false,initialize:function(){this.viewConfig=Ext.applyIf(this.viewConfig||{},this.defaultViewConfig);this.viewConfig.currentDate=this.viewConfig.currentDate||this.viewConfig.value||new Date();this.viewMode=this.viewConfig.viewMode.toUpperCase();this.initViews();Ext.apply(this,{cls:"touch-calendar",activeItem:(this.enableSwipeNavigate?1:0),direction:"horizontal"});this.setIndicator(false);this.setActiveItem(1);this.on("selectionchange",this.onSelectionChange);this.on("activeitemchange",this.onActiveItemChange);if(this.enableSwipeNavigate){this.on(this.element,{drag:this.onDrag,dragThreshold:5,dragend:this.onDragEnd,direction:this.direction,scope:this});this.element.addCls(this.baseCls+"-"+this.direction)}},getViewConfig:function(b){var a=[];if(this.enableSimpleEvents){a.push(new Ext.ux.TouchCalendarSimpleEvents())}else{if(this.enableEventBars){a.push(new Ext.ux.TouchCalendarEvents())}}Ext.apply(this.viewConfig,{plugins:a,currentDate:b,onTableHeaderTap:Ext.bind(this.onTableHeaderTap,this)});return this.viewConfig},getViewDate:function(a,b){var d=(this.viewMode==="WEEK"?"DAY":this.viewMode.toUpperCase()),c=(this.viewMode==="WEEK"?(8*b):b);return Ext.Date.add(a,Ext.Date[d],c)},initViews:function(){var c=[];var f=Ext.Date.clone(this.viewConfig.currentDate),d=(this.enableSwipeNavigate?-1:0),a=(this.enableSwipeNavigate?1:0),b=[];var e=this.getViewDate(f,-1);c.push(new Ext.ux.TouchCalendarView(Ext.applyIf({currentDate:e},this.getViewConfig(e))));c.push(new Ext.ux.TouchCalendarView(this.getViewConfig(f)));e=this.getViewDate(f,1);c.push(new Ext.ux.TouchCalendarView(Ext.applyIf({currentDate:e},this.getViewConfig(e))));this.setItems(c);this.view=c[(this.enableSwipeNavigate?1:0)]},onTableHeaderTap:function(b,a){a=Ext.fly(a);if(a.hasCls(this.view.prevPeriodCls)||a.hasCls(this.view.nextPeriodCls)){this[(a.hasCls(this.view.prevPeriodCls)?"prev":"next")]()}},setMode:function(a){this.viewMode=a.toUpperCase();this.viewConfig.viewMode=this.viewMode;this.getItems().each(function(b,c){b.currentDate=this.getViewDate(Ext.Date.clone(this.view.currentDate),c-1);b.setViewMode(a,true);b.refresh()},this)},getValue:function(){var a=this.view.getSelectionModel().selected;return(a.getCount()>0)?a.first().get("date"):null},setValue:function(a){this.view.setValue(a)},onActiveItemChange:function(b,a,f){if(this.enableSwipeNavigate){var c=this.getItems();var e=c.indexOf(a),h=c.indexOf(f),g=(e>h)?"forward":"backward";this.counter=(this.counter||0)+1;if(g==="forward"){this.remove(c.get(0));var d=new Ext.ux.TouchCalendarView(this.getViewConfig(Ext.Date.add(a.currentDate,Ext.Date[this.viewMode],1)));this.add(d)}else{this.remove(c.get(c.getCount()-1));var d=new Ext.ux.TouchCalendarView(this.getViewConfig(Ext.Date.add(a.currentDate,Ext.Date[this.viewMode],-1)));this.insert(0,d)}this.view=a}}});Ext.define("Ext.ux.TouchCalendarSimpleEvents",{extend:"Ext.mixin.Observable",startEventField:"start",endEventField:"end",multiEventDots:true,wrapperCls:"simple-event-wrapper",eventDotCls:"simple-event",dotWidth:6,eventTpl:['<span class="{wrapperCls}">','<tpl for="events">','<span class="{[parent.eventDotCls]}"></span>',"</tpl>","</span>"].join(""),filterFn:function(c,e,b){if(arguments.length===2){b=e}var a=Ext.Date.clearTime(c.get(this.startEventField),true).getTime(),d=Ext.Date.clearTime(c.get(this.endEventField),true).getTime(),b=Ext.Date.clearTime(b,true).getTime();return(a<=b)&&(d>=b)},init:function(a){this.calendar=a;this.calendar.simpleEventsPlugin=this;this.wrapperCls=this.wrapperCls+(this.multiEventDots?"-multi":"");this.eventDotCls=this.eventDotCls+(this.multiEventDots?"-multi":"");this.calendar.showEvents=this.showEvents;this.calendar.hideEvents=this.hideEvents;this.calendar.removeEvents=this.removeEvents;this.calendar.refresh=Ext.Function.createSequence(this.calendar.refresh,this.refreshEvents,this);this.calendar.syncHeight=Ext.Function.createSequence(this.calendar.syncHeight,this.refreshEvents,this)},refreshEvents:function(){if(!this.disabled){var a=this.calendar.getStore();if(a){this.removeEvents();a.each(function(d){var f=d.get("date");var c=this.calendar.getDateCell(f);var e=this.calendar.eventStore;if(c){e.clearFilter();var b=e[this.multiEventDots?"filterBy":"findBy"](Ext.bind(this.filterFn,this,[f],true));var i=e.getRange().length;if((!this.multiEventDots&&b>-1)||(this.multiEventDots&&i>0)){var h=Math.min((c.getWidth()/this.dotWidth),i);var g=new Ext.XTemplate(this.eventTpl).append(c,{events:(this.multiEventDots?e.getRange().slice(0,h):["event"]),wrapperCls:this.wrapperCls,eventDotCls:this.eventDotCls},true);g.setWidth(Math.min((this.multiEventDots?e.getRange().length:1)*this.dotWidth,c.getWidth()));g.setY((c.getY()+c.getHeight())-(g.getHeight()+(c.getHeight()*0.1)));g.setX((c.getX()+(c.getWidth()/2))-(g.getWidth()/2)+2)}}},this)}}},hideEvents:function(){this.simpleEventsPlugin.disabled=true;this.calendar.element.select("span."+this.wrapperCls).hide()},showEvents:function(){this.simpleEventsPlugin.disabled=false;this.calendar.element.select("span."+this.wrapperCls).show()},removeEvents:function(){if(this.calendar.element){this.calendar.element.select("span."+this.wrapperCls).remove()}}});