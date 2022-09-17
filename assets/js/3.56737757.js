(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(t,e,a){},238:function(t,e,a){},239:function(t,e,a){"use strict";a(237)},240:function(t,e,a){"use strict";var n={name:"GIcon",props:{name:{type:String,required:!0}},mounted(){const t=document.querySelector("script[data-ref]");if(t&&"iconScript"===t.dataset.ref)return;const e=document.createElement("script");e.src="//at.alicdn.com/t/font_718972_a5614fly5or.js",e.dataset.ref="iconScript",document.body.append(e)}},s=(a(239),a(14)),i=Object(s.a)(n,(function(){var t=this._self._c;return t("svg",{class:["g-icon",{loading:"loading"===this.name}],attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"241b5f01",null);e.a=i.exports},242:function(t,e,a){"use strict";a(238)},243:function(t,e,a){"use strict";var n={name:"GButton",components:{"g-icon":a(240).a},props:{icon:{},iconPosition:{type:String,default:"left",validator:t=>["left","right"].includes(t)},loading:{type:Boolean,default:!1}}},s=(a(242),a(14)),i=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("button",{class:["g-button",{["icon-"+t.iconPosition]:t.icon}],on:{click:function(e){return t.$emit("click")}}},[t.icon&&!t.loading?e("g-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?e("g-icon",{staticClass:"icon",attrs:{name:"loading"}}):t._e(),t._v(" "),e("span",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"43022fc6",null);e.a=i.exports},270:function(t,e,a){},271:function(t,e,a){},272:function(t,e,a){},273:function(t,e,a){},274:function(t,e,a){},308:function(t,e,a){"use strict";a(270)},309:function(t,e,a){"use strict";a(271)},310:function(t,e,a){"use strict";a(272)},311:function(t,e,a){"use strict";a(273)},312:function(t,e,a){"use strict";a(274)},320:function(t,e,a){"use strict";a.r(e);var n=a(0),s={name:"GTabs",data:()=>({eventBus:new n.a}),props:{selected:{type:String,required:!0},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)}},provide(){return{eventBus:this.eventBus}},mounted(){this.eventBus&&this.eventBus.$emit("update:selected",this.selected)}},i=(a(308),a(14)),c=Object(i.a)(s,(function(){return(0,this._self._c)("div",{staticClass:"g-tabs"},[this._t("default")],2)}),[],!1,null,"39236656",null).exports,d={name:"GTabsHead",inject:["eventBus"],data:()=>({line:{width:"",translateX:""}}),mounted(){this.eventBus&&this.eventBus.$on("update:selected",t=>{if("GTabsHead"!==this.$options.name)return;const e=this.$children.filter(e=>e.name===t)[0];this.line.width=e.$el.getBoundingClientRect().width+"px",this.line.translateX=e.$el.offsetLeft+"px"})}},o=(a(309),Object(i.a)(d,(function(){var t=this._self._c;return t("div",{staticClass:"g-tabsHead"},[t("div",{staticClass:"tabsItem-wrapper"},[this._t("default"),this._v(" "),t("i",{staticClass:"line",style:{width:this.line.width,transform:`translateX(${this.line.translateX})`}})],2),this._v(" "),t("div",{staticClass:"actions-wrapper"},[this._t("actions")],2)])}),[],!1,null,"2dbbc268",null).exports),r={name:"GTabsItem",data:()=>({active:!1}),inject:["eventBus"],props:{disabled:{type:Boolean,default:!1},name:{type:[String,Number],required:!0}},mounted(){this.eventBus&&this.eventBus.$on("update:selected",t=>{this.active=t===this.name})},methods:{switchTab(){this.disabled||(this.eventBus&&this.eventBus.$emit("update:selected",this.name),this.$emit("click",this))}}},b=(a(310),Object(i.a)(r,(function(){return(0,this._self._c)("div",{class:["g-tabsItem",{active:this.active,disabled:this.disabled}],attrs:{"data-name":this.name},on:{click:this.switchTab}},[this._t("default")],2)}),[],!1,null,"b249091e",null).exports),l={name:"GTabsBody"},u=(a(311),Object(i.a)(l,(function(){return(0,this._self._c)("div",{staticClass:"g-tabsBody"},[this._t("default")],2)}),[],!1,null,"50cf1420",null).exports),g={name:"GTabsPane",data:()=>({active:!1}),inject:["eventBus"],props:{name:{type:[String,Number],required:!0}},mounted(){this.eventBus&&this.eventBus.$on("update:selected",t=>{this.active=t===this.name})}},m=(a(312),{name:"Tabs-demos",components:{"g-tabs":c,"g-tabs-head":o,"g-tabs-body":u,"g-tabs-item":b,"g-tabs-pane":Object(i.a)(g,(function(){return(0,this._self._c)("div",{class:["g-tabsPane",{active:this.active}]},[this._t("default")],2)}),[],!1,null,"2b093fe2",null).exports,"g-button":a(243).a},data:()=>({selectedTab1:"first",selectedTab2:"second",selectedTab3:"first",selectedTab4:"first",code1:'\n        <g-tabs :selected.sync="selectedTab2" style="background-color: #eee">\n          <g-tabs-head>\n            <g-tabs-item name="first">tab1</g-tabs-item>\n            <g-tabs-item name="second">tab2</g-tabs-item>\n            <g-tabs-item name="third">tab3</g-tabs-item>\n          </g-tabs-head>\n          <g-tabs-body>\n            <g-tabs-pane name="first">pane1</g-tabs-pane>\n            <g-tabs-pane name="second">pane2</g-tabs-pane>\n            <g-tabs-pane name="third">pane3</g-tabs-pane>\n          </g-tabs-body>\n        </g-tabs>\n\n        data() {\n          return {\n            selectedTab2: \'second\'\n          }\n        }\n      '.replace(/^ {8}/gm,"").trim(),code2:'\n        <g-tabs :selected.sync="selectedTab3">\n          <g-tabs-head>\n            <g-tabs-item name="first">tab1</g-tabs-item>\n            <g-tabs-item name="second" disabled>tab2</g-tabs-item>\n            <g-tabs-item name="third">tab3</g-tabs-item>\n          </g-tabs-head>\n          <g-tabs-body>\n            <g-tabs-pane name="first">pane1</g-tabs-pane>\n            <g-tabs-pane name="second">pane2</g-tabs-pane>\n            <g-tabs-pane name="third">pane3</g-tabs-pane>\n          </g-tabs-body>\n        </g-tabs>\n      '.replace(/^ {8}/gm,"").trim(),code3:'\n        <g-tabs :selected.sync="selectedTab4">\n          <g-tabs-head>\n            <g-tabs-item name="first">tab1</g-tabs-item>\n            <g-tabs-item name="second">tab2</g-tabs-item>\n            <g-tabs-item name="third">tab3</g-tabs-item>\n            <template v-slot:actions>\n              <g-button>设置</g-button>\n            </template>\n          </g-tabs-head>\n          <g-tabs-body>\n            <g-tabs-pane name="first">pane1</g-tabs-pane>\n            <g-tabs-pane name="second">pane2</g-tabs-pane>\n            <g-tabs-pane name="third">pane3</g-tabs-pane>\n          </g-tabs-body>\n        </g-tabs>\n      '.replace(/^ {8}/gm,"").trim()})}),p=Object(i.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("section",[e("p",[t._v("默认选中")]),t._v(" "),e("g-tabs",{staticStyle:{"background-color":"#eee"},attrs:{selected:t.selectedTab2},on:{"update:selected":function(e){t.selectedTab2=e}}},[e("g-tabs-head",[e("g-tabs-item",{attrs:{name:"first"}},[t._v("tab1")]),t._v(" "),e("g-tabs-item",{attrs:{name:"second"}},[t._v("tab2")]),t._v(" "),e("g-tabs-item",{attrs:{name:"third"}},[t._v("tab3")])],1),t._v(" "),e("g-tabs-body",[e("g-tabs-pane",{attrs:{name:"first"}},[t._v("pane1")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"second"}},[t._v("pane2")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"third"}},[t._v("pane3")])],1)],1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.code1))])])],1),t._v(" "),e("section",[e("p",[t._v("禁用 tab 项")]),t._v(" "),e("g-tabs",{attrs:{selected:t.selectedTab3},on:{"update:selected":function(e){t.selectedTab3=e}}},[e("g-tabs-head",[e("g-tabs-item",{attrs:{name:"first"}},[t._v("tab1")]),t._v(" "),e("g-tabs-item",{attrs:{name:"second",disabled:""}},[t._v("tab2")]),t._v(" "),e("g-tabs-item",{attrs:{name:"third"}},[t._v("tab3")])],1),t._v(" "),e("g-tabs-body",[e("g-tabs-pane",{attrs:{name:"first"}},[t._v("pane1")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"second"}},[t._v("pane2")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"third"}},[t._v("pane3")])],1)],1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.code2))])])],1),t._v(" "),e("section",[e("p",[t._v("设置其他内容")]),t._v(" "),e("g-tabs",{attrs:{selected:t.selectedTab4},on:{"update:selected":function(e){t.selectedTab4=e}}},[e("g-tabs-head",{scopedSlots:t._u([{key:"actions",fn:function(){return[e("g-button",[t._v("设置")])]},proxy:!0}])},[e("g-tabs-item",{attrs:{name:"first"}},[t._v("tab1")]),t._v(" "),e("g-tabs-item",{attrs:{name:"second"}},[t._v("tab2")]),t._v(" "),e("g-tabs-item",{attrs:{name:"third"}},[t._v("tab3")])],1),t._v(" "),e("g-tabs-body",[e("g-tabs-pane",{attrs:{name:"first"}},[t._v("pane1")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"second"}},[t._v("pane2")]),t._v(" "),e("g-tabs-pane",{attrs:{name:"third"}},[t._v("pane3")])],1)],1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.code3))])])],1)])}),[],!1,null,"31c6c780",null);e.default=p.exports}}]);