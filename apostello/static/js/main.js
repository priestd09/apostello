webpackJsonp([12],[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=a["default"].trim(o[n]);if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}function u(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}function d(e){var t=document.location.host,o=document.location.protocol,n="//"+t,r=o+n;return e===r||e.slice(0,r.length+1)===r+"/"||e===n||e.slice(0,n.length+1)===n+"/"||!/^(\/\/|http:|https:).*/.test(e)}var c=o(156),a=n(c);a["default"].ajaxSetup({beforeSend:function(e,t){if(!u(t.type)&&d(t.url)){var o=r("csrftoken");e.setRequestHeader("X-CSRFToken",o)}}}),(0,a["default"])(document).ready(function(){(0,a["default"])(".dropdown").dropdown({label:{transition:"horizontal flip",duration:0,variation:!1}})}),(0,a["default"])(document).ready(function(){(0,a["default"])(".ui.checkbox").checkbox({onChecked:function(){var e=(0,a["default"])("#members_dropdown > option").toArray().map(function(e){return e.value});(0,a["default"])("#members_dropdown").dropdown("set exactly",e)},onUnchecked:function(){(0,a["default"])("#members_dropdown").dropdown("clear")}})})}]);
//# sourceMappingURL=main.js.map