(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),c=a(24),s=a.n(c),l=a(12),o=a(6),u=a(4),m=a.n(u),d=a(17),f=a(16),h=a(14),g=a(7),p=a(8),v=a(10),E=a(9),_=a(11),b=a(21),y=(a(33),function(e){var t=e.handleChange,a=e.value;return i.a.createElement("div",{className:"panel__search"},i.a.createElement("input",{className:"panel__input",type:"text",onChange:t,value:a,placeholder:"chose filter and then enter value..."}))}),w=[{id:1,name:"default"},{id:2,header:"Sorting by name"},{id:3,name:"name ascending"},{id:4,name:"name descending"},{id:5,header:"Sorting by age"},{id:6,name:"age ascending"},{id:7,name:"age descending"}],N=function(e){var t=e.toggleSortingFilter,a=e.applySort,n=e.visibleSort,r=e.sort;return i.a.createElement("div",{className:"panel__features sorts ".concat(n?"noRadius":"")},i.a.createElement("button",{className:"panel__activeFeature",onClick:function(){return t()}},"sorting by",r?" ".concat(r):"..."),n&&i.a.createElement("div",{className:"panel__chooseFeatures"},w.map((function(e){var t=e.id,n=e.header,r=e.name;return n?i.a.createElement("p",{className:"panel__featuresHeader",key:t},n):i.a.createElement("div",{className:"panel__chooseFeature",key:t,onClick:function(){a(r)}},r)}))))},F=[{id:1,name:"default"},{id:2,header:"Filter by status"},{id:3,name:"alive"},{id:4,name:"death"},{id:5,name:"status unknown"},{id:6,header:"Filter by gender"},{id:7,name:"female"},{id:8,name:"male"}],k=function(e){var t=e.toggleFilters,a=e.visibleFilters,n=e.applyFilter,r=e.filter;return i.a.createElement("div",{className:"panel__features filters ".concat(a?"noRadius":"")},i.a.createElement("button",{className:"panel__activeFeature",onClick:function(){return t()}},"filters by",r?" ".concat(r):"..."),a&&i.a.createElement("div",{className:"panel__chooseFeatures"},F.map((function(e){var t=e.id,a=e.header,r=e.name;return a?i.a.createElement("p",{className:"panel__featuresHeader",key:t},a):i.a.createElement("div",{className:"panel__chooseFeature",key:t,onClick:function(){return n(r)}},r)}))))},j=(a(34),function(e){var t=e.resetAll;return i.a.createElement("button",{className:"panel__resetButton",onClick:t},"Reset all")}),S=(a(35),function(e){var t=e.getFilter,a=e.getSort,n=e.handleChange,r=e.value,c=e.filter,s=e.sort,l=e.resetAll,o=i.a.useState(!1),u=Object(b.a)(o,2),m=u[0],d=u[1],f=i.a.useState(!1),h=Object(b.a)(f,2),g=h[0],p=h[1],v=function(){return d(!m)},E=function(){return p(!g)};return i.a.createElement("section",{className:"searchingSection"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"searchingSection__panel panel"},i.a.createElement(y,{handleChange:n,value:r}),i.a.createElement(j,{resetAll:l}),i.a.createElement(N,{toggleSortingFilter:v,applySort:function(e){a(e),v()},visibleSort:m,sort:s}),i.a.createElement(k,{toggleFilters:E,visibleFilters:g,applyFilter:function(e){E(),t(e)},filter:c})))))}),O=(a(36),function(e){var t=e.id,a=e.img,n=e.name,r=e.age,c=e.house,s=e.gender,l=e.status;return i.a.createElement("div",{className:"col-lg-4 col-md-6"},i.a.createElement("div",{className:"allFriendsSection__friend friend"},i.a.createElement(o.b,{className:"friend__link",to:"/friend/".concat(t)},i.a.createElement("div",{className:"friend__avatarWrap"},i.a.createElement("img",{className:"friend__avatar",src:a,alt:"avatar",title:"avatar of friend"})),i.a.createElement("div",{className:"friend__contentWrap"},i.a.createElement("h3",{className:"friend__name"},n),i.a.createElement("p",{className:"friend__info"},"created: ",r||"unknown"),i.a.createElement("p",{className:"friend__info"},"house: ",c||"unknown"),i.a.createElement("p",{className:"friend__info"},"gender: ",s),i.a.createElement("p",{className:"friend__info"},"status: ",l)))))}),x=(a(42),function(){return i.a.createElement("div",{className:"preloader"},i.a.createElement("div",{className:"preloader__element"}),i.a.createElement("div",{className:"preloader__element"}),i.a.createElement("div",{className:"preloader__element"}),i.a.createElement("div",{className:"preloader__element"}))}),C=(a(43),function(e){var t=e.friends,a=e.isFetching,n=e.searchBy,r=e.filterBy,c=e.sortFriends,s=t.sort((function(e,t){return c(e,t)})).filter((function(e){var t=e.name,a=e.gender,i=e.status;return r(i,a)&&n(t)}));return i.a.createElement("section",{className:"allFriendsSection"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"allFriendsSection__title"},"All friends"),i.a.createElement("div",{className:"row"},s.length>0?s.map((function(e){var t=e.id,a=e.image,n=e.created,r=e.name,c=e.location,s=e.gender,l=e.status;return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(O,{id:t,img:a,name:r,age:new Date(n).toLocaleDateString(),house:c.name,gender:s,key:t,status:l}))})):i.a.createElement("h3",{className:"allFriendsSection__noSuchFriends"},"No such friends"))),a&&i.a.createElement(x,null))}),A=(a(44),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).searchBy=function(e){return e.includes(a.props.value)},a.sortFriends=function(e,t){switch(a.props.sort){case"name ascending":return e.name>t.name?-1:1;case"name descending":return e.name>t.name?1:-1;case"age ascending":return e.created>t.created?1:-1;case"age descending":return e.created>t.created?-1:1;default:return e.created>t.created?1:-1}},a.filterBy=function(e,t){switch(a.props.filter){case"alive":return"Alive"===e;case"death":return"Dead"===e;case"male":return"Male"===t;case"status unknown":return"unknown"===t;case"female":return"Female"===t;default:return!0}},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.friends,a=e.isFetching,n=e.value,r=e.handleChange,c=e.sort,s=e.getSort,l=e.filter,o=e.getFilter,u=e.resetAll;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{getFilter:o,getSort:s,handleChange:r,value:n,filter:l,sort:c,resetAll:u}),i.a.createElement(C,{friends:t,isFetching:a,searchBy:this.searchBy,sortFriends:this.sortFriends,filterBy:this.filterBy}))}}]),t}(i.a.Component)),P=(a(45),Object(l.g)((n=function(e){var t=e.friend,a=e.isFetching;return i.a.createElement(i.a.Fragment,null,a?i.a.createElement(x,null):i.a.createElement("section",{className:"friendPage"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"friendPage__title"},"Friend Page"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3 col-md-3"},i.a.createElement("img",{className:"friendPage__avatar",src:t.image,alt:"avatar",title:"avatar"})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"friendPage__content"},i.a.createElement("h3",{className:"friendPage__name"},t.name?t.name:"unknown"),i.a.createElement("p",{className:"friendPage__info"},"gender: ",t.gender?t.gender:"unknown"),i.a.createElement("p",{className:"friendPage__info"},"house:"," ",t.location.name?t.location.name:"unknown"),i.a.createElement("p",{className:"friendPage__info"},"species: ",t.species?t.species:"unknown"),i.a.createElement("p",{className:"friendPage__info"},"created:"," ",t.created?new Date(t.created).toLocaleDateString():"unknown"),i.a.createElement("p",{className:"friendPage__info"},"alive: ","".concat(t.status?t.status:"unknown")),i.a.createElement(o.b,{className:"friendPage__link",to:"/"},"Main page"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("p",{className:"friendPage__text"},"Whenever I am asked to explain the appeal of \u201cRick and Morty,\u201d I propose a thought experiment.",i.a.createElement("br",null),"Imagine that you grew up with the world\u2019s tragedies being beamed into your living room by 24-hour cable news. Your country has been at war for much your lifetime. You graduated college with a huge amount of debt, and you entered the work force during the recent financial crisis. Imagine, too, that the world\u2019s ecological crisis weighs heavily on your mind and that you spend as much time on the internet as you do speaking to real human beings.",i.a.createElement("br",null),"If you were this sort of person, what television show would resonate with you?",i.a.createElement("br",null),"\u201cRick and Morty,\u201d the Adult Swim animated comedy by Justin Roiland and Dan Harmon, just might be the answer.",i.a.createElement("br",null),"It is dark, even to the point of being nihilistic; it is absurdist; and it operates less like a novel or serial drama and more like a meme or internet video. It also speaks to the sense of alienation, anxiety and skepticism that it not uncommon among younger Americans today.",i.a.createElement("br",null),"And it has just been renewed for 70 episodes. Adult Swim announced last week that as a part of an overall deal with the series creators, \u201cRick and Morty,\u201d which numbers 31 episodes in its first three seasons, will return for more than double that number."))))))},function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).getFriend=Object(h.a)(m.a.mark((function e(){var t,n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.pathname,n=t.substr(Array.from(t.matchAll(/\//g))[1].index+1),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,a.setState({friend:Object(d.a)({},i),isFetching:!1});case 9:case"end":return e.stop()}}),e)}))),a.state={friend:{},isFetching:!0},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFriend();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(n,this.state)}}]),t}(i.a.Component)))),H=(a(46),a(47),a(48),function(e){return function(t){function a(e){var t;return Object(g.a)(this,a),(t=Object(v.a)(this,Object(E.a)(a).call(this,e))).getFriends=Object(h.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isFetching:!0,page:t.state.page+1}),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=".concat(t.state.page));case 3:return a=e.sent,e.next=6,a.json();case 6:n=(n=e.sent).results,t.setState({friends:[].concat(Object(f.a)(t.state.friends),Object(f.a)(n)),defaultFriends:[].concat(Object(f.a)(t.state.defaultFriends),Object(f.a)(n.map((function(e){return Object(d.a)({},e)}))))}),setTimeout((function(){return t.setState({isFetching:!1})}),2e3);case 10:case"end":return e.stop()}}),e)}))),t.getFriendsOnScroll=function(){var e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);window.pageYOffset+window.innerHeight===e&&t.state.page<5&&t.getFriends()},t.getFriendswithoutScroll=function(){var e=setInterval((function(){return t.state.page<5?window.innerHeight===document.body.scrollHeight&&t.getFriends():clearInterval(e)}),200)},t.state={friends:[],defaultFriends:[],page:0,isFetching:!0},t}return Object(_.a)(a,t),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFriends(),window.addEventListener("scroll",this.getFriendsOnScroll),this.getFriendswithoutScroll();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement(e,this.state)}}]),a}(i.a.Component)}(function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;return a.setState({value:t})},a.getSort=function(e){return a.setState({sort:e})},a.getFilter=function(e){return a.setState({filter:e})},a.resetAll=function(){return a.setState({value:"",filter:"",sort:""})},a.state={value:"",filter:"",sort:""},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.friends,n=t.isFetching,r=this.state,c=r.value,s=r.filter,u=r.sort;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"container text-left"},i.a.createElement(o.b,{to:"/",className:"header__link"},i.a.createElement("h1",{className:"header__title"},"Myfriends ")))),i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/friend/",render:function(){return i.a.createElement(P,null)}}),i.a.createElement(l.a,{path:"/",render:function(){return i.a.createElement(A,{friends:a,isFetching:n,value:c,handleChange:e.handleChange,sort:u,getSort:e.getSort,filter:s,getFilter:e.getFilter,resetAll:e.resetAll})}})),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"footer__text"},"copyright"))))}}]),t}(i.a.Component)));console.log(""),s.a.render(i.a.createElement(o.a,{basename:"https://dimashpk.github.io/"},i.a.createElement((function(){var e=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}),null),i.a.createElement(H,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.65cb8355.chunk.js.map