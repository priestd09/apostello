webpackJsonp([4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),a=n(142),l=r(a),i=n(265),c=r(i),f=n(268),s=r(f),p=n(269),d=r(p);u["default"].render(l["default"].createElement(s["default"],{url:"/api/v1/elvanto/group_fetch/"}),document.getElementById("elvanto_fetch_button")),u["default"].render(l["default"].createElement(d["default"],{url:"/api/v1/elvanto/group_pull/"}),document.getElementById("elvanto_pull_button")),u["default"].render(l["default"].createElement(c["default"],{url:"/api/v1/elvanto/groups/",pollInterval:5e4}),document.getElementById("elvanto_table"))},155:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(156),u=r(o),a=function(e,t,n){u["default"].ajax({url:e,type:"POST",data:t,success:function(e){n(e)},error:function(e,t,n){console.log(e.status+": "+e.responseText),console.log(n)}})};t["default"]=a},157:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingComponent=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(142),f=r(c),s=n(156),p=r(s),d=n(158),y=r(d);t.LoadingComponent=function(e){return function(t){function n(){o(this,n);var e=u(this,Object.getPrototypeOf(n).call(this));return e.loadFromServer=e.loadFromServer.bind(e),e.deleteItemUpdate=e.deleteItemUpdate.bind(e),e.state={data:"loading"},e}return a(n,t),i(n,[{key:"loadFromServer",value:function(){var e=this;p["default"].ajax({url:e.props.url,dataType:"json",success:function(t){var n=e.state.data;"loading"===n&&(n=new Map),t.results.map(function(e){return n.set(e.pk,e)}),e.setState({data:n}),t.next&&e.fetchNextPage(t.next)},error:function(t,n,r){console.error(e.props.url,n,r.toString())}})}},{key:"fetchNextPage",value:function(e){var t=this;p["default"].ajax({url:e,dataType:"json",success:function(e){var n=t.state.data;e.results.map(function(e){return n.set(e.pk,e)}),t.setState({data:n}),e.next&&t.fetchNextPage(e.next)},error:function(t,n,r){console.error(e,n,r.toString())}})}},{key:"deleteItemUpdate",value:function(e){var t=this.state.data;t["delete"](e.pk),this.setState({data:t}),this.loadFromServer()}},{key:"componentDidMount",value:function(){this.loadFromServer(),setInterval(this.loadFromServer,this.props.pollInterval)}},{key:"render",value:function(){return"loading"===this.state.data?f["default"].createElement(y["default"],null):f["default"].createElement(e,l({},this.props,{data:Array.from(this.state.data.values()),loadfromserver:this.loadFromServer,deleteItemUpdate:this.deleteItemUpdate}))}}]),n}(c.Component)}},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"ui very padded basic segment"},c["default"].createElement("div",{className:"ui active inverted dimmer"},c["default"].createElement("div",{className:"ui small text indeterminate loader"},"Loading")))}}]),t}(i.Component);t["default"]=f},265:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=n(157),s=n(266),p=r(s),d=n(155),y=r(d),b=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.toggleSync=e.toggleSync.bind(e),e}return a(t,e),l(t,[{key:"toggleSync",value:function(e){(0,y["default"])("/api/v1/elvanto/group/"+e.pk,{sync:e.sync},this.props.loadfromserver)}},{key:"render",value:function(){var e=this,t=this.props.data.map(function(t,n){return c["default"].createElement(p["default"],{grp:t,key:n,toggleSync:e.toggleSync})});return c["default"].createElement("table",{className:"ui striped compact definition table"},c["default"].createElement("thead",null,c["default"].createElement("tr",null,c["default"].createElement("th",null),c["default"].createElement("th",null,"Last Synced"),c["default"].createElement("th",null,"Sync?"))),c["default"].createElement("tbody",null,t))}}]),t}(i.Component);t["default"]=(0,f.LoadingComponent)(b)},266:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=n(267),s=r(f),p=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement("tr",null,c["default"].createElement("td",null,this.props.grp.name),c["default"].createElement("td",null,this.props.grp.last_synced),c["default"].createElement(s["default"],{grp:this.props.grp,toggleSync:this.props.toggleSync}))}}]),t}(i.Component);t["default"]=p},267:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e._onClick=e._onClick.bind(e),e}return a(t,e),l(t,[{key:"_onClick",value:function(){this.props.toggleSync(this.props.grp)}},{key:"render",value:function(){return this.props.grp.sync?c["default"].createElement("td",null,c["default"].createElement("a",{className:"ui tiny green button",onClick:this._onClick},"Syncing")):c["default"].createElement("td",null,c["default"].createElement("a",{className:"ui tiny grey button",onClick:this._onClick},"Disabled"))}}]),t}(i.Component);t["default"]=f},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=n(155),s=r(f),p=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.fetchGroups=e.fetchGroups.bind(e),e}return a(t,e),l(t,[{key:"fetchGroups",value:function(){(0,s["default"])("/api/v1/elvanto/group_fetch/",{},window.alert("Groups are being fetched, it may take a couple of minutes"))}},{key:"render",value:function(){return c["default"].createElement("button",{className:"ui green fluid button",onClick:this.fetchGroups},"Fetch Groups")}}]),t}(i.Component);t["default"]=p},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(142),c=r(i),f=n(155),s=r(f),p=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.pullGroups=e.pullGroups.bind(e),e}return a(t,e),l(t,[{key:"pullGroups",value:function(){var e=function(){window.alert("Groups are being synced, it may take a couple of minutes")};(0,s["default"])("/api/v1/elvanto/group_pull/",{},e)}},{key:"render",value:function(){return c["default"].createElement("button",{className:"ui blue fluid button",onClick:this.pullGroups},"Pull Groups")}}]),t}(i.Component);t["default"]=p}});
//# sourceMappingURL=elvanto.js.map