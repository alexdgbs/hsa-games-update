(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(47),n(89),n(207),n(18),n(25),n(192),n(113),n(206),{data:function(){return{userMenuOpen:!1,email:"",isAuthenticated:!1,isSubscribed:!1}},mounted:function(){this.checkAuthentication(),window.addEventListener("storage",this.checkAuthentication)},methods:{toggleUserMenu:function(){this.userMenuOpen=!this.userMenuOpen},checkAuthentication:function(){var t=document.cookie.match(/email=([^;]+)/);t?(this.email=t[1],this.isAuthenticated=!0,this.checkSubscription()):(this.isAuthenticated=!1,this.isSubscribed=!1)},checkSubscription:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=document.cookie.split(";").find((function(t){return t.trim().startsWith("email=")})))){e.next=17;break}return r=n.split("=")[1],e.prev=3,e.next=6,fetch("".concat("http://localhost:3001/api","/user?email=").concat(r));case 6:if(!(o=e.sent).ok){e.next=12;break}return e.next=10,o.json();case 10:c=e.sent,t.isSubscribed=c.isSubscribed;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error("Error al obtener la información del usuario:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))()},logout:function(){document.cookie="email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.email="",this.isAuthenticated=!1,this.isSubscribed=!1,this.$router.push("/")}},beforeDestroy:function(){window.removeEventListener("storage",this.checkAuthentication)}}),c=(n(283),n(32)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:"fade"}},[t.isSubscribed?e("div",{staticClass:"bg-red-500 text-black py-1 hidden md:block",class:{"fade-in":t.isSubscribed,"fade-out":!t.isSubscribed}},[e("div",{staticClass:"container mx-auto flex flex-col items-center text-center"},[e("span",{staticClass:"text-xs font-bold text-white transition duration-300 ease-in-out transform hover:scale-110"},[t._v("Prueba nuestro nuevo emulador")]),t._v(" "),e("div"),t._v(" "),e("div",{staticClass:"mt-1"},[e("a",{staticClass:"text-xs font-bold transition duration-300 ease-in-out transform hover:scale-110 bg-red-400 text-white rounded-md px-2 py-1 shadow hover:bg-red-300",attrs:{href:"/gba.html"}},[t._v("\n            HSA Advance\n          ")])])])]):t._e()]),t._v(" "),e("nav",{staticClass:"bg-white py-3"},[e("div",{staticClass:"container mx-auto flex items-center justify-between"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"hidden lg:flex items-center space-x-4"},[e("div",{staticClass:"relative group"},[e("button",{staticClass:"text-black text-2xl focus:outline-none transition transform hover:scale-110"},[e("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM18.75 18a6.75 6.75 0 10-13.5 0h13.5z"}})])]),t._v(" "),e("div",{staticClass:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"},[t.isAuthenticated?e("div",{staticClass:"px-4 py-2 text-gray-700 text-xs border-b border-gray-200"},[t._v("\n              "+t._s(t.email)+"\n            ")]):t._e(),t._v(" "),t.isAuthenticated?t._e():e("a",{staticClass:"text-xs block px-4 py-2 text-gray-700 hover:bg-gray-100",attrs:{href:"/register"}},[t._v("Registrarse / Iniciar sesión")]),t._v(" "),t.isAuthenticated?e("button",{staticClass:"block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-xs",on:{click:t.logout}},[t._v("Cerrar Sesión")]):t._e()])])]),t._v(" "),e("div",{staticClass:"block lg:hidden relative"},[e("button",{staticClass:"text-black focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110",on:{click:t.toggleUserMenu}},[e("svg",{staticClass:"w-6 h-6 transition-transform duration-300 ease-in-out",class:{"rotate-90":t.userMenuOpen},attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"}})])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.userMenuOpen?e("div",{staticClass:"fixed inset-0 bg-white z-50 p-4 transition-opacity duration-300 ease-in-out"},[e("div",{staticClass:"flex justify-end"},[e("button",{staticClass:"text-black focus:outline-none",on:{click:t.toggleUserMenu}},[e("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),e("ul",{staticClass:"flex flex-col items-center space-y-4 mt-6"},[e("li",[e("a",{staticClass:"block text-sm hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/inicio"}},[t._v("Inicio")])]),t._v(" "),e("li",[e("a",{staticClass:"block text-sm hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/precios"}},[t._v("Precios")])]),t._v(" "),e("li",[e("a",{staticClass:"block text-sm hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/consolas"}},[t._v("Consolas")])]),t._v(" "),e("li",[e("a",{staticClass:"block text-sm hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/emuladores"}},[t._v("Emuladores")])]),t._v(" "),e("li",[e("a",{staticClass:"block text-sm hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/team"}},[t._v("Team")])]),t._v(" "),t.isAuthenticated?t._e():e("li",[e("a",{staticClass:"block text-sm text-sky-800 hover:bg-gray-100 p-2 rounded transition duration-300",attrs:{href:"/register"}},[t._v("Crear Cuenta")])]),t._v(" "),t.isAuthenticated?e("li",[e("button",{staticClass:"block text-sm text-red-500 hover:bg-gray-100 p-2 rounded transition duration-300",on:{click:t.logout}},[t._v("Cerrar Sesión")])]):t._e(),t._v(" "),t.isAuthenticated?e("li",{staticClass:"text-slate-400 text-sm text-center"},[t._v("\n                Hola, "+t._s(t.email)+"\n              ")]):t._e()])]):t._e()])],1)])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-black text-2xl font-bold"},[t("a",{attrs:{href:"/"}},[t("img",{staticClass:"h-10 w-auto object-contain",attrs:{src:"/img/logo2.png",alt:"HSA//Games"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hidden lg:flex space-x-6 text-black text-sm"},[e("a",{staticClass:"hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110",attrs:{href:"/inicio"}},[t._v("Inicio")]),t._v(" "),e("a",{staticClass:"hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110",attrs:{href:"/precios"}},[t._v("Precios")]),t._v(" "),e("a",{staticClass:"hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110",attrs:{href:"/consolas"}},[t._v("Consolas")]),t._v(" "),e("a",{staticClass:"hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110",attrs:{href:"/emuladores"}},[t._v("Emuladores")]),t._v(" "),e("a",{staticClass:"hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110",attrs:{href:"/PAC-MAN.HTML"}},[t._v("Arcade")])])}],!1,null,null,null);e.default=component.exports},197:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("faa9a960",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";var r={components:{Navbar:n(142).default}},o=n(32),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",[t("Navbar"),this._v(" "),t("main",[t("Nuxt")],1)],1)}),[],!1,null,"663d9f2e",null);e.a=component.exports;installComponents(component,{Navbar:n(142).default})},208:function(t,e,n){n(209),t.exports=n(210)},283:function(t,e,n){"use strict";n(197)},284:function(t,e,n){var r=n(87)((function(i){return i[1]}));r.push([t.i,".fade-enter-active,.fade-leave-active{transition:opacity .5s ease,transform .5s cubic-bezier(.25,1.46,.5,1.05)}.fade-enter,.fade-leave-to{opacity:0;transform:translateY(-10px)}.fixed.inset-0{z-index:9999}",""]),r.locals={},t.exports=r},285:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c}));var r=function(){return{isAuthenticated:!1,email:""}},o={SET_AUTH:function(t,e){var n=e.email;t.isAuthenticated=!0,t.email=n},LOGOUT:function(t){t.isAuthenticated=!1,t.email=""}},c={login:function(t,e){(0,t.commit)("SET_AUTH",{email:e})},logout:function(t){(0,t.commit)("LOGOUT")}}}},[[208,24,1,25]]]);