(this.webpackJsonpsoftindustry=this.webpackJsonpsoftindustry||[]).push([[0],[,,,function(e,t,n){e.exports={cityWrap:"City_cityWrap__2_EOj",buttons:"City_buttons__1Ra9p"}},,function(e,t,n){},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),o=n.n(r),c=(n(12),n(1)),l=(n(13),n(14),function(e){var t=e.countries,n=e.active,a=e.addCityFormClose;return i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"countries"},i.a.createElement("h2",null,"Countries"),t.map((function(e){return i.a.createElement("div",{onClick:function(){a(),n(e.id)},className:"wrap ".concat(e.active?"active":""),key:e.id},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.text),i.a.createElement("div",{className:"arrow"}))}))))}),d=n(2),s=n(3),u=n.n(s),m=function(e){var t=e.id,n=e.name,a=e.description,r=e.remove,o=e.edit;return i.a.createElement("div",{className:u.a.cityWrap},i.a.createElement("div",{className:"cityInfo"},i.a.createElement("h3",null,n),i.a.createElement("p",null,a)),i.a.createElement("div",{className:u.a.buttons},i.a.createElement("span",{onClick:function(){return o(t)}},"\ud83d\udd8c"),i.a.createElement("span",{onClick:function(){return r(t)}},"\ud83d\uddd1")))},f=(n(5),function(e){var t=e.addNewCityForm,n=e.setCity,a=e.handleChange,r=e.addNewCity;return i.a.createElement("div",{className:"addCityWrap"},i.a.createElement("h3",null,"Add city"),i.a.createElement("input",{name:"title",type:"text",placeholder:"City name...",value:n.title,onChange:a}),i.a.createElement("textarea",{name:"desc",cols:"30",rows:"4",placeholder:"City description...",value:n.title,onChange:a}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"buttonFrst",onClick:r},"Submit"),i.a.createElement("button",{className:"buttonScnd",onClick:t},"Cancel")))}),p=function(e){var t=e.id,n=e.cancelEdit,a=e.value,r=e.editCity,o=e.setEdit;return i.a.createElement("div",{className:"addCityWrap"},i.a.createElement("h3",null,"Change city"),i.a.createElement("input",{name:"title",type:"text",placeholder:"City name...",value:a[0],onChange:function(e){return r(t,e)}}),i.a.createElement("textarea",{name:"desc",cols:"30",rows:"4",placeholder:"City description...",value:a[1],onChange:function(e){return r(t,e)}}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"buttonFrst",onClick:function(){return o(t)}},"Submit"),i.a.createElement("button",{className:"buttonScnd",onClick:function(){return n(t)}},"Cancel")))},y=(n(15),function(e){var t=e.info,n=e.addCityForm,a=e.addCityFormOpen,r=e.addCityFormClose,o=i.a.useState(t.cities),l=Object(c.a)(o,2),s=l[0],u=l[1],y=i.a.useState([{title:"",desc:""}]),h=Object(c.a)(y,2),E=h[0],v=h[1],C=i.a.useState(s.map((function(e){return Object(d.a)({},e)}))),b=Object(c.a)(C,2),g=b[0],N=b[1],F=t.countries.filter((function(e){return e.active&&e.id})).pop(),w=function(e){u(s.filter((function(t){return t.id!==e})))},k=function(e){u(s.map((function(t){return t.id===e&&(t.edit=!t.edit),t})))},_=function(e,t){N(g.map((function(n){return n.id===e&&(n[t.target.name]=t.target.value),n})))},L=function(e){u(s=g.map((function(t){return t.id===e&&(t.edit=!0),Object(d.a)({},t)}))),N(g=s.map((function(e){return Object(d.a)({},e)})))},O=function(e){return N(g=s.map((function(e){return Object(d.a)({},e)}))),k(e)};return i.a.createElement("div",{className:"col-lg-9"},i.a.createElement("h2",null,"Cities"),i.a.createElement("div",{className:"citiesWrap"},!n&&i.a.createElement("div",{className:"buttonWrap"},i.a.createElement("button",{onClick:function(){return a()},className:"buttonFrst"},"+Add city")),n&&i.a.createElement(f,{addNewCityForm:function(){return r()},setCity:E,handleChange:function(e){v(E.map((function(t){return t[e.target.name]=e.target.value,t})))},addNewCity:function(){u(s=s.concat({edit:!0,id:s.length+1,country_id:F.id,title:E[0].title,desc:E[0].desc})),E[0].title="",E[0].desc="",r(),N(g=s.map((function(e){return Object(d.a)({},e)})))}}),s.map((function(e,t){var n;return n=e.edit?i.a.createElement(m,{name:e.title,description:e.desc,id:e.id,remove:w,edit:k}):i.a.createElement(p,{id:e.id,value:[g[t].title,g[t].desc],editCity:_,setEdit:L,cancelEdit:O}),i.a.createElement(i.a.Fragment,{key:e.id},e.country_id===F.id&&n)}))))}),h=function(e){var t=e.info,n=e.active,a=e.addCityForm,r=e.addCityFormOpen,o=e.addCityFormClose;return i.a.createElement("section",{className:"main"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(l,{countries:t.countries,active:n,addCityFormClose:o}),i.a.createElement(y,{info:t,addCityFormOpen:r,addCityFormClose:o,addCityForm:a}))))};n(16);var E=function(e){var t=e.info,n=i.a.useState(t.countries),a=Object(c.a)(n,2),r=a[0],o=a[1],l=i.a.useState(!1),d=Object(c.a)(l,2),s=d[0],u=d[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Countries of the world"))),i.a.createElement(h,{info:t,active:function(e){o(r.map((function(t){return t.active=t.id===e,t})))},addCityFormOpen:function(){return u(s=!0)},addCityFormClose:function(){return u(s=!1)},addCityForm:s}),i.a.createElement("footer",{className:"navbar-fixed-bottom row-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("h4",null,"test work"))))};o.a.render(i.a.createElement(E,{info:{countries:[{id:1,title:"United Kingdom",text:"The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe.",active:!0},{id:2,title:"France",text:"France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories.",active:!1},{id:3,title:"Spain",text:"Spain, officially the Kingdom of Spain, is a sovereign state located on the Iberian Peninsula in southwestern Europe.",active:!1},{id:4,title:"Germany",text:"Germany, officially the Federal Republic of Germany, is a federal parliamentary republic in western - central Europe.",active:!1}],cities:[{edit:!0,id:1,country_id:1,title:"London",desc:"London is the capital and largest city of England and of the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans.The City of London, London's ancient core \u2212 an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile \u2212 retains boundaries that closely follow its medieval limits. The City of Westminster is also an Inner London borough holding city status. Greater London is governed by the Mayor of London and the London Assembly."},{edit:!0,id:2,country_id:1,title:"Liverpool",desc:"Liverpool is a city and metropolitan borough in Merseyside, England. As of 2018, the population is approximately 494,814.[6][7] Liverpool is the ninth-largest English district by population, and the largest in Merseyside and the Liverpool City Region. It lies within the United Kingdom's sixth-most populous urban area. Liverpool's metropolitan area is the fifth-largest in the United Kingdom, with a population of 2.24 million.[8]\n\n"},{edit:!0,id:3,country_id:2,title:"Paris",desc:""},{edit:!0,id:4,country_id:3,title:"Madrid",desc:""},{edit:!0,id:5,country_id:4,title:"Berlin",desc:""},{edit:!0,id:6,country_id:4,title:"Munich",desc:""},{edit:!0,id:7,country_id:4,title:"Hamburg",desc:""}]}}),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.42459c4e.chunk.js.map