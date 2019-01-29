(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(65)},62:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),o=t.n(c),l=t(7),s=t(8),i=t(10),m=t(9),u=t(11),p=t(67),h=t(69),d=t(68),f=t(66),b=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))},E=t(3),v=t.n(E),y=t(12),g=t(30),N=t(13),C=t.n(N),O=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return{contacts:e.contacts.filter(function(e){return e.id!==a.payload})};case"ADD_CONTACT":return{contacts:[a.payload].concat(Object(g.a)(e.contacts))};case"UPDATE_CONTACT":return{contacts:e.contacts.map(function(e){return e.id===a.payload.id?a.payload:e})};default:return e}},k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),w=O.Consumer,x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(y.a)(v.a.mark(function e(a,t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a});case 4:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.name,n=a.email,c=a.phone,o=a.id,l=this.state.showContactInfo;return r.a.createElement(w,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,t," ",r.a.createElement("i",{className:"fas fa-sort-down",onClick:e.onShowClick,style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{color:"red",float:"right",cursor:"pointer"},onClick:e.onDeleteClick.bind(e,o,s)}),r.a.createElement(f.a,{to:"contact/edit/".concat(o)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{color:"black",cursor:"pointer",float:"right",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",n),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)):null)})}}]),a}(n.Component),A=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),a}(n.Component),S=t(15),T=t(14);function D(e){var a=e.label,t=e.type,n=e.name,c=e.placeholder,o=e.value,l=e.onChange,s=e.error,i="form-control form-control-lg";return s&&(i+=" is-invalid"),r.a.createElement("div",{className:"form-group invalid"},r.a.createElement("label",{htmlFor:n},a),r.a.createElement("input",{type:t,name:n,className:i,placeholder:c,value:o,onChange:l}),r.a.createElement("div",{className:"invalid-feedback"},s))}D.defaultProps={type:"text"};var P=D,q=t(16),_=t.n(q),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(y.a)(v.a.mark(function e(a,n){var r,c,o,l,s,i,m;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,s={},""===c&&(s={name:"Name is required"}),""===o&&(s=Object(S.a)({},s,{email:"Email is required"})),""===l&&(s=Object(S.a)({},s,{phone:"Phone is required"})),console.log(_.a.isEmpty(s)),_.a.isEmpty(s)){e.next=11;break}t.setState({errors:s}),e.next=18;break;case 11:return i={name:c,email:o,phone:l},e.next=14,C.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:m=e.sent,a({type:"ADD_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",placeholder:"Enter Name...",name:"name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",placeholder:"Enter Email...",name:"email",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",placeholder:"Enter Phone...",name:"phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-lg btn-light btn-block"}))))})}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(y.a)(v.a.mark(function e(a,n){var r,c,o,l,s,i,m,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,s={},""===c&&(s={name:"Name is required"}),""===o&&(s=Object(S.a)({},s,{email:"Email is required"})),""===l&&(s=Object(S.a)({},s,{phone:"Phone is required"})),console.log(_.a.isEmpty(s)),_.a.isEmpty(s)){e.next=11;break}t.setState({errors:s}),e.next=19;break;case 11:return i={name:c,email:o,phone:l},m=t.props.match.params.id,e.next=15,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(m),i);case 15:u=e.sent,a({type:"UPDATE_CONTACT",payload:u.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(v.a.mark(function e(){var a,t,n,r,c,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(w,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",placeholder:"Enter Name...",name:"name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",placeholder:"Enter Email...",name:"email",value:n,onChange:e.onChange,type:"email",error:o.email}),r.a.createElement(P,{label:"Phone",placeholder:"Enter Phone...",name:"phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-lg btn-light btn-block"}))))})}}]),a}(n.Component);function L(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About us ",e.match.params.id),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"version 1.0.0"))}function U(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," page not found"),r.a.createElement("p",{className:"lead"},"Sorry, this page is not found."))}t(60),t(62);var B=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,{branding:"My Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:M}),r.a.createElement(d.a,{exact:!0,path:"/about",component:L}),r.a.createElement(d.a,{component:U}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.0ac7f898.chunk.js.map