(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(14),i=t.n(o),c=t(15),u=(t(76),t(88),t(7)),l=t(56),s={CHANGE_COORDINATES:"map/CHANGE_COORDINATES"},d={latitude:-23.5848,longitude:-46.6559,zoom:14};var p={changeCoordinates:function(n){return{type:s.CHANGE_COORDINATES,coordinates:n}}},b=t(65),h=t(16),f=t(37),m=t.n(f),g=t(57),v=t(58),E=t.n(v).a.create({baseURL:"https://api.github.com/users/"}),k={ADD_REQUEST:"markers/ADD_REQUEST",ADD_SUCCESS:"markers/ADD_SUCCESS",ADD_FAILURE:"markers/ADD_FAILURE",REMOVE:"markers/REMOVE"},x={loading:!1,markers:[],error:null};var w={addMarkerRequest:function(n){return function(e){return e({type:k.ADD_REQUEST}),(t=n.user,new Promise(function(){var n=Object(g.a)(m.a.mark(function n(e,r){var a,o,i;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.get(t);case 3:a=n.sent,o=a.data,e(o),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),i=404===n.t0.response.status?"Usu\xe1rio n\xe3o encontrado":"Erro ao buscar usu\xe1rio",r(i);case 12:case"end":return n.stop()}},n,null,[[0,8]])}));return function(e,t){return n.apply(this,arguments)}}())).then(function(t){e(w.addMarkerSuccess(Object(h.a)({},t,{latitude:n.latitude,longitude:n.longitude})))}).catch(function(n){return e(w.addMarkerFailure(n))});var t}},addMarkerSuccess:function(n){return{type:k.ADD_SUCCESS,payload:{data:n}}},addMarkerFailure:function(n){return{type:k.ADD_FAILURE,payload:{error:n}}},removeMarker:function(n){return{type:k.REMOVE,payload:{id:n}}}},O=Object(u.c)({map:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s.CHANGE_COORDINATES:return e.coordinates;default:return n}},markers:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case k.ADD_REQUEST:return Object(h.a)({},n,{loading:!0,error:null});case k.ADD_SUCCESS:return Object(h.a)({},n,{loading:!1,markers:[].concat(Object(b.a)(n.markers.filter(function(n){return n.id!==e.payload.data.id})),[e.payload.data]),error:null});case k.ADD_FAILURE:return Object(h.a)({},n,{loading:!1,error:e.payload.error});case k.REMOVE:return Object(h.a)({},n,{markers:n.markers.filter(function(n){return e.payload.id!==n.id})});default:return n}}}),y=[l.a],j=u.a.apply(void 0,y),C=Object(u.d)(O,j),D=t(10),A=t(11);function I(){var n=Object(D.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n  body {\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n  }\n"]);return I=function(){return n},n}var S=Object(A.a)(I());function R(){var n=Object(D.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: blue;\n  position: relative;\n"]);return R=function(){return n},n}var z=A.b.div(R()),M=t(64),_=t(20),U=t(21),T=t(23),N=t(22),L=t(24),F=t(42);function V(){var n=Object(D.a)(["\n  width: 300px;\n  background: #ededed;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 5px;\n  padding: 10px;\n  input {\n    margin-top: 10px;\n    width: 100%;\n    height: 30px;\n    padding: 0 10px;\n    font-size: 12px;\n    font-weight: bold;\n    border-radius: 5px;\n    border: 0;\n  }\n  input::placeholder {\n    color: #dbdbdb;\n  }\n  div {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  button {\n    font-size: 12px;\n    font-weight: bold;\n    background: #bababa;\n    color: #fff;\n    width: 135px;\n    height: 30px;\n    border-radius: 5px;\n    &:hover {\n      background: #656565;\n    }\n    &:last-child {\n      background: #03b303;\n      &:hover {\n        background: #027902;\n      }\n    }\n  }\n  span {\n    font-size: 10px;\n    color: #bababa;\n  }\n"]);return V=function(){return n},n}function q(){var n=Object(D.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n"]);return q=function(){return n},n}var G=A.b.div(q()),H=A.b.form(V()),J=t(25),Q=(t(109),function(n){function e(){var n,t;Object(_.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(T.a)(this,(n=Object(N.a)(e)).call.apply(n,[this].concat(a)))).state={userInput:""},t.toastId=null,t.handleSubmit=function(n){n.preventDefault(),t.props.addMarkerRequest({user:t.state.userInput,latitude:t.props.coordinates[0],longitude:t.props.coordinates[1]}).then(function(n){t.props.error?(J.b.configure({autoClose:5e3,draggable:!1}),J.b.update(t.toastId,{render:t.props.error,type:J.b.TYPE.ERROR,autoClose:!0})):t.props.cancelInsertion()}),t.setState({userInput:""})},t}return Object(L.a)(e,n),Object(U.a)(e,[{key:"componentDidMount",value:function(){this.userInputText.focus()}},{key:"render",value:function(){var n=this;return this.props.loading&&(this.toastId=Object(J.b)("Carregando usu\xe1rio...",{autoClose:!1})),a.a.createElement(G,null,a.a.createElement(J.a,null),!this.props.loading&&a.a.createElement(H,null,a.a.createElement("h4",null,"Adicionar novo usu\xe1rio"),a.a.createElement("input",{type:"text",placeholder:"Usu\xe1rio no Github",onChange:function(e){return n.setState({userInput:e.target.value})},value:this.state.userInput,ref:function(e){n.userInputText=e}}),a.a.createElement("div",null,a.a.createElement("button",{onClick:this.props.cancelInsertion,type:"button"},"Cancelar"),a.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Salvar")),a.a.createElement("span",null,"Latitude: ",this.props.coordinates[0]),a.a.createElement("span",null,"Longitude: ",this.props.coordinates[1])))}}]),e}(r.Component)),Y=Object(c.b)(function(n){return{loading:n.markers.loading,error:n.markers.error}},function(n){return Object(u.b)({addMarkerRequest:w.addMarkerRequest},n)})(Q);function W(){var n=Object(D.a)(["\n  height: 70px;\n  border-radius: 50%;\n  border: 5px solid #896cfe;\n"]);return W=function(){return n},n}var P=A.b.img(W()),X=function(n){function e(){var n,t;Object(_.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(T.a)(this,(n=Object(N.a)(e)).call.apply(n,[this].concat(a)))).state={isInserting:!1,insertingCoordinates:[],viewport:{width:window.innerWidth,height:window.innerHeight}},t._resize=function(){t.setState({viewport:Object(h.a)({},t.state.viewport,{width:window.innerWidth,height:window.innerHeight})})},t.handleViewportChange=function(n){t.props.changeCoordinates({latitude:n.latitude,longitude:n.longitude,zoom:n.zoom})},t.handleMapClick=function(n){var e=Object(M.a)(n.lngLat,2),r=e[0],a=e[1];t.setState({isInserting:!0,insertingCoordinates:[a,r]})},t.handleCancelInsertion=function(n){t.setState({isInserting:!1,insertingCoordinates:[]})},t}return Object(L.a)(e,n),Object(U.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this._resize),this._resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._resize)}},{key:"render",value:function(){var n=this,e=this.props.markers;return a.a.createElement(r.Fragment,null,a.a.createElement(F.b,Object.assign({},this.state.viewport,this.props.coordinates,{mapStyle:"mapbox://styles/mapbox/basic-v9",mapboxApiAccessToken:"pk.eyJ1Ijoicmxpc2JvYXJzIiwiYSI6ImNqdjVrZDc5cTAzMjg0M20zOTc5YXc1bjAifQ.ONjJRyzgRkDTyMvth5LYNA",onViewportChange:function(e){return n.handleViewportChange(e)},onClick:this.handleMapClick}),e.map(function(n){return a.a.createElement(F.a,{latitude:n.latitude,longitude:n.longitude,zoom:14,key:n.id},a.a.createElement(P,{src:n.avatar_url,alt:"".concat(n.login," marker")}))})),this.state.isInserting&&a.a.createElement(Y,{coordinates:this.state.insertingCoordinates,cancelInsertion:this.handleCancelInsertion}))}}]),e}(r.Component),B=Object(c.b)(function(n){return{coordinates:n.map,markers:n.markers.markers}},function(n){return Object(u.b)(p,n)})(X),Z=t(29),K=t(40),$=t(41);function nn(){var n=Object(D.a)(["\n  display: flex;\n  padding: 10px 10px;\n  border-bottom: 1px solid #f2f2f2;\n  font-size: 14px;\n  &:hover {\n    background: #f2f2f2;\n  }\n  .empty {\n    text-align: center;\n    margin: 0 auto;\n    color: #bababa;\n    font-weight: bold;\n    margin-top: 20px;\n    height: 40px;\n  }\n  img {\n    height: 50px;\n    border-radius: 50%;\n  }\n  .info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 50px;\n    flex-grow: 1;\n    span {\n      color: #959595;\n    }\n    padding-left: 10px;\n  }\n  .actions {\n    display: flex;\n    align-items: center;\n    button {\n      font-size: 16px;\n      border: none;\n      width: 30px;\n      height: 30px;\n      color: #959595;\n      background: transparent;\n    }\n    button:first-child {\n      color: red;\n      &:hover {\n        background: red;\n        color: #fff;\n      }\n    }\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(D.a)(["\n  background-color: #fff;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.4);\n  width: 350px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  bottom: 20px;\n  border-radius: 3px;\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 7px;\n  }\n  ::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n  }\n"]);return en=function(){return n},n}var tn=A.b.div(en()),rn=A.b.li(nn());Z.b.add($.a,$.b);var an=function(n){function e(){var n,t;Object(_.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(T.a)(this,(n=Object(N.a)(e)).call.apply(n,[this].concat(a)))).handleDelete=function(n){t.props.removeMarker(n)},t.handleFocusUser=function(n){var e=t.props.markers.find(function(e){return e.id===n});t.props.changeCoordinates({latitude:e.latitude,longitude:e.longitude,zoom:14})},t}return Object(L.a)(e,n),Object(U.a)(e,[{key:"render",value:function(){var n=this,e=this.props.markers;return a.a.createElement(tn,null,a.a.createElement("ul",null,!!e&&e.map(function(e){return a.a.createElement(rn,{key:e.id,onClick:function(){return n.handleFocusUser(e.id)}},a.a.createElement("img",{src:e.avatar_url,alt:"Avatar"}),a.a.createElement("div",{className:"info"},a.a.createElement("strong",null,e.name),a.a.createElement("span",null,e.login)),a.a.createElement("div",{className:"actions"},a.a.createElement("button",{onClick:function(){return n.handleDelete(e.id)}},a.a.createElement(K.a,{icon:"trash-alt"})),a.a.createElement("button",{onClick:function(){return n.handleFocusUser(e.id)}},a.a.createElement(K.a,{icon:"chevron-right"}))))}),0===e.length&&a.a.createElement(rn,null,a.a.createElement("span",{className:"empty"},"Clique no mapa para inserir um usu\xe1rio"))))}}]),e}(r.Component),on=Object(c.b)(function(n){return{markers:n.markers.markers}},function(n){return Object(u.b)({removeMarker:w.removeMarker,changeCoordinates:p.changeCoordinates},n)})(an),cn=function(){return a.a.createElement(z,null,a.a.createElement(B,null),a.a.createElement(on,null))},un=function(){return a.a.createElement(c.a,{store:C},a.a.createElement(r.Fragment,null,a.a.createElement(S,null),a.a.createElement(cn,null)))};t(114).config(),i.a.render(a.a.createElement(un,null),document.getElementById("root"))},67:function(n,e,t){n.exports=t(117)}},[[67,1,2]]]);
//# sourceMappingURL=main.e371fbbf.chunk.js.map