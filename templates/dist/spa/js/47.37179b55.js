(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"20fe":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}})],1),a("q-space"),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(e){return t.ConfirmCount()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n            "+t._s(t.$t("stock.view_stocklist.cyclecountresulttip"))+"\n          ")])],1)],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"goods_code",attrs:{props:e}},[t._v("\n             "+t._s(e.row.goods_code)+"\n           ")]),a("q-td",{key:"goods_qty",attrs:{props:e}},[t._v("\n             "+t._s(e.row.goods_qty)+"\n           ")]),a("q-td",{key:"goods_actual_qty",attrs:{props:e}},[t._v("\n             "+t._s(e.row.goods_actual_qty)+"\n           ")]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:e}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(t){e.row.physical_inventory=0}}})],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex cordova-footer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:t.barscan},on:{input:[function(e){e.target.composing||(t.barscan=e.target.value)},function(e){return t.datachange()}]}})])]],2)},n=[],s=a("3004"),c=a("18d6");a("3a34");function i(){Uplugin.getDeviceID("",(function(t){console.log(t)}),(function(t){console.log(t)}))}function r(){Uplugin.getBarcode("start",(function(t){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=t,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input")),console.log(1,t)}),(function(t){console.log(t)}))}function l(){Uplugin.getBarcode("stop",(function(t){console.log(t)}),(function(t){console.log(t)}))}var d={name:"Pageurovo_asn",data(){return{openid:"",login_name:"",authin:"0",pathname:"asn/detail/?asn_status=3&ordering=-id",separator:"cell",loading:!1,height:"",table_list:[],sorted_list:{asn_code:"",supplier:"",goodsData:[],creater:""},columns:[{name:"goods_code",label:this.$t("goods.view_goodslist.goods_code"),field:"goods_code",align:"left"},{name:"goods_qty",label:this.$t("inbound.view_asn.goods_qty"),field:"goods_qty",align:"center"},{name:"goods_actual_qty",label:this.$t("inbound.view_asn.goods_actual_qty"),field:"goods_actual_qty",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"10000"},screenq:this.$q.screen,IMEI:window.device,batteryStatus:"determining...",barscan:"",asn_scan:"",goods_scan:""}},methods:{datachange(){var t=this;console.log(3,document.getElementById("scannedBarcodes").value),t.$q.localStorage.has("auth")&&Object(s["e"])("scanner/?bar_code="+t.barscan,{}).then((e=>{console.log(2,e),t.barscan=e.results[0].code,"ASN"===e.results[0].mode?(t.asn_scan=e.results[0].code,t.goods_scan=""):"GOODS"===e.results[0].mode&&(t.goods_scan=e.results[0].code,t.countAdd(t.goods_scan))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},countAdd(t){var e=this;e.table_list.filter((function(a,o,n){a.bin_name===e.asn_scan&&a.goods_code===t&&(e.table_list[o].goods_actual_qty+=1)}))},getList(){var t=this;t.$q.localStorage.has("auth")&&Object(s["e"])(t.pathname,{}).then((e=>{t.table_list=e.results,t.sorted_list.goodsData=e.results[0].code})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.barscan="",t.asn_scan="",t.goods_scan="",t.getList()},ConfirmCount(){var t=this;c["a"].has("auth")&&(t.sorted_list.asn_code=t.asn_scan,t.sorted_list.supplier=t.table_list[0].supplier,t.sorted_list.creater=t.login_name,Object(s["h"])("asn/sorted/?asn_code="+t.asn_scan,t.sorted_list).then((e=>{t.table_list=[],t.sorted_list.goodsData=[],t.sorted_list.asn_code="",t.sorted_list.supplier="",t.sorted_list.creater="",e.data||t.$q.notify({message:"Success Sorted ASN",icon:"check",color:"green"})})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},updateBatteryStatus(t){var e=this;e.batteryStatus=`Level: ${t.level}, plugged: ${t.isPlugged}`},scanEvents(){var t=this;document.addEventListener("deviceready",t.onDeviceReady,!1)},onDeviceReady(){r()},onPause:function(){l()},onResume(){}},created(){var t=this;t.$q.localStorage.has("openid")?t.openid=t.$q.localStorage.getItem("openid"):(t.openid="",t.$q.localStorage.set("openid","")),t.$q.localStorage.has("login_name")?t.login_name=t.$q.localStorage.getItem("login_name"):(t.login_name="",t.$q.localStorage.set("login_name","")),t.$q.localStorage.has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;window.addEventListener("batterystatus",t.updateBatteryStatus,!1),t.height=this.$q.screen.height-175+"px",t.barscan="",t.asn_scan="",t.goods_scan="",t.getList(),t.scanEvents(),i()},updated(){},beforeDestroy(){var t=this;window.removeEventListener("batterystatus",t.updateBatteryStatus,!1),window.removeEventListener("deviceready",t.onDeviceReady,!1)},destroyed(){}},u=d,g=a("42e1"),p=a("d2bd"),_=a("eaac"),h=a("e7a9"),b=a("9c40"),v=a("2c91"),f=a("05c0"),m=a("bd08"),y=a("db86"),q=a("eebe"),w=a.n(q),$=Object(g["a"])(u,o,n,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])($);e["default"]=$.exports;w()($,"components",{QTable:_["a"],QBtnGroup:h["a"],QBtn:b["a"],QSpace:v["a"],QTooltip:f["a"],QTr:m["a"],QTd:y["a"]})},"29ab":function(t,e){},d2bd:function(t,e,a){"use strict";var o=a("29ab"),n=a.n(o);e["default"]=n.a}}]);