(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(275)},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){},124:function(e,t,a){},266:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),s=(a(118),a(20)),l=a(21),i=a(23),u=a(22),m=a(24),d=(a(120),a(122),a(46)),h=a.n(d),p=a(47),E=a.n(p),f=a(15),g=a.n(f),v=a(102),y=a.n(v),b=a(99),O=a.n(b),C=a(95),j=a.n(C),P=a(48),k=a.n(P),S=a(103),T=a.n(S),N=a(94),w=a.n(N),x=a(105),q=a.n(x),A=a(97),I=a.n(A),z=a(100),B=a.n(z),H=a(98),M=a.n(H),Q=a(32),R=a.n(Q),V=a(101),W=a.n(V),_=(a(124),a(45)),G=a.n(_),F=a(18),J=a.n(F),L=a(16),U=a(36),$=a(33),D=a.n($),K=a(104),X=a.n(K);function Y(e){return c.a.createElement(w.a,Object.assign({direction:"up"},e))}var Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1,dense:!1,products:[]},a.finalAmount=function(e){var t=0;return e.forEach(function(e){t+=a.amountPerProduct(e)}),t},a.amountPerProduct=function(e){return e.price*e.quantity},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.purchase=function(){console.log(a.state.products),0==a.state.products.length||a.state.products==[]?L.ToastStore.error("Empty Cart"):(J.a.set("selectedProducts",[]),a.setState({products:[]}),L.ToastStore.success("Successful Purchase"),a.handleClose())},a.reduceElements=function(e){var t=J.a.get("selectedProducts"),a=[];return t.forEach(function(e){var t=e.id;this[t]?this[t].quantity+=e.quantity:a.push(this[t]=e)},Object.create(null)),console.log(a),a},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"deleteProduct",value:function(e){for(var t=this.state.products,a=0;a<t.length;a++)if(t[a].id===e){t.splice(a,1),L.ToastStore.success("removed from the cart");break}this.setState({products:t}),J.a.set("selectedProducts",t)}},{key:"renderSelectedProducts",value:function(){var e=this;null==J.a.get("selectedProducts")||J.a.get("selectedProducts");return this.state.products=this.reduceElements(this.state.products),this.state.products.map(function(t,a){return c.a.createElement(j.a,{key:"selected-product-list".concat(a)},c.a.createElement(I.a,null,c.a.createElement(M.a,null,c.a.createElement("img",{src:t.image,alt:"Vr",className:"productImage"}))),c.a.createElement(O.a,{secondary:c.a.createElement(n.Fragment,null,c.a.createElement(g.a,{component:"span",className:"inline",color:"textPrimary"},"".concat(t.name)),e.amountPerProduct(t),c.a.createElement(g.a,{component:"span",className:"inline",color:"textPrimary"},"Items ".concat(t.quantity)))}),c.a.createElement(B.a,null,c.a.createElement(k.a,{"aria-label":"Delete",onClick:function(a){return e.deleteProduct(t.id)}},c.a.createElement(W.a,{className:"trashColor"}))))})}},{key:"render",value:function(){var e=this.state.dense;return c.a.createElement("div",null,c.a.createElement(k.a,{color:"inherit",onClick:this.handleClickOpen},c.a.createElement(G.a,null)),c.a.createElement(y.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Y},c.a.createElement(h.a,{className:"appBar"},c.a.createElement(E.a,null,c.a.createElement(k.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},c.a.createElement(T.a,null)),c.a.createElement(g.a,{variant:"h6",color:"inherit",className:"flex"},"Cart"),c.a.createElement(D.a,{onClick:this.purchase,variant:"extended",size:"small",color:"secondary","aria-label":"Add"},c.a.createElement(X.a,null),"Purchase"))),c.a.createElement("div",{className:"gridMargin"},c.a.createElement(R.a,{item:!0,xs:12,md:6,lg:12},c.a.createElement(g.a,{variant:"h5",className:"titleTextSize"}),c.a.createElement("div",null,c.a.createElement(q.a,{dense:e},this.renderSelectedProducts()))),c.a.createElement("div",{className:"total"},c.a.createElement(g.a,{variant:"h6",color:"inherit",className:"flex"},"Total:".concat(this.finalAmount(this.state.products)))))),c.a.createElement(L.ToastContainer,{position:L.ToastContainer.POSITION.RIGHT,store:L.ToastStore}))}}]),t}(n.Component),ee=Object(U.withStyles)({appBar:{position:"relative"},flex:{flex:1}})(Z),te=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"root"},c.a.createElement(h.a,{position:"static"},c.a.createElement(E.a,null,c.a.createElement(g.a,{variant:"h5",color:"inherit",className:"grow"},"Shoppig Cart"),c.a.createElement(ee,null))))}}]),t}(n.Component),ae=a(106),ne=a.n(ae),ce=a(107),re=a.n(ce),oe=a(110),se=a.n(oe),le=a(109),ie=a.n(le),ue=a(108),me=a.n(ue),de=a(111),he=a.n(de),pe=a(112),Ee=a.n(pe),fe=(a(266),[]),ge=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={count:0,selectedProduct:{},products:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"selectQuantity",value:function(e){this.setState(function(t){return{count:"add"===e?t.count+1:t.count-1}})}},{key:"addToCart",value:function(e,t,a,n,c){this.setState({selectedProduct:{image:e,name:t,price:a,id:n,quantity:c}},function(){if(J.a.get("selectedProducts")){var e=J.a.get("selectedProducts");return e.push(this.state.selectedProduct),void J.a.set("selectedProducts",e)}fe.push(this.state.selectedProduct),J.a.set("selectedProducts",fe),fe=[]}),L.ToastStore.success("added to the cart"),this.setState({count:0})}},{key:"render",value:function(){var e=this.props.product;return c.a.createElement(R.a,{item:!0,xs:12,sm:4,lg:4,xl:3,className:"marginCard"},c.a.createElement(ne.a,null,c.a.createElement(re.a,null,c.a.createElement(me.a,{image:"",title:e.name},c.a.createElement("img",{src:e.image,alt:"cv",width:250,height:230,className:"zoom"})),c.a.createElement(ie.a,null,c.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"ProductName"},e.name),c.a.createElement(g.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.description),c.a.createElement(g.a,{component:"p"},"$".concat(e.price)))),c.a.createElement(se.a,null,c.a.createElement(D.a,{disabled:0===this.state.count,className:"QuantityChangeContainer",color:"primary","aria-label":"Add",onClick:this.addToCart.bind(this,e.image,e.name,e.price,e.id,e.quantity+this.state.count)},c.a.createElement(G.a,null)),c.a.createElement(D.a,{size:"small",color:"secondary","aria-label":"Add",onClick:this.selectQuantity.bind(this,"add")},c.a.createElement(he.a,null)),c.a.createElement("label",{className:"quantityText",spacing:8},this.state.count),c.a.createElement(D.a,{disabled:0===this.state.count,size:"small",color:"secondary","aria-label":"Add",onClick:this.selectQuantity.bind(this,"des")},c.a.createElement(Ee.a,null)),c.a.createElement(L.ToastContainer,{position:L.ToastContainer.POSITION.RIGHT,store:L.ToastStore,className:"toast-font-color"}))))}}]),t}(n.Component),ve=[{id:1,name:"THK shoes ",price:550,description:"Running shoes made with soft material very confortable to use",image:"https://novaclutch.typepad.com/novaclutch/images/2007/11/18/gmds1.jpg",quantity:0},{id:2,name:"Avenged Sevenfold T-shirt ",price:250,description:"Very nice T-shirt from album Hail to the king from Avenged Sevenfold ",image:"https://roxxbkk.com/wp-content/uploads/2016/12/avengedsevenfold019-1.jpg",quantity:0},{id:3,name:"Generic pants  ",price:300,description:"elegant pants to wear on special occasions or everyday",image:"https://images-na.ssl-images-amazon.com/images/I/615a3AWAVRL._UY606_.jpg",quantity:0},{id:4,name:"Metallica ",price:650,description:"Very soft",image:"https://images-na.ssl-images-amazon.com/images/I/71kFWqvvhSL._UX385_.jpg",quantity:0}],ye=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(R.a,{container:!0,spacing:8}," ",ve.map(function(e,t){return c.a.createElement(ge,{product:e,key:"product-list-key".concat(t)})}))}}]),t}(n.Component),be=Object(U.createMuiTheme)({palette:{primary:{main:"#009688"},secondary:{main:"#e53935"}}}),Oe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(U.MuiThemeProvider,{theme:be},c.a.createElement("div",{className:"App"},c.a.createElement(te,null),c.a.createElement("div",{className:"container"},c.a.createElement(ye,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,2,1]]]);
//# sourceMappingURL=main.f3d577ac.chunk.js.map