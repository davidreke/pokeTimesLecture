(this["webpackJsonppoke-times-lecture"]=this["webpackJsonppoke-times-lecture"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),r=a.n(o),l=(a(36),a(9)),s=a(10),i=a(12),m=a(11),u=a(7),p=a(1),d=function(e){return c.a.createElement("nav",{className:"nav-wrapper red darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"brand-logo"},"Poke' Time"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/contact"},"Contact")))))},h=a(14),E=a.n(h),v=a(30),f=a.n(v),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={posts:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){console.log("Response: ",t),e.setState({posts:t.data.slice(0,10)})}))}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map((function(e){return c.a.createElement("div",{className:"post card",key:e.id},c.a.createElement("img",{src:f.a,alt:"a pokeball"}),c.a.createElement("div",{className:"card-content"},c.a.createElement(u.b,{to:"/"+e.id},c.a.createElement("span",{className:"card-title"},e.title)),c.a.createElement("p",null,e.body)))})):c.a.createElement("div",{className:"center"},"No Posts Yet");return c.a.createElement("div",{className:"container home"},c.a.createElement("h4",{className:"center"},"Home"),t)}}]),a}(n.Component),N=function(e){var t=["red","pink","orange","blue","green","yellow"][Math.floor(6*Math.random())]+"-text";return function(a){return c.a.createElement("div",{className:t},c.a.createElement(e,a))}}((function(){return c.a.createElement("div",{className:"container About"},c.a.createElement("h4",{className:"center"},"About"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, consectetur!"))})),g=function(e){return c.a.createElement("div",{className:"container Contact"},c.a.createElement("h4",{className:"center"},"Contact"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, consectetur!"))},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={post:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;E.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){var e=this.state.post?c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"post"},this.state.post.title),c.a.createElement("p",null,this.state.post.body)):c.a.createElement("div",{className:"center"},"Loading Post ...");return c.a.createElement("div",{className:"container"},e)}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:b}),c.a.createElement(p.a,{path:"/About",component:N}),c.a.createElement(p.a,{path:"/Contact",component:g}),c.a.createElement(p.a,{path:"/:post_id",component:y}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7224c9ff.chunk.js.map