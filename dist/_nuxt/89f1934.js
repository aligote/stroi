(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,r){"use strict";r.r(e);var n={name:"_id.vue",computed:{catid:function(){return this.$route.params.id},getCatId:function(){return this.$store.getters["categories/catId"](this.catid)},getOffCatId:function(){return this.$store.getters["offers/getOffCatId"](this.catid)}}},d=r(44),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v("Страница категории "+t._s(t.getCatId._text)+"  c id "+t._s(t.$route.params.id))]),t._v(" "),t._l(t.getOffCatId,(function(e){return r("div",{key:e._attributes.id},[t._v(t._s(e.name._text)+" ")])}))],2)}),[],!1,null,"70c90bb6",null);e.default=component.exports}}]);