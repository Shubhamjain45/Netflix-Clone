(window.webpackJsonpnetflix=window.webpackJsonpnetflix||[]).push([[2],[,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return u}));var a="https://api.themoviedb.org/3/",r="9f1ffd64abd4bde18614fd9087d87d71",c="http://image.tmdb.org/t/p/",i="w1280",s="w500",o="w500",l="w92",u="https://www.youtube.com/watch?v="},,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(7),r=n(24),c=function(e){return e.movie},i=Object(a.a)([c],(function(e){return e.movieItems})),s=Object(a.a)([c],(function(e){return e.movieGridItems})),o=Object(a.a)([c],(function(e){return e.movieCast})),l=Object(a.a)([c],(function(e){return e.movieVideos})),u=Object(a.a)([c],(function(e){return e.isFetching})),m=(Object(a.a)([c],(function(e){return e.isAdditionalFetching})),function(e){return Object(a.a)([i],(function(t){return t.filter((function(t){return Object(r.a)(t.title)===e}))}))})},,,,,,,,function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(7),r=n(24),c=function(e){return e.tv},i=Object(a.a)([c],(function(e){return e.tvItems})),s=Object(a.a)([c],(function(e){return e.tvGridItems})),o=Object(a.a)([c],(function(e){return e.tvCast})),l=Object(a.a)([c],(function(e){return e.tvVideos})),u=Object(a.a)([c],(function(e){return e.isFetching})),m=function(e){return Object(a.a)([i],(function(t){return t.filter((function(t){return Object(r.a)(t.name)===e}))}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e.split(" ").join("").toLowerCase().replace(/[^a-z0-9]/g,"")}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(7),r=Object(a.a)([function(e){return e.list}],(function(e){return e.listItems})),c=function(e){return Object(a.a)([r],(function(t){return t.filter((function(t){return t.title?t.id===e:null}))}))},i=function(e){return Object(a.a)([r],(function(t){return t.filter((function(t){return t.name?t.id===e:null}))}))}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(34),r=function(e){return{type:a.a.ADD_ITEM,payload:e}},c=function(e){return{type:a.a.REMOVE_ITEM,payload:e}}},,function(e,t,n){e.exports=n.p+"static/media/imdb.f7f2904f.png"},function(e,t,n){e.exports=n.p+"static/media/star.9179862c.png"},function(e,t,n){"use strict";t.a={ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM"}},,,,,function(e,t,n){e.exports=n.p+"static/media/Background.d2edb29f.jpg"},,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(88);t.a=function(){return r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"}))}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=(n(101),n(18)),i=n(16),s=n(6),o=n(30),l=n(26);t.a=Object(s.b)((function(e){return{listItems:Object(l.a)(e)}}),(function(e){return{addItem:function(t){return e(Object(o.a)(t))},removeItem:function(t){return e(Object(o.b)(t))}}}))((function(e){var t=e.addItem,n=e.removeItem,a=e.item,s=e.listItems.filter((function(e){return e.id===a.id}));return r.a.createElement("div",{className:"addtolist"},s.length?r.a.createElement("div",{className:"addtolist__container",onClick:function(){return n(a)}},r.a.createElement(i.a,{icon:c.b,className:"addtolist--icon"}),r.a.createElement("span",null,"Added to list")):r.a.createElement("div",{className:"addtolist__container",onClick:function(){return t(a)}},r.a.createElement(i.a,{icon:c.g,className:"addtolist--icon"}),r.a.createElement("span",null,"Add to list")))}))},,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.a1f673e7.png"},,function(e,t,n){e.exports=n.p+"static/media/netflix.d902c772.jpg"},,,,,,function(e,t,n){e.exports=n(106)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),i=n.n(c),s=(n(66),n(21)),o=n.n(s),l=n(3),u=n(29),m=n(11),d=n(12),p=n(14),_=n(13),f=(n(68),n(10)),h=n(53),v=n.n(h),b=(n(69),n(5)),E=(n(70),n(7)),g=Object(E.a)([function(e){return e.search}],(function(e){return e.searchItems})),O=function(e){return Object(E.a)([g],(function(t){return t.filter((function(t){return t.name?t.id===e:null}))}))},y={SET_SEARCH_DATA:"SET_SEARCH_DATA"},j=n(1);function N(e){return function(t){(function(e){e=e.split(" ").join("%20");var t="".concat(j.b,"search/multi?api_key=").concat(j.a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false");return fetch(t).then((function(e){return e.json()}))})(e).then((function(e){t({type:y.SET_SEARCH_DATA,payload:e.results})}))}}var T=n(6),S=n(9),A=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target.value;return 1===Number(n.length)&&"/searchresults"!==e.props.currentRoute?e.setState({currentPath:e.props.currentRoute},(function(){return e.props.history.push("/searchresults")})):0===Number(n.length)?e.props.history.push("".concat(e.state.currentPath)):Number(n.length)>1&&e.props.history.push("/searchresults"),n?e.props.dispatch(N(n)):null},e.state={currentPath:""},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-1"},r.a.createElement("div",{className:"container-2"},r.a.createElement("span",{className:"search-icon"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("input",{onChange:this.handleChange,type:"search",id:"search",placeholder:"Movies, TV Shows..."})))}}]),n}(r.a.Component),I=Object(S.d)(b.g,Object(T.b)((function(e){return{searchItems:g(e)}})))(A),D=n(35),w=n.n(D),C=(n(76),n(79),function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=M.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(l.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("".concat(e.t0," User Can't be registered"));case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());w.a.initializeApp({apiKey:"AIzaSyBxMxhl94xopxljHJ1joyYLHBMvtRSTNpY",authDomain:"netflix-clone-shubhamjain.firebaseapp.com",projectId:"netflix-clone-shubhamjain",storageBucket:"netflix-clone-shubhamjain.appspot.com",messagingSenderId:"334627460173",appId:"1:334627460173:web:7bfa9c20b2ecc7cb46f804",measurementId:"G-6TXSZL8X29"});var k=w.a.auth(),M=w.a.firestore(),U=new w.a.auth.GoogleAuthProvider;U.setCustomParameters({prompt:"select_account"});var V=function(){return k.signInWithPopup(U)},x=(w.a,function(e){return e.user}),R=Object(E.a)([x],(function(e){return e.currentUser})),L=Object(E.a)([x],(function(e){return e.hidden})),G={SET_CURRENT_USER:"SET_CURRENT_USER",TOGGLE_HIDDEN_MENU:"TOGGLE_HIDDEN_MENU"},P=function(){return{type:G.TOGGLE_HIDDEN_MENU}},H=n(18),B=n(16),F=(n(84),n(55)),q=n.n(F),z=Object(S.d)(b.g,Object(T.b)((function(e){return{currentUser:R(e)}}),(function(e){return{ToggleMenuHidden:function(){return e(P())}}})))((function(e){e.history;var t=e.currentUser,n=e.ToggleMenuHidden;return r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"overlay__exit",onClick:n},r.a.createElement(B.a,{icon:H.h,className:"overlay__exit-icon"})),r.a.createElement("div",{className:"overlay__content",onClick:n},r.a.createElement("img",{src:q.a,alt:"netflix",className:"overlay__netflix"}),t?r.a.createElement(f.b,{className:"overlay__username",to:""},"Hi, ",t.displayName):r.a.createElement(f.b,{className:"overlay__username",to:""},"Hi, Guest"),r.a.createElement(f.b,{className:"overlay__option",to:"/movies"},"Movies"),r.a.createElement(f.b,{className:"overlay__option",to:"/tvshows"},"TV Shows"),r.a.createElement(f.b,{className:"overlay__option",to:"/mylist"},"My List"),t?r.a.createElement("div",{className:"overlay__option overlay__signout",onClick:function(){return k.signOut()}},"Sign Out"):r.a.createElement("div",null,r.a.createElement(f.b,{className:"overlay__option",to:"/signin"},"Sign In"))))})),W=Object(S.d)(b.g,Object(T.b)((function(e){return{currentUser:R(e),hidden:L(e)}}),(function(e){return{ToggleMenuHidden:function(){return e(P())}}})))((function(e){var t=e.history,n=e.currentUser,a=e.currentRoute,c=e.hidden,i=e.ToggleMenuHidden;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__logo-box",onClick:function(){return t.push("/movies")}},r.a.createElement("img",{src:v.a,alt:"logo",className:"header__logo"})),r.a.createElement("div",{className:"header__options"},r.a.createElement("div",{className:"header__options-primary"},r.a.createElement(f.b,{className:"header__option",to:"/movies"},"Movies"),r.a.createElement(f.b,{className:"header__option",to:"/tvshows"},"TV Shows"),r.a.createElement(f.b,{className:"header__option",to:"/mylist"},"My List")),r.a.createElement("div",{className:"header__searchbar"},r.a.createElement(I,{currentRoute:a})),n?r.a.createElement("div",{className:"header__options-secondary"},r.a.createElement(f.b,{className:"header__option",to:""},"Hi, ",n.displayName),r.a.createElement("div",{className:"header__option header__option--signout",onClick:function(){return k.signOut()}},"Sign Out")):r.a.createElement("div",{className:"header__options-secondary"},r.a.createElement(f.b,{className:"header__option",to:""},"Hi, Guest"),r.a.createElement(f.b,{className:"header__option header__option--signin",to:"/signin"},"Sign In"))),r.a.createElement(B.a,{icon:H.a,className:"header__nav-menu-icon",onClick:i}),c?null:r.a.createElement(z,null))})),J=(n(85),n(15)),K={SET_MOVIE_DATA_START:"SET_MOVIE_DATA_START",SET_MOVIE_DATA:"SET_MOVIE_DATA",SET_MOVIE_GRID_DATA:"SET_MOVIE_GRID_DATA",SET_MOVIE_DATA_SUCCESS:"SET_MOVIE_DATA_SUCCESS",SET_MOVIE_ADDITIONAL_DATA_SUCCESS:"SET_MOVIE_ADDITIONAL_DATA_SUCCESS",SET_MOVIE_ADDITIONAL_DATA:"SET_MOVIE_ADDITIONAL_DATA"},X=["".concat(j.b,"movie/popular?api_key=").concat(j.a,"&language=en-US&page=1"),"".concat(j.b,"movie/popular?api_key=").concat(j.a,"&language=en-US&page=2"),"".concat(j.b,"movie/popular?api_key=").concat(j.a,"&language=en-US&page=3")],Y=["".concat(j.b,"search/movie?api_key=").concat(j.a,"&language=en-US&query=infinity"),"".concat(j.b,"search/movie?api_key=").concat(j.a,"&language=en-US&query=The%20Lion%20King"),"".concat(j.b,"search/movie?api_key=").concat(j.a,"&language=en-US&query=how%20to%20train%20your%20dragon%20the")];function Z(){return function(e){Promise.all(X.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var n=t.map((function(e){return e.results})),a=Array.prototype.concat.apply([],n);console.log(t),console.log(a),e({type:K.SET_MOVIE_DATA,payload:a})})),Promise.all(Y.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var n=t.map((function(e){return e.results[0]})),a=Array.prototype.concat.apply([],n);e({type:K.SET_MOVIE_GRID_DATA,payload:a}),e({type:K.SET_MOVIE_DATA_SUCCESS})}))}}function Q(e){return function(t){(function(e){var t="".concat(j.b,"movie/").concat(e,"?api_key=").concat(j.a,"&append_to_response=videos,credits&language=en-US");return fetch(t).then((function(e){return e.json()}))})(e).then((function(e){t({type:K.SET_MOVIE_ADDITIONAL_DATA,payload:e}),t({type:K.SET_MOVIE_ADDITIONAL_DATA_SUCCESS})}))}}var $=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,125))})),ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,126))})),te=r.a.lazy((function(){return n.e(1).then(n.bind(null,129))})),ne=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Z())}},{key:"render",value:function(){return r.a.createElement("div",{className:"movies"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement($,{movies:!0}),r.a.createElement(ee,{movies:!0}),r.a.createElement(te,null)))}}]),n}(r.a.Component),ae=Object(T.b)((function(e){return{movieItems:Object(J.e)(e),isFetching:Object(J.a)(e)}}))(ne),re=(n(86),n(23)),ce={SET_TV_DATA:"SET_TV_DATA",SET_TV_GRID_DATA:"SET_TV_GRID_DATA",SET_TV_DATA_SUCCESS:"SET_TV_DATA_SUCCESS",SET_TV_ADDITIONAL_DATA:"SET_TV_ADDITIONAL_DATA"},ie=["".concat(j.b,"tv/top_rated?api_key=").concat(j.a,"&language=en-US&page=1"),"".concat(j.b,"tv/popular?api_key=").concat(j.a,"&language=en-US&page=4"),"".concat(j.b,"tv/top_rated?api_key=").concat(j.a,"&language=en-US&page=3")];var se=["".concat(j.b,"search/tv?api_key=").concat(j.a,"&language=en-US&query=stranger"),"".concat(j.b,"search/tv?api_key=").concat(j.a,"&language=en-US&query=breaking"),"".concat(j.b,"search/tv?api_key=").concat(j.a,"&language=en-US&query=13")];function oe(){return function(e){Promise.all(ie.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var n=t.map((function(e){return e.results})),a=Array.prototype.concat.apply([],n);e({type:ce.SET_TV_DATA,payload:a})})),Promise.all(se.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(t){var n=t.map((function(e){return e.results[0]})),a=Array.prototype.concat.apply([],n);e({type:ce.SET_TV_GRID_DATA,payload:a}),e({type:ce.SET_TV_DATA_SUCCESS})}))}}function le(e){return function(t){(function(e){var t="".concat(j.b,"tv/").concat(e,"?api_key=").concat(j.a,"&append_to_response=videos,credits&language=en-US");return fetch(t).then((function(e){return e.json()}))})(e).then((function(e){t({type:ce.SET_TV_ADDITIONAL_DATA,payload:e})}))}}var ue=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,127))})),me=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,128))})),de=r.a.lazy((function(){return n.e(1).then(n.bind(null,129))})),pe=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(oe())}},{key:"render",value:function(){return r.a.createElement("div",{className:"TV"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(ue,{tvshow:!0}),r.a.createElement(me,{tvshow:!0}),r.a.createElement(de,null)))}}]),n}(r.a.Component),_e=Object(T.b)((function(e){return{tvItems:Object(re.e)(e),isFetching:Object(re.a)(e)}}))(pe),fe=(n(87),n(25)),he=n(46),ve=function(e){return function(t){var n=t.isLoading,a=Object(fe.a)(t,["isLoading"]);return n?r.a.createElement(he.a,null):r.a.createElement(e,a)}},be=(n(89),n(32)),Ee=n.n(be),ge=n(33),Oe=n.n(ge),ye=(n(90),n(91),function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).onLoad=function(){a.setState({didLoad:!0})},a.state={didLoad:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.profile_path,n=e.name,a="".concat(j.e).concat(j.g),c=this.state.didLoad?{}:{visibility:"hidden"};return r.a.createElement("div",{className:"cast"},r.a.createElement("div",{className:"cast__img-box"},r.a.createElement("img",{src:"".concat(a,"/").concat(t),style:c,alt:"profile",className:"cast__img",onLoad:this.onLoad})),r.a.createElement("span",{style:c,className:"cast__name"},"".concat(n)))}}]),n}(r.a.Component)),je=n(30),Ne=n(26),Te=Object(T.b)((function(e){return{movieCast:Object(J.c)(e),movieVideos:Object(J.f)(e),tvCast:Object(re.c)(e),tvVideos:Object(re.f)(e),listItems:Object(Ne.a)(e)}}),(function(e){return{addItem:function(t){return e(Object(je.a)(t))},removeItem:function(t){return e(Object(je.b)(t))}}}))((function(e){var t=e.item,n=e.movieCast,a=e.movieVideos,c=e.addItem,i=e.removeItem,s=e.tvCast,o=e.tvVideos,l=e.movies,u=e.tvshow,m=e.listItems.filter((function(e){return e.id===t.id}));return r.a.createElement("div",{className:"item-page-footer"},r.a.createElement("div",{className:"item-page-footer__container"},l&&n.length?n.filter((function(e,t){return t<4})).map((function(e){var t=e.id,n=e.profile_path,a=Object(fe.a)(e,["id","profile_path"]);return n?r.a.createElement(ye,Object.assign({key:t,profile_path:n},a)):null})):null,u&&s.length?s.filter((function(e,t){return t<4})).map((function(e){var t=e.id,n=e.profile_path,a=Object(fe.a)(e,["id","profile_path"]);return n?r.a.createElement(ye,Object.assign({key:t,profile_path:n},a)):null})):null),r.a.createElement("div",{className:"item-page-footer__btn-container"},m.length?r.a.createElement("button",{className:"item-page-footer__btn",onClick:function(){return i(t)}},r.a.createElement(B.a,{icon:H.b,className:"item-page-footer__icon"}),"Added To List"):r.a.createElement("button",{className:"item-page-footer__btn",onClick:function(){return c(t)}},r.a.createElement(B.a,{icon:H.g,className:"item-page-footer__icon"}),"My List"),r.a.createElement("button",{onClick:function(){return l?window.open("".concat(j.h).concat(a),"_blank"):window.open("".concat(j.h).concat(o),"_blank")},className:"item-page-footer__btn"},r.a.createElement(B.a,{icon:H.f,className:"item-page-footer__icon"}),"Watch Trailer")))})),Se=n(48),Ae=n.n(Se),Ie=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){return this.props.movies?this.props.dispatch(Q(this.props.item.id)):this.props.dispatch(le(this.props.item.id))}},{key:"render",value:function(){var e=this.props,t=e.item,n=e.movies,a=e.tvshow,c=t.title,i=t.name,s=t.overview,o=t.backdrop_path,l=t.poster_path,u=t.vote_average,m="".concat(j.e).concat(j.c).concat(o),d="".concat(j.e).concat(j.f).concat(l);return r.a.createElement("div",{className:"item-page"},r.a.createElement("img",{src:"".concat(m),alt:"background",className:"item-page__bg"}),r.a.createElement("div",{className:"item"},r.a.createElement(Ae.a,null,r.a.createElement("div",{className:"item__outer"},r.a.createElement("div",{className:"item__inner"},r.a.createElement("div",{className:"item__img-box"},r.a.createElement("img",{src:"".concat(d),alt:"poster",className:"item__poster-img"})),r.a.createElement("div",{className:"item__text-box"},r.a.createElement("h1",{className:"item__title"},c),r.a.createElement("h1",{className:"item__title"},i),r.a.createElement("span",{className:"item__overview"},s),r.a.createElement("div",{className:"item-rating"},r.a.createElement("img",{src:Ee.a,alt:"imdb",className:"item-rating__imdb"}),r.a.createElement("span",{className:"item-rating__rank"},u,"/"),r.a.createElement("span",{className:"item-rating__ten"},"10"),r.a.createElement("img",{src:Oe.a,alt:"imdb",className:"item-rating__star"})),r.a.createElement("h1",{className:"item__cast-title"},"Cast"),r.a.createElement(Te,{movies:n,tvshow:a,item:t})))))))}}]),n}(r.a.Component),De=Object(T.b)((function(e){return{movieCast:Object(J.c)(e),movieVideos:Object(J.f)(e)}}))(Ie),we=Object(T.b)((function(e,t){return{movieItemByTitle:Object(J.b)(t.params.title)(e),tvItemByTitle:Object(re.b)(t.params.name)(e),searchedMovieItemByTitle:(n=t.state?t.state.id:null,Object(E.a)([g],(function(e){return e.filter((function(e){return e.title?e.id===n:null}))})))(e),searchedTvItemByTitle:O(t.state?t.state.id:null)(e),listMovieItemByTitle:Object(Ne.b)(t.state?t.state.id:null)(e),listTvItemByTitle:Object(Ne.c)(t.state?t.state.id:null)(e)};var n}))((function(e){var t=e.movieItemByTitle,n=e.tvItemByTitle,a=e.movies,c=e.tvshow,i=e.searchedMovieItemByTitle,s=e.searchedTvItemByTitle,o=e.listMovieItemByTitle,l=e.listTvItemByTitle;return r.a.createElement("div",{className:"item-page-overview"},a?t.map((function(e){return r.a.createElement(De,{key:e.id,item:e,movies:a})})):null,c?n.map((function(e){return r.a.createElement(De,{key:e.id,item:e,tvshow:c})})):null,0===t.length&&i?i.map((function(e){return r.a.createElement(De,{key:e.id,item:e,movies:a})})):null,0===n.length&&s?s.map((function(e){return r.a.createElement(De,{key:e.id,item:e,tvshow:c})})):null,0===t.length&&0===i.length&&o?o.map((function(e){return r.a.createElement(De,{key:e.id,item:e,movies:a})})):null,0===n.length&&0===s.length&&l?l.map((function(e){return r.a.createElement(De,{key:e.id,item:e,tvshow:c})})):null)})),Ce=Object(E.b)({isLoading:J.a}),ke=Object(S.d)(Object(T.b)(Ce),ve)(we),Me=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Z()),i.a.findDOMNode(this).scrollIntoView()}},{key:"render",value:function(){this.props.isFetching;return console.log(this.props.isFetching),r.a.createElement("div",{className:"movie-item-page"},r.a.createElement(ke,{params:this.props.match.params,state:this.props.location?this.props.location.state:"",movies:!0}))}}]),n}(r.a.Component),Ue=Object(T.b)((function(e){return{movieData:Object(J.e)(e),isFetching:Object(J.a)(e)}}))(Me),Ve=(n(94),function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(oe()),i.a.findDOMNode(this).scrollIntoView()}},{key:"render",value:function(){return r.a.createElement("div",{className:"movie-item-page"},r.a.createElement(we,{params:this.props.match.params,state:this.props.location?this.props.location.state:"",tvshow:!0}))}}]),n}(r.a.Component)),xe=Object(T.b)((function(e){return{tvItems:Object(re.e)(e)}}))(Ve),Re=n(31),Le=(n(95),n(39)),Ge=n.n(Le),Pe=(n(96),function(e){var t=e.handleChange,n=e.label,a=Object(fe.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),He=(n(97),function(e){var t=e.children,n=e.signin,a=Object(fe.a)(e,["children","signin"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"signin":null," custom-button")},a),t)}),Be=n(56),Fe=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.email,c=a.password,t.prev=2,t.next=5,k.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(Re.a)({},r,a))},e.state={email:"",password:""},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"signin"},r.a.createElement("div",{className:"signin__bg",style:{backgroundImage:"url(".concat(Ge.a,")")}}),r.a.createElement("div",{className:"signin__container"},r.a.createElement("div",{className:"signin__shadow"},r.a.createElement("h1",{className:"signin__title"},"Sign In"),r.a.createElement("form",{action:"POST",autoComplete:"new-password",onSubmit:this.handleSubmit},r.a.createElement(Pe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Pe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),r.a.createElement("div",{className:"signin__btn-container"},r.a.createElement("div",{className:"signin__btn"},r.a.createElement(He,{type:"submit",signin:!0}," ","Sign In"," "),r.a.createElement(He,{onClick:V},r.a.createElement(B.a,{icon:Be.a,className:"signin__google-icon"}),"Sign In With Google")))),r.a.createElement("div",{className:"signin__option"},r.a.createElement("span",{className:"signin__option--newuser"},"New to Netflix?"),r.a.createElement(f.b,{to:"/signup",className:"signin__option--link"},"Sign up now.")))))}}]),n}(r.a.Component),qe=(n(98),function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(o.a.mark((function t(n){var a,r,c,i,s,l,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,s=a.confirmPassword,i===s){t.next=5;break}return alert("Passwords dont match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,k.createUserWithEmailAndPassword(c,i);case 8:return l=t.sent,u=l.user,t.next=12,C(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Re.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"signup__bg",style:{backgroundImage:"url(".concat(Ge.a,")")}}),r.a.createElement("div",{className:"signup__container"},r.a.createElement("div",{className:"signup__shadow"},r.a.createElement("h1",{className:"signup__title"},"Sign Up"),r.a.createElement("form",{action:"POST",onSubmit:this.handleSubmit},r.a.createElement(Pe,{name:"displayName",type:"name",value:t,handleChange:this.handleChange,label:"Name",required:!0}),r.a.createElement(Pe,{name:"email",type:"email",value:n,handleChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Pe,{name:"password",type:"password",value:a,handleChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Pe,{name:"confirmPassword",type:"password",value:c,handleChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement("div",{className:"signup__btn-container"},r.a.createElement("div",{className:"signup__btn"},r.a.createElement(He,{type:"submit"}," Sign Up ")))),r.a.createElement("div",{className:"signup__option"},r.a.createElement("span",{className:"signup__option--newuser"},"Already signed up?"),r.a.createElement(f.b,{to:"/signin",className:"signup__option--link"},"Log in now.")))))}}]),n}(r.a.Component)),ze=(n(99),n(100),n(24)),We=n(47),Je=Object(b.g)((function(e){var t=e.item,n=e.history,a=(e.ListItems,t.id),c=t.title,i=t.poster_path,s=t.vote_average,o=t.name,l=c?Object(ze.a)(c):null,u=o?Object(ze.a)(o):null;return r.a.createElement("div",{className:"search-item"},r.a.createElement("div",{className:"search-item__rating-container"},r.a.createElement("span",{className:"search-item__rating"},r.a.createElement("img",{src:Ee.a,alt:"imdb",className:"search-item__imdb"}),r.a.createElement("span",{className:"search-item__rank"},s,"/"),r.a.createElement("span",{className:"search-item__ten"},"10"),r.a.createElement("img",{src:Oe.a,alt:"imdb",className:"search-item__star"}))),r.a.createElement("div",{className:"search-item__addtolist"},r.a.createElement(We.a,{item:t})),r.a.createElement("div",{className:"search-item__img-box",onClick:function(){return c?n.push({pathname:"/movies/".concat(l),state:{id:a}}):n.push({pathname:"/tvshows/".concat(u),state:{id:a}})}},r.a.createElement("img",{src:"".concat(j.e).concat(j.f).concat(i),alt:"movie",className:"search-item__img"})),r.a.createElement("div",{className:"search-item__text"},r.a.createElement("h1",{className:"search-item__title"},c),r.a.createElement("h1",{className:"search-item__title"},o)))})),Ke=Object(S.d)(b.g,Object(T.b)((function(e){return{searchItems:g(e)}})))((function(e){var t=e.searchItems;return r.a.createElement("div",{className:"search-page"},r.a.createElement("h1",{className:"search-page__title"},"Search Results"),r.a.createElement("div",{className:"search-page__outer"},r.a.createElement("div",{className:"search-page__inner"},t.map((function(e){return e.poster_path?r.a.createElement(Je,{key:e.id,item:e}):null})))))})),Xe=(n(102),n(103),Object(S.d)(b.g,Object(T.b)(null,(function(e){return{removeItem:function(t){return e(Object(je.b)(t))}}})))((function(e){var t=e.item,n=e.history,a=e.removeItem,c=t.id,i=t.title,s=t.poster_path,o=t.vote_average,l=t.name,u=i?Object(ze.a)(i):null,m=l?Object(ze.a)(l):null;return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"list-item__rating-container"},r.a.createElement("span",{className:"list-item__rating"},r.a.createElement("img",{src:Ee.a,alt:"imdb",className:"list-item__imdb"}),r.a.createElement("span",{className:"list-item__rank"},o,"/"),r.a.createElement("span",{className:"list-item__ten"},"10"),r.a.createElement("img",{src:Oe.a,alt:"imdb",className:"list-item__star"}))),r.a.createElement("div",{className:"list-item__addtolist",onClick:function(){return a(t)}},r.a.createElement(B.a,{icon:H.h,className:"list-item__remove-icon"})),r.a.createElement("div",{className:"list-item__img-box",onClick:function(){return i?n.push({pathname:"/movies/".concat(u),state:{id:c}}):n.push({pathname:"/tvshows/".concat(m),state:{id:c}})}},r.a.createElement("img",{src:"".concat(j.e).concat(j.f).concat(s),alt:"movie",className:"list-item__img"})),r.a.createElement("div",{className:"list-item__text"},r.a.createElement("h1",{className:"list-item__title"},i),r.a.createElement("h1",{className:"list-item__title"},l)))}))),Ye=Object(T.b)((function(e,t){return{listItems:Object(Ne.a)(e),currentUser:R(e)}}))((function(e){var t=e.listItems,n=e.currentUser;return r.a.createElement("div",{className:"list-overview"},r.a.createElement("h1",{className:"list-overview__title"},n?"".concat(n.displayName,"'s List (").concat(t.length,")"):"Sign in to view your list"),r.a.createElement("div",{className:"list-overview__outer"},n?r.a.createElement("div",{className:"list-overview__inner"},t.map((function(e){return r.a.createElement(Xe,{key:e.id,item:e})}))):null))})),Ze=function(e){Object(p.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=k.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,C(n);case 3:t.sent.onSnapshot((function(t){e.props.setCurrentUser(Object(l.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e.props.setCurrentUser(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(W,{currentRoute:this.props.location.pathname}),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:ae}),r.a.createElement(b.b,{path:"/movies/:title",component:Ue}),r.a.createElement(b.b,{path:"/movies",component:ae}),r.a.createElement(b.b,{path:"/tvshows/:name",component:xe}),r.a.createElement(b.b,{path:"/tvshows",component:_e}),r.a.createElement(b.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(b.a,{to:"/"}):r.a.createElement(Fe,null)}}),r.a.createElement(b.b,{exact:!0,path:"/signup",render:function(){return e.props.currentUser?r.a.createElement(b.a,{to:"/"}):r.a.createElement(qe,null)}}),r.a.createElement(b.b,{exact:!0,path:"/searchresults",component:Ke}),r.a.createElement(b.b,{exact:!0,path:"/mylist",component:Ye})))}}]),n}(r.a.Component),Qe=Object(S.d)(b.g,Object(T.b)((function(e){return{currentUser:R(e)}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:G.SET_CURRENT_USER,payload:e}}(t))}}})))(Ze),$e={isFetching:!0,isAdditionalFetching:!0,movieItems:[],movieGridItems:[],movieCast:[],movieVideos:""},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case K.SET_MOVIE_DATA:return Object(l.a)(Object(l.a)({},e),{},{movieItems:a});case K.SET_MOVIE_GRID_DATA:return Object(l.a)(Object(l.a)({},e),{},{movieGridItems:a});case K.SET_MOVIE_DATA_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1});case K.SET_MOVIE_ADDITIONAL_DATA_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{isAdditionalFetching:!1});case K.SET_MOVIE_ADDITIONAL_DATA:return Object(l.a)(Object(l.a)({},e),{},{movieCast:a.credits.cast,movieVideos:a.videos.results.length?a.videos.results[0].key:"no_trailer_found"});default:return e}},tt={isFetching:!0,tvItems:[],tvGridItems:[],tvCast:[],tvVideos:""},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ce.SET_TV_DATA:return Object(l.a)(Object(l.a)({},e),{},{tvItems:a});case ce.SET_TV_GRID_DATA:return Object(l.a)(Object(l.a)({},e),{},{tvGridItems:a});case ce.SET_TV_DATA_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1});case ce.SET_TV_ADDITIONAL_DATA:return Object(l.a)(Object(l.a)({},e),{},{tvCast:a.credits.cast,tvVideos:a.videos.results.length?a.videos.results[0].key:"no_trailer_found"});default:return e}},at={currentUser:null,hidden:!0},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.SET_CURRENT_USER:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});case G.TOGGLE_HIDDEN_MENU:return Object(l.a)(Object(l.a)({},e),{},{hidden:!e.hidden});default:return e}},ct={searchItems:[]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y.SET_SEARCH_DATA:return Object(l.a)(Object(l.a)({},e),{},{searchItems:a});default:return e}},st={collection:[{id:1,title:"Popular",start:0,end:10},{id:2,title:"Top Rated",start:10,end:20},{id:3,title:"Highest Grossing",start:20,end:30},{id:4,title:"New Releases",start:30,end:40},{id:5,title:"Most Liked",start:40,end:50},{id:6,title:"Trending Now",start:50,end:60}]},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;return t.type,e},lt=n(34),ut=n(60),mt=function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(ut.a)(e),[Object(l.a)({},t)])},dt=function(e,t){return e.filter((function(e){return e.id!==t.id}))},pt={listItems:[]},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case lt.a.ADD_ITEM:return Object(l.a)(Object(l.a)({},e),{},{listItems:mt(e.listItems,t.payload)});case lt.a.REMOVE_ITEM:return Object(l.a)(Object(l.a)({},e),{},{listItems:dt(e.listItems,t.payload)});default:return e}},ft=n(40),ht=n(57),vt={key:"root",storage:n.n(ht).a,whitelist:["list","search"]},bt=Object(S.c)({movie:et,tv:nt,user:rt,search:it,list:_t,collection:ot}),Et=Object(ft.a)(vt,bt),gt=[n(58).a],Ot=Object(S.e)(Et,S.a.apply(void 0,gt)),yt=Object(ft.b)(Ot),jt=n(59);i.a.render(r.a.createElement(T.a,{store:Ot},r.a.createElement(f.a,null,r.a.createElement(jt.a,{persistor:yt},r.a.createElement(Qe,null)))),document.getElementById("root"))}],[[61,3,4]]]);
//# sourceMappingURL=main.1269d8ea.chunk.js.map