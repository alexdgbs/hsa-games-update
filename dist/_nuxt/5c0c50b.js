(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{296:function(e,t,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(88).default)("ead7e18c",content,!0,{sourceMap:!1})},310:function(e,t,r){"use strict";r(296)},311:function(e,t,r){var n=r(87)((function(i){return i[1]}));n.push([e.i,'body[data-v-e9a82058]{font-family:"Inter",sans-serif}h2[data-v-e9a82058]{color:#1f2937;font-size:1.25rem}h3[data-v-e9a82058]{color:#374151;font-size:1rem}.bg-white[data-v-e9a82058]{background-color:#fff}#paypal-button-container[data-v-e9a82058]{display:flex;justify-content:center;z-index:10}.bg-gray-100[data-v-e9a82058]{padding:.5rem}.space-y-6>*+*[data-v-e9a82058]{margin-top:1.5rem}.flex[data-v-e9a82058]{margin-top:1rem}.menu[data-v-e9a82058]{z-index:50}',""]),n.locals={},e.exports=n},342:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(47),r(89),r(207),r(33),r(18),r(113),r(206),{data:function(){return{isSubscribed:!1}},mounted:function(){this.checkSubscription();var script=document.createElement("script");script.src="https://www.paypal.com/sdk/js?client-id=AXQeb763-UfMzlLsheOGAQdXyM-xzZ4MPxXXZAaZ44MQT-7bWdbDuiRxl6-gwxuCgXf6Jnc0LKSdL1vk&currency=MXN",script.addEventListener("load",this.renderPayPalButton),document.body.appendChild(script)},methods:{checkSubscription:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=document.cookie.split(";").find((function(e){return e.trim().startsWith("email=")})))){t.next=17;break}return n=r.split("=")[1],t.prev=3,t.next=6,fetch("".concat("http://localhost:3001/api","/user?email=").concat(n));case 6:if(!(o=t.sent).ok){t.next=12;break}return t.next=10,o.json();case 10:c=t.sent,e.isSubscribed=c.isSubscribed;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.error("Error al obtener la información del usuario:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,14]])})))()},renderPayPalButton:function(){var e,t=this;window.paypal?window.paypal.Buttons({createOrder:function(data,e){return e.order.create({purchase_units:[{amount:{value:"49.00"}}]})},onApprove:(e=Object(n.a)(regeneratorRuntime.mark((function e(data,r){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.order.capture();case 3:if(n=e.sent,o=document.cookie.split(";").find((function(e){return e.trim().startsWith("email=")})),!(c=o?o.split("=")[1]:null)){e.next=12;break}return e.next=9,fetch("".concat("http://localhost:3001/api","/update-subscription"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,isSubscribed:!0})});case 9:if(e.sent.ok){e.next=12;break}throw new Error("Error al actualizar la suscripción");case 12:alert("Transacción completada por "+n.payer.name.given_name),t.$router.push("/success"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error en el proceso de pago:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),function(t,r){return e.apply(this,arguments)}),onError:function(e){console.error("Error en el proceso de pago:",e)}}).render("#paypal-button-container"):console.error("PayPal SDK no está cargado.")},cancelSubscription:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=document.cookie.split(";").find((function(e){return e.trim().startsWith("email=")})),!(n=r?r.split("=")[1]:null)){t.next=13;break}return t.next=6,fetch("".concat("http://localhost:3001/api","/update-subscription"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,isSubscribed:!1})});case 6:if(t.sent.ok){t.next=9;break}throw new Error("Error al cancelar la suscripción");case 9:alert("Suscripción cancelada con éxito"),e.$router.push("/cancel"),t.next=14;break;case 13:alert("No se encontró un correo electrónico en las cookies");case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Error en el proceso de cancelación:",t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}}),c=o,l=(r(310),r(32)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative z-0 bg-white max-w-sm mx-auto py-6 px-2 sm:px-4 lg:px-6"},[t("div",{staticClass:"space-y-6"},[e._m(0),e._v(" "),t("div",{staticClass:"bg-gray-100 py-4 px-2 shadow sm:rounded-lg sm:px-6"},[t("h3",{staticClass:"text-lg font-medium text-gray-700 text-center mb-4"},[e._v("Métodos de Pago")]),e._v(" "),t("div",{staticClass:"mt-2 relative",attrs:{id:"paypal-button-container"}}),e._v(" "),e.isSubscribed?t("button",{staticClass:"mt-4 w-full rounded-md bg-red-400 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-red-500",on:{click:e.cancelSubscription}},[e._v("\n        Cancelar Suscripción\n      ")]):e._e()])])])}),[function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-center text-2xl font-semibold text-gray-900"},[e._v("Suscríbete por solo $49")]),e._v(" "),t("p",{staticClass:"mt-1 text-center text-xs text-gray-600"},[e._v("\n        Elige el método de pago y accede a contenido exclusivo.\n      ")])])}],!1,null,"e9a82058",null);t.default=component.exports}}]);