(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),c=a.n(o),i=(a(15),a(2)),r=(a(16),a(5)),s=a(6),d=a(9),u=a(7),m=a(1),h=a(8),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={open:!1,value:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleOpen=a.handleOpen.bind(Object(m.a)(a)),a.handleClose=a.handleClose.bind(Object(m.a)(a)),a.addPost=a.addPost.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"addPost",value:function(e){e.preventDefault(),this.props.add(this.state.value),this.setState({value:""}),alert("\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u0430")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.handleOpen},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),this.state.open&&l.a.createElement("div",{className:"modal_wrap"},l.a.createElement("div",{className:"modal"},l.a.createElement("span",{onClick:this.handleClose},"\u2716"),l.a.createElement("h2",null,"\u041a\u0430\u043a\u043e\u0439 \u0442\u0430\u0441\u043a \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c?"),l.a.createElement("form",{className:"add",onSubmit:this.addPost},l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),l.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")))))}}]),t}(l.a.Component),v=function(e){var t=e.add,a=l.a.useState(""),o=Object(i.a)(a,2),c=(o[0],o[1],Object(n.useContext)(E)),r=c.search,s=c.searchValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navBar"},l.a.createElement("input",{type:"text",value:s,onChange:r}),l.a.createElement(p,{add:t})))},f=function(e){var t=Object(n.useContext)(E),a=t.remove,o=t.select,c=[];return e.item.completed&&c.push("complete"),l.a.createElement("div",{className:"item"},l.a.createElement("input",{type:"checkbox",onChange:o.bind(null,e.item.id)}),l.a.createElement("span",{className:c.join(" ")},e.item.id,".",e.item.do),l.a.createElement("button",{onClick:a.bind(null,e.item.id)},"\xd7"))},b=function(e){var t=e.todos,a=(e.select,e.remove,l.a.useContext(E).searchValue);return l.a.createElement("div",{className:"list"},t.map((function(e,t){return-1===e.do.indexOf(a)?null:l.a.createElement(f,{key:t,item:e})})))},E=l.a.createContext();var C=function(){var e=l.a.useState([{id:1,completed:!1,do:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043a\u0432\u0430\u0440\u0442\u043f\u043b\u0430\u0442\u0443"},{id:2,completed:!1,do:"\u041f\u043e\u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0440\u0435\u0430\u043a\u0442\u043e\u043c"},{id:3,completed:!1,do:"\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0430 \u0441\u0442\u0440\u0438\u0436\u043a\u0443"},{id:4,completed:!1,do:"\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0441\u043f\u043e\u0440\u0442\u0437\u0430\u043b"}]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=l.a.useState(""),c=Object(i.a)(o,2),r=c[0],s=c[1],d=function(e){n(a=a.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},u=function(e){n(a=a.filter((function(t){if(e!==t.id)return t})))},m=function(e){n(a=a.concat({id:a.length+1,completed:!1,do:e}))};return l.a.createElement(E.Provider,{value:{remove:u,select:d,searchValue:r,search:function(e){s(r=e.target.value)},addToDo:m}},l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"My to do list"),l.a.createElement(v,{add:m}),a.length?l.a.createElement(b,{todos:a,select:d,remove:u}):l.a.createElement("p",null,"\u041d\u0435\u0442\u0443 \u0437\u0430\u0434\u0430\u0447!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.18032e8e.chunk.js.map