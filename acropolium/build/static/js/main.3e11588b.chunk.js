(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(24),s=a.n(i),l=a(12),o=a(6),u=a(3),m=a.n(u),d=a(17),f=a(15),h=a(13),g=a(7),p=a(8),v=a(10),E=a(9),_=a(11),b=a(21),y=(a(33),function(e){var t=e.handleChange,a=e.value;return c.a.createElement("div",{className:"panel__search"},c.a.createElement("input",{className:"panel__input",type:"text",onChange:t,value:a,placeholder:"chose filter and then enter value..."}))}),w=[{id:1,name:"default"},{id:2,header:"Sorting by name"},{id:3,name:"name ascending"},{id:4,name:"name descending"},{id:5,header:"Sorting by age"},{id:6,name:"age ascending"},{id:7,name:"age descending"}],F=function(e){var t=e.toggleSortingFilter,a=e.applySort,n=e.visibleSort,r=e.sort;return c.a.createElement("div",{className:"panel__features sorts ".concat(n?"noRadius":"")},c.a.createElement("button",{className:"panel__activeFeature",onClick:function(){return t()}},"sorting by",r?" ".concat(r):"..."),n&&c.a.createElement("div",{className:"panel__chooseFeatures"},w.map((function(e){var t=e.id,n=e.header,r=e.name;return n?c.a.createElement("p",{className:"panel__featuresHeader",key:t},n):c.a.createElement("div",{className:"panel__chooseFeature",key:t,onClick:function(){a(r)}},r)}))))},N=[{id:1,name:"default"},{id:2,header:"Filter by status"},{id:3,name:"alive"},{id:4,name:"death"},{id:5,name:"status unknown"},{id:6,header:"Filter by gender"},{id:7,name:"female"},{id:8,name:"male"}],k=function(e){var t=e.toggleFilters,a=e.visibleFilters,n=e.applyFilter,r=e.filter;return c.a.createElement("div",{className:"panel__features filters ".concat(a?"noRadius":"")},c.a.createElement("button",{className:"panel__activeFeature",onClick:function(){return t()}},"filters by",r?" ".concat(r):"..."),a&&c.a.createElement("div",{className:"panel__chooseFeatures"},N.map((function(e){var t=e.id,a=e.header,r=e.name;return a?c.a.createElement("p",{className:"panel__featuresHeader",key:t},a):c.a.createElement("div",{className:"panel__chooseFeature",key:t,onClick:function(){return n(r)}},r)}))))},j=(a(34),function(e){var t=e.resetAll;return c.a.createElement("button",{className:"panel__resetButton",onClick:t},"Reset all")}),O=(a(35),function(e){var t=e.getFilter,a=e.getSort,n=e.handleChange,r=e.value,i=e.filter,s=e.sort,l=e.resetAll,o=c.a.useState(!1),u=Object(b.a)(o,2),m=u[0],d=u[1],f=c.a.useState(!1),h=Object(b.a)(f,2),g=h[0],p=h[1],v=function(){return d(!m)},E=function(){return p(!g)};return c.a.createElement("section",{className:"searchingSection"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"searchingSection__panel panel"},c.a.createElement(y,{handleChange:n,value:r}),c.a.createElement(j,{resetAll:l}),c.a.createElement(F,{toggleSortingFilter:v,applySort:function(e){a(e),v()},visibleSort:m,sort:s}),c.a.createElement(k,{toggleFilters:E,visibleFilters:g,applyFilter:function(e){E(),t(e)},filter:i})))))}),S=(a(36),function(e){var t=e.id,a=e.img,n=e.name,r=e.age,i=e.house,s=e.gender,l=e.status;return c.a.createElement("div",{className:"col-lg-4 col-md-6"},c.a.createElement("div",{className:"allFriendsSection__friend friend"},c.a.createElement(o.b,{className:"friend__link",to:"/friend/".concat(t)},c.a.createElement("div",{className:"friend__avatarWrap"},c.a.createElement("img",{className:"friend__avatar",src:a,alt:"avatar",title:"avatar of friend"})),c.a.createElement("div",{className:"friend__contentWrap"},c.a.createElement("h3",{className:"friend__name"},n),c.a.createElement("p",{className:"friend__info"},"created: ",r||"unknown"),c.a.createElement("p",{className:"friend__info"},"house: ",i||"unknown"),c.a.createElement("p",{className:"friend__info"},"gender: ",s),c.a.createElement("p",{className:"friend__info"},"status: ",l)))))}),x=(a(42),function(){return c.a.createElement("div",{className:"preloader"},c.a.createElement("div",{className:"preloader__element"}),c.a.createElement("div",{className:"preloader__element"}),c.a.createElement("div",{className:"preloader__element"}),c.a.createElement("div",{className:"preloader__element"}))}),C=(a(43),function(e){var t=e.friends,a=e.isFetching,n=e.searchBy,r=e.filterBy,i=e.sortFriends,s=t.sort((function(e,t){return i(e,t)})).filter((function(e){var t=e.name,a=e.gender,c=e.status;return r(c,a)&&n(t)}));return c.a.createElement("section",{className:"allFriendsSection"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"allFriendsSection__title"},"All friends"),c.a.createElement("div",{className:"row"},s.length>0?s.map((function(e,t){var a=e.id,n=e.image,r=e.created,i=e.name,s=e.location,l=e.gender,o=e.status;return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement(S,{id:a,img:n,name:i,age:new Date(r).toLocaleDateString(),house:s.name,gender:l,key:a,status:o}))})):c.a.createElement("h3",{className:"allFriendsSection__noSuchFriends"},"No such friends"))),a&&c.a.createElement(x,null))}),A=(a(44),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).searchBy=function(e){return e.includes(a.props.value)},a.sortFriends=function(e,t){switch(a.props.sort){case"name ascending":return e.name>t.name?-1:1;case"name descending":return e.name>t.name?1:-1;case"age ascending":return e.created>t.created?-1:1;case"age descending":default:return e.created>t.created?1:-1}},a.filterBy=function(e,t){switch(a.props.filter){case"alive":return"Alive"===e;case"death":return"Dead"===e;case"male":return"Male"===t;case"status unknown":return"unknown"===t;case"female":return"Female"===t;default:return!0}},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.friends,a=e.isFetching,n=e.value,r=e.handleChange,i=e.sort,s=e.getSort,l=e.filter,o=e.getFilter,u=e.resetAll;return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{getFilter:o,getSort:s,handleChange:r,value:n,filter:l,sort:i,resetAll:u}),c.a.createElement(C,{friends:t,isFetching:a,searchBy:this.searchBy,sortFriends:this.sortFriends,filterBy:this.filterBy}))}}]),t}(c.a.Component)),M=(a(45),Object(l.g)((n=function(e){var t=e.friend,a=e.isFetching;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement(x,null):c.a.createElement("section",{className:"friendPage"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"friendPage__title"},"Friend Page"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("img",{className:"friendPage__avatar",src:t.image,alt:"avatar",title:"avatar"})),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"friendPage__content"},c.a.createElement("h3",{className:"friendPage__name"},t.name?t.name:"unknown"),c.a.createElement("p",{className:"friendPage__info"},"gender: ",t.gender?t.gender:"unknown"),c.a.createElement("p",{className:"friendPage__info"},"house:"," ",t.location.name?t.location.name:"unknown"),c.a.createElement("p",{className:"friendPage__info"},"species: ",t.species?t.species:"unknown"),c.a.createElement("p",{className:"friendPage__info"},"created:"," ",t.created?new Date(t.created).toLocaleDateString():"unknown"),c.a.createElement("p",{className:"friendPage__info"},"alive: ","".concat(t.status?t.status:"unknown")),c.a.createElement(o.b,{className:"friendPage__link",to:"/"},"Main page"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("p",{className:"friendPage__text"},"Whenever I am asked to explain the appeal of \u201cRick and Morty,\u201d I propose a thought experiment.",c.a.createElement("br",null),"Imagine that you grew up with the world\u2019s tragedies being beamed into your living room by 24-hour cable news. Your country has been at war for much your lifetime. You graduated college with a huge amount of debt, and you entered the work force during the recent financial crisis. Imagine, too, that the world\u2019s ecological crisis weighs heavily on your mind and that you spend as much time on the internet as you do speaking to real human beings.",c.a.createElement("br",null),"If you were this sort of person, what television show would resonate with you?",c.a.createElement("br",null),"\u201cRick and Morty,\u201d the Adult Swim animated comedy by Justin Roiland and Dan Harmon, just might be the answer.",c.a.createElement("br",null),"It is dark, even to the point of being nihilistic; it is absurdist; and it operates less like a novel or serial drama and more like a meme or internet video. It also speaks to the sense of alienation, anxiety and skepticism that it not uncommon among younger Americans today.",c.a.createElement("br",null),"And it has just been renewed for 70 episodes. Adult Swim announced last week that as a part of an overall deal with the series creators, \u201cRick and Morty,\u201d which numbers 31 episodes in its first three seasons, will return for more than double that number."))))))},function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).getFriend=Object(h.a)(m.a.mark((function e(){var t,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.pathname,n=t.substr(Array.from(t.matchAll(/\//g))[1].index+1),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,a.setState({friend:Object(d.a)({},c),isFetching:!1});case 9:case"end":return e.stop()}}),e)}))),a.state={friend:{},isFetching:!0},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFriend();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(n,this.state)}}]),t}(c.a.Component)))),P=(a(46),a(47),a(48),function(e){return function(t){function a(e){var t;return Object(g.a)(this,a),(t=Object(v.a)(this,Object(E.a)(a).call(this,e))).getFriends=Object(h.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/");case 2:return a=e.sent,e.next=5,a.json();case 5:n=(n=e.sent).results,t.setState({friends:Object(f.a)(n),defaultFriends:Object(f.a)(n.map((function(e){return Object(d.a)({},e)})))}),setTimeout((function(){return t.setState({isFetching:!1})}),2e3);case 9:case"end":return e.stop()}}),e)}))),t.getMoreFriends=Object(h.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isFetching:!0}),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=".concat(t.state.page));case 3:return a=e.sent,e.next=6,a.json();case 6:n=(n=e.sent).results,t.setState({friends:[].concat(Object(f.a)(t.state.friends),Object(f.a)(n)),defaultFriends:[].concat(Object(f.a)(t.state.defaultFriends),Object(f.a)(n.map((function(e){return Object(d.a)({},e)})))),page:t.state.page+1}),setTimeout((function(){return t.setState({isFetching:!1})}),2e3);case 10:case"end":return e.stop()}}),e)}))),t.getMoreFriendsOnScroll=function(){var e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);window.pageYOffset+window.innerHeight===e&&t.state.page<6&&t.getMoreFriends()},t.getMoreFriendswithoutScroll=function(){var e=setInterval((function(){return t.state.page<6?window.innerHeight===document.body.scrollHeight&&t.getMoreFriends():clearInterval(e)}),200)},t.state={friends:[],defaultFriends:[],page:2,isFetching:!0},t}return Object(_.a)(a,t),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFriends(),window.addEventListener("scroll",this.getMoreFriendsOnScroll),this.getMoreFriendswithoutScroll();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement(e,this.state)}}]),a}(c.a.Component)}(function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;return a.setState({value:t})},a.getSort=function(e){return a.setState({sort:e})},a.getFilter=function(e){return a.setState({filter:e})},a.resetAll=function(){return a.setState({value:"",filter:"",sort:""})},a.state={value:"",filter:"",sort:""},a}return Object(_.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.friends,n=t.isFetching,r=this.state,i=r.value,s=r.filter,u=r.sort;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container text-left"},c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("h1",{className:"header__title"},"Myfriends ")))),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/friend/",render:function(){return c.a.createElement(M,null)}}),c.a.createElement(l.a,{path:"/",render:function(){return c.a.createElement(A,{friends:a,isFetching:n,value:i,handleChange:e.handleChange,sort:u,getSort:e.getSort,filter:s,getFilter:e.getFilter,resetAll:e.resetAll})}})),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:"footer__text"},"copyright"))))}}]),t}(c.a.Component)));s.a.render(c.a.createElement(o.a,null,c.a.createElement((function(){var e=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}),null),c.a.createElement(P,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3e11588b.chunk.js.map