(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,a){t.exports=a(38)},28:function(t,e,a){},29:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),i=a(20),s=a.n(i),l=a(8),r=(a(28),a(3)),o=a(4),m=a(6),u=a(5),h=a(7),f=(a(29),a(12));var b=function(t){return n.a.createElement("div",null,n.a.createElement("img",{className:"marvel-logo",src:"https://media2.giphy.com/media/10ADhj1QPawFna/giphy.gif?cid=790b76115cc079a96d68734d4973c9b0",alt:"marvel logo"}))},d=a(1);var v=function(t){return n.a.createElement("div",null,n.a.createElement("form",{className:"form",onSubmit:t.getCharacter},n.a.createElement("label",null,n.a.createElement("input",{className:"search-input",type:"text",name:"name",placeholder:"Name",onChange:t.setCharacter}))))},E="8be0ab7229dc990d3629ebc31ece4a3f",p=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={limit:100,offset:-100,data:null,characterName:""},a.getCharacters=a.getCharacters.bind(Object(d.a)(Object(d.a)(a))),a.getBackCharacters=a.getBackCharacters.bind(Object(d.a)(Object(d.a)(a))),a.setCharacter=a.setCharacter.bind(Object(d.a)(Object(d.a)(a))),a.getCharacter=a.getCharacter.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"getCharacters",value:function(){var t=this;fetch("https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=".concat(this.state.limit,"&offset=").concat(this.state.offset+100,"&apikey=").concat(E)).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset+100})})}},{key:"getBackCharacters",value:function(){var t=this;fetch("https://gateway.marvel.com/v1/public/characters?orderBy=name&limit=".concat(this.state.limit,"&offset=").concat(this.state.offset-100,"&apikey=").concat(E)).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset-100})}),this.state.offset<=0&&this.setState({offset:0})}},{key:"componentDidMount",value:function(){this.getCharacters()}},{key:"setCharacter",value:function(t){this.setState({characterName:t.target.value})}},{key:"getCharacter",value:function(t){var e=this;t.preventDefault(),this.setState({data:null}),""!==this.state.characterName&&fetch("https://gateway.marvel.com/v1/public/characters?name=".concat(this.state.characterName,"&apikey=").concat(E)).then(function(t){return t.json()}).then(function(t){e.setState({data:t.data.results})})}},{key:"render",value:function(){if(null===this.state.data)return n.a.createElement("h1",null,"LOADING...");if(0===this.state.data.length)return n.a.createElement("div",null,n.a.createElement(v,{getCharacter:this.getCharacter,setCharacter:this.setCharacter}),n.a.createElement("h1",null,"NO MATCH"));var t=this.state.data.map(function(t){return n.a.createElement(l.b,{to:"/Characters/".concat(t.id),className:"comic",key:t.id},n.a.createElement("div",{className:"comic-desc"},n.a.createElement("h1",null,t.name)),n.a.createElement("img",{src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"character"}))});return this.state.offset<=0?n.a.createElement("div",null,n.a.createElement(v,{getCharacter:this.getCharacter,setCharacter:this.setCharacter}),n.a.createElement("button",{className:"comic-button",onClick:this.getCharacters},"Next"),n.a.createElement("div",{className:"character-list"},t),n.a.createElement("button",{className:"comic-button",onClick:this.getCharacters},"Next")):n.a.createElement("div",null,n.a.createElement(v,{getCharacter:this.getCharacter,setCharacter:this.setCharacter}),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackCharacters},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getCharacters},"Next"),n.a.createElement("div",{className:"character-list"},t),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackCharacters},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getCharacters},"Next"))}}]),e}(c.Component);var g=function(t){return n.a.createElement("div",null,n.a.createElement("form",{className:"form",onSubmit:t.getEvents},n.a.createElement("label",null,n.a.createElement("input",{type:"text",name:"title",placeholder:"Event Title",onChange:t.setTitle}))))},C="8be0ab7229dc990d3629ebc31ece4a3f",k=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={limit:30,offset:-30,data:null,title:""},a.getEvents=a.getEvents.bind(Object(d.a)(Object(d.a)(a))),a.getBackEvents=a.getBackEvents.bind(Object(d.a)(Object(d.a)(a))),a.getSpecificEvents=a.getSpecificEvents.bind(Object(d.a)(Object(d.a)(a))),a.setTitle=a.setTitle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"setTitle",value:function(t){this.setState({title:t.target.value})}},{key:"getEvents",value:function(){var t=this;fetch("https://gateway.marvel.com/v1/public/events?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset+30,"&apikey=").concat(C)).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset+30})})}},{key:"getBackEvents",value:function(){var t=this;fetch("https://gateway.marvel.com/v1/public/events?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset-30,"&apikey=").concat(C)).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset-30}),t.state.offset<=0&&t.setState({offset:0})})}},{key:"getSpecificEvents",value:function(t){var e=this;if(t.preventDefault(),this.setState({data:null}),""!==this.state.title){var a=new URL("https://gateway.marvel.com/v1/public/events?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset,"&apikey=").concat(C)),c=new URLSearchParams(a.search.slice(1));c.append("name",this.state.title),a.search=new URLSearchParams(c),fetch(a).then(function(t){return t.json()}).then(function(t){e.setState({data:t.data.results})})}}},{key:"componentDidMount",value:function(){this.getEvents()}},{key:"render",value:function(){if(null===this.state.data)return n.a.createElement("h1",null,"LOADING...");if(0===this.state.data.length)return n.a.createElement("div",null,n.a.createElement(g,{setTitle:this.setTitle,getEvents:this.getSpecificEvents}),n.a.createElement("h1",null,"NO MATCH"));var t=this.state.data.map(function(t){return n.a.createElement(l.b,{to:"/Events/".concat(t.id),className:"comic",key:t.id},n.a.createElement("div",{className:"comic-desc"},n.a.createElement("h1",null,t.title)),n.a.createElement("img",{src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"event"}))});return this.state.offset<=0?n.a.createElement("div",null,n.a.createElement(g,{setTitle:this.setTitle,getEvents:this.getSpecificEvents}),n.a.createElement("button",{className:"comic-button",onClick:this.getEvents},"Next"),n.a.createElement("div",{className:"all-comic-div"},t),n.a.createElement("button",{className:"comic-button",onClick:this.getEvents},"Next")):n.a.createElement("div",null,n.a.createElement(g,{setTitle:this.setTitle,getEvents:this.getSpecificEvents}),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackEvents},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getEvents},"Next"),n.a.createElement("div",{className:"all-comic-div"},t),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackEvents},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getEvents},"Next"))}}]),e}(c.Component);var j=function(t){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:t.getComics},n.a.createElement("label",null,n.a.createElement("input",{type:"text",name:"title",placeholder:"Comic Title",onChange:t.setTitle}))))},O="8be0ab7229dc990d3629ebc31ece4a3f",N=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={limit:50,offset:-50,data:null,title:""},a.getComics=a.getComics.bind(Object(d.a)(Object(d.a)(a))),a.getSpecificComics=a.getSpecificComics.bind(Object(d.a)(Object(d.a)(a))),a.getBackComics=a.getBackComics.bind(Object(d.a)(Object(d.a)(a))),a.setTitle=a.setTitle.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"setTitle",value:function(t){this.setState({title:t.target.value})}},{key:"getComics",value:function(){var t=this,e=new URL("https://gateway.marvel.com/v1/public/comics?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset+50,"&apikey=").concat(O));fetch(e).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset+50})})}},{key:"getBackComics",value:function(){var t=this,e=new URL("https://gateway.marvel.com/v1/public/comics?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset-50,"&apikey=").concat(O));fetch(e).then(function(t){return t.json()}).then(function(e){t.setState({data:e.data.results,offset:t.state.offset-50}),t.state.offset<=0&&t.setState({offset:0})})}},{key:"getSpecificComics",value:function(t){var e=this;if(t.preventDefault(),this.setState({data:null}),""!==this.state.title){var a=new URL("https://gateway.marvel.com/v1/public/comics?limit=".concat(this.state.limit,"&offset=").concat(this.state.offset,"&apikey=").concat(O)),c=new URLSearchParams(a.search.slice(1));c.append("title",this.state.title),a.search=new URLSearchParams(c),fetch(a).then(function(t){return t.json()}).then(function(t){e.setState({data:t.data.results})})}}},{key:"componentDidMount",value:function(){this.getComics()}},{key:"render",value:function(){if(null===this.state.data)return n.a.createElement("h1",null,"LOADING...");if(0===this.state.data.length)return n.a.createElement("div",null,n.a.createElement(j,{setTitle:this.setTitle,getComics:this.getSpecificComics}),n.a.createElement("h1",null,"NO MATCH"));var t=this.state.data.map(function(t){return n.a.createElement(l.b,{to:"/Comics/".concat(t.id),className:"comic",key:t.id},n.a.createElement("div",{className:"comic-desc"},n.a.createElement("h1",null,t.title)),n.a.createElement("img",{src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"comic"}))});return this.state.offset<=0?n.a.createElement("div",null,n.a.createElement(j,{setTitle:this.setTitle,getComics:this.getSpecificComics}),n.a.createElement("button",{className:"comic-button",onClick:this.getComics},"Next"),n.a.createElement("div",{className:"all-comic-div"},t),n.a.createElement("button",{className:"comic-button",onClick:this.getComics},"Next")):n.a.createElement("div",null,n.a.createElement(j,{setTitle:this.setTitle,getComics:this.getSpecificComics}),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackComics},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getComics},"Next"),n.a.createElement("div",{className:"all-comic-div"},t),n.a.createElement("button",{className:"comic-button back",onClick:this.getBackComics},"Back"),n.a.createElement("button",{className:"comic-button",onClick:this.getComics},"Next"))}}]),e}(c.Component),y=function(t){function e(){return Object(r.a)(this,e),Object(m.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement(N,null)}}]),e}(c.Component),S=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={title:"",description:"",thumbnail:""},a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;fetch("http://gateway.marvel.com/v1/public/comics/".concat(e,"?apikey=").concat("8be0ab7229dc990d3629ebc31ece4a3f")).then(function(t){return t.json()}).then(function(e){t.setState({title:e.data.results[0].title,description:e.data.results[0].description,thumbnail:"".concat(e.data.results[0].thumbnail.path,".").concat(e.data.results[0].thumbnail.extension)})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"single-comic-div"},n.a.createElement("img",{src:this.state.thumbnail,alt:"comic"}),n.a.createElement("div",{className:"single-comic-desc"},n.a.createElement("h1",null,this.state.title),n.a.createElement("p",null,this.state.description)))}}]),e}(c.Component),w=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={title:"",description:"",thumbnail:""},a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;fetch("http://gateway.marvel.com/v1/public/events/".concat(e,"?apikey=").concat("8be0ab7229dc990d3629ebc31ece4a3f")).then(function(t){return t.json()}).then(function(e){t.setState({title:e.data.results[0].title,description:e.data.results[0].description,thumbnail:e.data.results[0].thumbnail.path+"."+e.data.results[0].thumbnail.extension})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"single-comic-div"},n.a.createElement("img",{src:this.state.thumbnail,alt:"comic"}),n.a.createElement("div",{className:"single-comic-desc"},n.a.createElement("h1",null,this.state.title),n.a.createElement("p",null,this.state.description)))}}]),e}(c.Component),x=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(m.a)(this,Object(u.a)(e).call(this,t))).state={title:"",description:"",thumbnail:""},a}return Object(h.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;fetch("http://gateway.marvel.com/v1/public/characters/".concat(e,"?apikey=").concat("8be0ab7229dc990d3629ebc31ece4a3f")).then(function(t){return t.json()}).then(function(e){console.log(e),t.setState({title:e.data.results[0].name,description:e.data.results[0].description,thumbnail:e.data.results[0].thumbnail.path+"."+e.data.results[0].thumbnail.extension})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"single-comic-div"},n.a.createElement("img",{src:this.state.thumbnail,alt:"comic"}),n.a.createElement("div",{className:"single-comic-desc"},n.a.createElement("h1",null,this.state.title),n.a.createElement("p",null,this.state.description)))}}]),e}(c.Component),T=function(t){function e(){return Object(r.a)(this,e),Object(m.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",null,n.a.createElement(l.b,{to:"/"},n.a.createElement("li",null,"Home")),n.a.createElement(l.b,{to:"/Characters"},n.a.createElement("li",null,"Characters")),n.a.createElement(l.b,{to:"/Events"},n.a.createElement("li",null,"Events")),n.a.createElement(l.b,{to:"/Comics"},n.a.createElement("li",null,"Comics"))),n.a.createElement("main",null,n.a.createElement(f.a,{path:"/",exact:!0,component:b}),n.a.createElement(f.a,{exact:!0,path:"/Characters",component:p}),n.a.createElement(f.a,{exact:!0,path:"/Events",component:k}),n.a.createElement(f.a,{exact:!0,path:"/Comics",component:y}),n.a.createElement(f.a,{path:"/Comics/:id",render:function(t){return n.a.createElement(S,t)}}),n.a.createElement(f.a,{path:"/Events/:id",render:function(t){return n.a.createElement(w,t)}}),n.a.createElement(f.a,{path:"/Characters/:id",render:function(t){return n.a.createElement(x,t)}})))}}]),e}(c.Component);s.a.render(n.a.createElement(l.a,null,n.a.createElement(T,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b9619f4b.chunk.js.map