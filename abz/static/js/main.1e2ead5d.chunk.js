(this.webpackJsonpabz=this.webpackJsonpabz||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a(47)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),i=a(1),s=a.n(i),c=a(4),m=a(2),u=a(5),p={color:"#007bff"},d=function(e){var t=e.link,a=e.path;return r.a.createElement("li",null,r.a.createElement(u.b,{exact:!0,activeStyle:p,className:"link",to:a},t))},h=(a(31),a(32),function(e){var t=e.links,a=e.close,n=e.open;return r.a.createElement("div",{className:"wrap_side_bar ".concat(n?"wrap_side_bar_open":""),onClick:function(e){"wrap_side_bar wrap_side_bar_open"===e.target.className&&a()}},r.a.createElement("div",{className:"side_bar"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"./imgs/logo.svg",alt:"logo",title:"logo"})),r.a.createElement("div",{className:"links"},t.map((function(e){var t=e.link,a=e.path,n=e.id;return r.a.createElement(d,{link:t,path:a,key:n})}))),r.a.createElement("div",{className:"links"},t.map((function(e){var t=e.link,a=e.path,n=e.id;return r.a.createElement(d,{link:t,path:a,key:n})}))),r.a.createElement("div",{className:"links"},t.map((function(e){var t=e.link,a=e.path,n=e.id;return r.a.createElement(d,{link:t,path:a,key:n})})))))}),f=function(e){var t=e.links,a=e.windowSize,n=r.a.useState(!1),l=Object(m.a)(n,2),o=l[0],i=l[1],s=function(){return i(!o)};return r.a.createElement(u.a,null,r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-2 col-md-3 col-6"},r.a.createElement("img",{src:"./imgs/logo.svg",alt:"logotype",title:"logotype"})),a>991?r.a.createElement("div",{className:"offset-lg-4 col-lg-6"},r.a.createElement("ul",null,t.map((function(e){var t=e.link,a=e.path,n=e.id;return r.a.createElement(d,{link:t,path:a,key:n})})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"offset-md-8 col-md-1 offset-sm-3 col-sm-3 col-3 offset-3 button_open"},r.a.createElement("img",{src:"./imgs/menuIcon.svg",alt:"menu",title:"open menu",onClick:s})),r.a.createElement(h,{links:t,close:s,open:o}))))))},v=(a(33),function(e){var t=e.windowSize,a=e.scrollToBlock;t>767&&r.a.createElement("br",null);return r.a.createElement("section",{className:"testAsigment"},r.a.createElement("div",{className:"sectionWrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-7 col-md-8"},r.a.createElement("h1",null,"Test assignment ",r.a.createElement("br",null),"for Frontend Developer position"),r.a.createElement("p",null,"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.",t>767&&r.a.createElement("span",null,"Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")),r.a.createElement("button",{className:"button buttonFrst",onClick:a},"Sing up now"))))))}),E=(a(34),function(e){var t=e.windowSize,a=e.scrollToBlock;return r.a.createElement("section",{className:"acquainted"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Let's get acquainted"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 col-md-4"},r.a.createElement("img",{src:"./imgs/man-laptop-v1.svg",alt:"men with laptop",title:"man with laptop"})),r.a.createElement("div",{className:"col-lg-7 col-md-8 text-left"},r.a.createElement("div",{className:"wrapContent"},r.a.createElement("h2",null,"I am cool frontend developer"),r.a.createElement("p",{className:"frstParagraph"},r.a.createElement("span",null,"We will evaluate how clean your approach to writing CSS and Javascript"),t>991&&r.a.createElement("br",null),"code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",{className:"scndParagraph"},r.a.createElement("span",null,"If 3rd party css/javascript libraries are added to the project via "),t>991&&r.a.createElement("br",null),r.a.createElement("span",null,"bower/npm/yarn you will get bonus points.If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service"),"directory page P\u200bSD mockup\u200b into HTML5/CSS3."),r.a.createElement("button",{className:"button buttonScnd",onClick:a},"Sing up now"))))))}),g=(a(35),a(36),function(){return r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),b=r.a.lazy((function(){return new Promise((function(e){setTimeout((function(){e(a.e(3).then(a.bind(null,48)))}),1e3)}))})),w=function(e){var t=e.users,a=e.onClick,n=e.hide;return r.a.createElement("section",{className:"users"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Our cheerful users"),r.a.createElement("p",{className:"attention"},"Attention! Sorting users by registration date"),r.a.createElement("div",{className:"row"},t.length>0&&t.map((function(e,t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(g,null),key:e.id},r.a.createElement(b,{photo:e.photo,name:e.name,email:e.email,phone:e.phone}))}))),n&&r.a.createElement("button",{className:"button buttonFrst",onClick:a},"Show more")))},k=a(9),y=a(15),x=a(16),N=a(18),S=a(17),z=a(19),C=(a(37),a(38),function(e){var t=e.type,a=e.name,n=e.label,l=e.placeholder,o=e.value,i=e.handleChange,s=e.hint,c=e.error,m=e.onBlur;return r.a.createElement("div",{className:"inputWrap"},r.a.createElement("label",{className:"label ".concat(c.length>0?"error":""),htmlFor:a},n),r.a.createElement("input",{id:a,type:t,name:a,placeholder:l,onChange:i,value:o,className:c.length>0?"error":"",onBlur:m}),r.a.createElement("span",{className:"".concat(c.length>0?"error":""," hint")},c.length>0?c:s))}),j=(a(39),function(e){var t=e.values,a=e.handleChange,n=e.position;return r.a.createElement("div",{className:"radioBox"},r.a.createElement("p",{className:"position"},"Select your position"),t.length>0&&t.map((function(e,t){return r.a.createElement("label",{key:t,className:"container",htmlFor:e.id},e.name,r.a.createElement("input",{type:"radio",value:e.id,name:e.id,id:e.id,onChange:a,checked:e.id===n}),r.a.createElement("span",{className:"checkmark"}))})))}),F=(a(40),function(e){var t=e.handleChange,a=e.value,n=e.error,l=e.onBlur;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"inputFileHead ".concat(n.length>0?"error":"")},"Photo"),r.a.createElement("div",{className:"photoContainer  ".concat(n.length>0?"error":"")},a.name?a.name:"Upload your photo",r.a.createElement("label",{htmlFor:"photo",className:n.length>0?"error":""},"Browse"),r.a.createElement("input",{id:"photo",type:"file",name:"photo",onChange:function(e){t(e,l)}}),r.a.createElement("span",{className:"hint ".concat(n.length>0?"error":"")},n.length>0&&n)))}),O=(a(41),function(e){var t=e.close,a=e.requestFromServer;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modalBody"},r.a.createElement("span",{onClick:t},"\xd7"),r.a.createElement("h3",null,a.success?"Congratulations":"Oops"),r.a.createElement("p",null,a.message),a.fails&&Object.values(a.fails).map((function(e,t){return r.a.createElement("p",{key:t},e[0])})),r.a.createElement("button",{className:"button buttonFrst",onClick:t},"Great"))))}),V=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(N.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).state={positions:"",name:"",email:"",phone:"",radio:1,photo:"",formErrors:{email:"",name:"",phone:"",photo:""},nameValid:!1,emailValid:!1,phoneValid:!1,photoValid:!1,formValid:!1,token:"",modal:!1,failsFromServer:[]},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name,l=t.files,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},i=a.state.positions.filter((function(e){return e.id==r})).pop(),s=void 0!=i&&i.id,c=a.props.inputs.filter((function(e){return e.name===r})),m=c.length>0&&c.pop().name;a.setState((function(){switch(r){case"".concat(s):return{radio:s};case m:return Object(k.a)({},m,n);default:return Object(k.a)({},r,l[0])}}),o(r,n,l))},a.validationFields=function(e,t,n){var r=a.state.formErrors,l=a.state.nameValid,o=a.state.emailValid,i=a.state.phoneValid,s=a.state.photoValid,c=null!=n&&void 0!=n&&n[0].name.indexOf(".");switch(e){case"name":l=t.length<2?"too short":t.length>60?"too large":"",r.name=l;break;case"email":o=t.length<2?"too short":t.length>100?"too large":t.match(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i)?"":"invalid email",r.email=o;break;case"phone":i=t.match(/^[\+]{0,1}380([0-9]{9})$/i)?"":"invalid number",r.password=i;break;case"photo":s=("jpeg"===n[0].name.substr(c+1)||"jpg"===n[0].name.substr(c+1))&&n[0].size<5e6?"":"photo must be jpg or jpeg format and maxim size 5 mb",r.password=s}a.setState({formErrors:r,nameValid:l,emailValid:o,phoneValid:i,photoValid:s},a.validateForm(l,o,i,s))},a.validateForm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t);var r=0;t.map((function(e){return""===e})).forEach((function(e){!0===e?r++:r--,console.log(!0===e)})),4===r?a.setState({formValid:!0}):a.setState({formValid:!1})},a.handleSubmit=function(){var e=Object(c.a)(s.a.mark((function e(t,n){var r,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new FormData).append("name",a.state.name),r.append("email",a.state.email),r.append("phone",a.state.phone),r.append("position_id",a.state.radio),r.append("photo",a.state.photo),r.append("token",a.state.token),e.next=10,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:r,headers:{Token:a.state.token}});case 10:return l=e.sent,e.next=13,l.json();case 13:return o=e.sent,a.setState({failsFromServer:o}),e.next=17,n("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=".concat(window.innerWidth>767?6:3));case 17:a.setState({name:"",email:"",phone:"",radio:1,photo:"",modal:!0,nameValid:!1,emailValid:!1,phoneValid:!1,photoValid:!1,formValid:!1}),a.validateForm(1,1,1,1);case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.modalClose=function(e){e.preventDefault(),a.setState({modal:!1})},a}return Object(z.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token").then((function(e){return e.json()})).then((function(t){return e.setState({token:t.token})})),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then((function(e){return e.json()})).then((function(t){return e.setState({positions:t.positions})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.inputs,n=t.getUser;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t,n)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 offset-lg-3 col-md-8 offset-md-2"},a.map((function(t,a){return r.a.createElement(C,{type:t.type,name:t.name,label:t.label,placeholder:t.placeholder,value:e.state[t.name],handleChange:e.handleChange,hint:t.hint,error:e.state["".concat(t.name,"Valid")],key:a,onBlur:function(){return e.validationFields(t.name,e.state[t.name])}})})),r.a.createElement(j,{values:this.state.positions,handleChange:this.handleChange,position:this.state.radio}),r.a.createElement(F,{value:this.state.photo,handleChange:this.handleChange,error:this.state.photoValid,onBlur:this.validationFields}),r.a.createElement("button",{className:"button ".concat(this.state.formValid?"buttonFrst":"buttonDis"),disabled:!this.state.formValid},"Sing up now"),this.state.modal&&r.a.createElement(O,{close:this.modalClose,requestFromServer:this.state.failsFromServer}))))}}]),t}(r.a.Component),_=(a(42),r.a.forwardRef((function(e,t){var a=e.getUser,n=e.inputs,l=e.windowSize;return r.a.createElement("section",{className:"signUp",ref:t},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",null,"Register to get a work"),r.a.createElement("p",null,"Attention! After successful registration",l<361&&r.a.createElement("br",null)," and alert, update the ",l>767&&r.a.createElement("br",null)," list of users in the block from the top"),r.a.createElement(V,{getUser:a,inputs:n})))}))),B=(a(43),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 abz.agency specially for the test task")))});a(44),a(45),a(46);var T=function(e){var t=e.store,a=t.inputs,l=t.nav,o=r.a.createRef(),i=r.a.useState(!0),u=Object(m.a)(i,2),p=u[0],d=u[1],h=r.a.useState([]),g=Object(m.a)(h,2),b=g[0],k=g[1],y=r.a.useState(0),x=Object(m.a)(y,2),N=x[0],S=x[1],z=r.a.useState(window.innerWidth>767?6:3),C=Object(m.a)(z,2),j=C[0],F=C[1];Object(n.useLayoutEffect)((function(){function e(){S(window.innerWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var O=function(e){return new Promise((function(t,a){var n=new Image;n.src=e,n.onload=function(){t(200)},n.onerror=function(){a(404)}}))},V=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n,r,l=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=".concat(j),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=[],e.next=10,Promise.all(n.users.map(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,n,l,o,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.photo,l=t.name,o=t.position,i=t.email,c=t.phone,e.prev=1,e.next=4,O(n);case 4:if(e.t0=e.sent,e.t1=200===e.t0,!e.t1){e.next=8;break}r.push({id:a,photo:n,name:l,position:o,email:i,phone:c});case 8:e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),r.push({id:a,photo:"https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/875287/KWisospOp6X8AlxD9TKrRg.jpg",name:l,position:o,email:i,phone:c});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()));case 10:k(r),F(window.innerWidth>767?j+=6:j+=3),n.links.next_url?d(!0):d(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=setInterval((function(){window.pageYOffset<e.current.offsetTop?window.scrollBy(0,100):clearInterval(t)}),20)};return Object(n.useEffect)((function(){V()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{links:l,windowSize:N}),r.a.createElement(v,{windowSize:N,s:!0,scrollToBlock:function(){return T(o)}}),r.a.createElement(E,{windowSize:N,scrollToBlock:function(){return T(o)}}),r.a.createElement(w,{users:b.length>0&&b,onClick:function(){return V()},hide:p}),r.a.createElement(_,{inputs:a,getUser:V,windowSize:N,ref:o}),r.a.createElement(B,null))};o.a.render(r.a.createElement(T,{store:{nav:[{id:1,link:"About me",path:"/"},{id:2,link:"Relationships",path:"rfref"},{id:3,link:"Requirements",path:"rfrqf"},{id:4,link:"Users",path:"rfrrf"},{id:5,link:"Sign Up",path:"rrft"}],inputs:[{type:"text",placeholder:"Your name",label:"Name",name:"name",hint:""},{type:"email",placeholder:"Your email",label:"Email",name:"email",hint:""},{type:"tel",placeholder:"+380 XX XXX XX XX",label:"Phone number",name:"phone",hint:"Enter phone number in open format"}]}}),document.getElementById("root"))}]),[[20,1,2]]]);
//# sourceMappingURL=main.1e2ead5d.chunk.js.map
