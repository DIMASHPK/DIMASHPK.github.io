(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i),s=n(6),l=n(5),o=n(10),u=n.n(o),d=n(8),m=n(13),f=n(11),h=n(20),g=n(21),p=n(25),E=n(22),v=n(26),b=r.a.createContext(),w=n(16),y=function(){var e=r.a.useContext(b),t=e.handleChange,n=e.value;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",onChange:t,value:n,placeholder:"chose filter and then enter value..."}))},k=function(e){var t=e.toggleSortingFilter,n=e.applySort,a=e.visibleSort,i=r.a.useContext(b),c=i.sorts,s=i.sort;return r.a.createElement("div",{className:"sort ".concat(a?"noRadius":""),onClick:t},r.a.createElement("div",{className:"activeSort"},"sorting by",s?" ".concat(s):"..."),a&&r.a.createElement("div",{className:"possibleSorts"},c.map((function(e){return r.a.createElement("div",{className:"sortOption",key:e.id,onClick:function(){n(e.name)}},e.name)}))))},F=function(e){var t=e.toggleFilters,n=e.visibleFilters,a=e.applyFilter,i=r.a.useContext(b),c=i.filters,s=i.filter;return r.a.createElement("div",{className:"filters ".concat(n?"noRadius":""),onClick:t},r.a.createElement("div",{className:"activeSort"},"filters by",s?" ".concat(s):"..."),n&&r.a.createElement("div",{className:"possibleFilters"},c.map((function(e){return r.a.createElement("div",{className:"sortOption",key:e.id,onClick:function(){return a(e.name)}},e.name)}))))},S=(n(33),function(){var e=r.a.useState(!1),t=Object(w.a)(e,2),n=t[0],a=t[1],i=r.a.useState(!1),c=Object(w.a)(i,2),s=c[0],l=c[1],o=r.a.useContext(b),u=o.sortFriends,d=o.getFilter,m=o.getSort,f=function(){return a(!n)},h=function(){return l(!s)};return r.a.createElement("section",{className:"searchingSection"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"searchingPanel"},r.a.createElement(y,null),r.a.createElement(k,{toggleSortingFilter:f,applySort:function(e){m(e),u(e),f()},visibleSort:n}),r.a.createElement(F,{toggleFilters:h,visibleFilters:s,applyFilter:function(e){d(e),h()}})))))}),N=(n(34),function(e){var t=e.idForLink,n=e.id,a=e.img,i=e.name,c=e.age,s=e.house,o=e.gender,u=e.clickId;return r.a.createElement("div",{className:"col-lg-4 col-md-6"},r.a.createElement(l.b,{to:"/acropolium/build/friend/".concat(t)},r.a.createElement("div",{className:"friend",onClick:function(){return u(n)}},r.a.createElement("div",{className:"avatarWrap"},r.a.createElement("img",{src:a,alt:"avatar",title:"avatar of friend"})),r.a.createElement("div",{className:"contentWrap"},r.a.createElement("h3",{className:"name"},i),r.a.createElement("p",null,"created: ",c||"unknown"),r.a.createElement("p",null,"house: ",s||"unknown"),r.a.createElement("p",null,"gender: ",o)))))}),j=(n(40),function(){return r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),O=(n(41),function(){var e=r.a.useContext(b),t=e.friends,n=e.clickId,a=e.isFetching,i=e.searchBy,c=e.filterBy;return r.a.createElement("section",{className:"allFriends"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"All friends"),r.a.createElement("div",{className:"row"},t.map((function(e,t){var a=e.id,s=e.image,l=(e.actor,e.yearOfBirth,e.created),o=e.name,u=e.location,d=e.gender,m=e.status;return r.a.createElement(r.a.Fragment,{key:a},i(o)&&c(m,d)&&r.a.createElement(N,{id:a,idForLink:t,img:s,name:o,age:new Date(l).toLocaleDateString(),house:u.name,gender:d,key:a,clickId:n,status:m}))})))),a&&r.a.createElement(j,null))}),x=(n(42),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(O,null))}),C=(n(43),function(e){var t=e.friend;return r.a.createElement("div",null,t&&r.a.createElement("section",{className:"friendPage"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Friend Page"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-3"},r.a.createElement("img",{src:t.image,alt:"avatar",title:"avatar"})),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,t.name?t.name:"unknown"),r.a.createElement("p",null,"gender: ",t.gender?t.gender:"unknown"),r.a.createElement("p",null,"house: ",t.location.name?t.location.name:"unknown"),r.a.createElement("p",null,"species: ",t.species?t.species:"unknown"),r.a.createElement("p",null,"created: ",t.created?new Date(t.created).toLocaleDateString():"unknown"),r.a.createElement("p",null,"alive: ","".concat(t.status?t.status:"unknown")),r.a.createElement(l.b,{to:"/acropolium/build/"},"Main page"))),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"txt"},"Whenever I am asked to explain the appeal of \u201cRick and Morty,\u201d I propose a thought experiment.",r.a.createElement("br",null),"Imagine that you grew up with the world\u2019s tragedies being beamed into your living room by 24-hour cable news. Your country has been at war for much your lifetime. You graduated college with a huge amount of debt, and you entered the work force during the recent financial crisis. Imagine, too, that the world\u2019s ecological crisis weighs heavily on your mind and that you spend as much time on the internet as you do speaking to real human beings.",r.a.createElement("br",null),"If you were this sort of person, what television show would resonate with you?",r.a.createElement("br",null),"\u201cRick and Morty,\u201d the Adult Swim animated comedy by Justin Roiland and Dan Harmon, just might be the answer.",r.a.createElement("br",null),"It is dark, even to the point of being nihilistic; it is absurdist; and it operates less like a novel or serial drama and more like a meme or internet video. It also speaks to the sense of alienation, anxiety and skepticism that it not uncommon among younger Americans today.",r.a.createElement("br",null),"And it has just been renewed for 70 episodes. Adult Swim announced last week that as a part of an overall deal with the series creators, \u201cRick and Morty,\u201d which numbers 31 episodes in its first three seasons, will return for more than double that number."))))))}),I=(n(44),n(45),n(46),[{id:1,name:"default"},{id:2,name:"name ascending"},{id:3,name:"name descending"},{id:4,name:"age ascending"},{id:5,name:"age descending"}]),M=[{id:1,name:"default"},{id:2,name:"alive"},{id:3,name:"death"},{id:4,name:"status unknown"},{id:5,name:"female"},{id:6,name:"male"}],B=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(p.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;return n.setState({search:t})},n.searchBy=function(e){return e.includes(n.state.search)},n.getFilter=function(e){return n.setState({filter:e})},n.filterBy=function(e,t){switch(n.state.filter){case"alive":return"Alive"===e;case"death":return"Dead"===e;case"male":return"Male"===t;case"status unknown":return"unknown"===t;case"female":return"Female"===t;default:return!0}},n.getSort=function(e){return n.setState({sort:e})},n.sortFriends=function(e){switch(e){case"name ascending":return n.setState({friends:n.state.friends.sort((function(e,t){return e.name>t.name?-1:1}))});case"name descending":return n.setState({friends:n.state.friends.sort((function(e,t){return e.name>t.name?1:-1}))});case"age ascending":return n.setState({friends:n.state.friends.sort((function(e,t){return e.created>t.created?-1:1}))});case"age descending":return n.setState({friends:n.state.friends.sort((function(e,t){return e.created>t.created?1:-1}))});default:return n.setState({friends:n.state.defaultFriends.map((function(e){return Object(f.a)({},e)}))})}},n.getId=function(e){return n.setState({id:n.state.friends.findIndex((function(t){return t.id===e}))})},n.getMoreFriends=Object(m.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),!(window.pageYOffset+window.innerHeight===t&&n.state.page<6)){e.next=13;break}return n.setState({isFetching:!0}),e.next=6,fetch("https://rickandmortyapi.com/api/character/?page=".concat(n.state.page));case 6:return a=e.sent,e.next=9,a.json();case 9:r=(r=e.sent).results,n.setState({friends:[].concat(Object(d.a)(n.state.friends),Object(d.a)(r)),defaultFriends:[].concat(Object(d.a)(n.state.defaultFriends),Object(d.a)(r.map((function(e){return Object(f.a)({},e)})))),page:n.state.page+1}),setTimeout((function(){return n.setState({isFetching:!1})}),2e3);case 13:case"end":return e.stop()}}),e)}))),n.state={friends:[],defaultSort:[],search:"",filter:"",sort:"",id:0,isFetching:!0,page:2},n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,a,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=(n=e.sent).results,this.setState({friends:Object(d.a)(n),defaultFriends:n.map((function(e){return Object(f.a)({},e)}))}),setTimeout((function(){return r.setState({isFetching:!1})}),2e3),window.addEventListener("scroll",this.getMoreFriends),a=setInterval((function(){return r.state.page<6?window.innerHeight===document.body.scrollHeight&&r.getMoreFriends():clearInterval(a)}),200);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.friends,a=t.search,i=t.filter,c=t.isFetching,o=t.sort;return r.a.createElement(b.Provider,{value:{friends:n,clickId:this.getId,isFetching:c,handleChange:this.handleChange,value:a,searchBy:this.searchBy,filters:M,filter:i,getFilter:this.getFilter,filterBy:this.filterBy,sorts:I,sort:o,getSort:this.getSort,sortFriends:this.sortFriends}},r.a.createElement("header",null,r.a.createElement("div",{className:"container text-left"},r.a.createElement(l.b,{to:"/acropolium/build/"},r.a.createElement("h1",null,"My friends")))),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/acropolium/build/friend/".concat(this.state.id),render:function(){return r.a.createElement(C,{friend:e.state.friends[e.state.id]})}}),r.a.createElement(s.a,{path:"/acropolium/build/"},r.a.createElement(x,null))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"copyright"))))}}]),t}(r.a.Component);n(47);c.a.render(r.a.createElement(l.a,null,r.a.createElement((function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}),null),r.a.createElement(B,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b021d8a8.chunk.js.map