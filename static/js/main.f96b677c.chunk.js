(this.webpackJsonpspacebook=this.webpackJsonpspacebook||[]).push([[0],{14:function(n,t,e){"use strict";var r=e(5);e.d(t,"mainActions",(function(){return r.a}));var a=e(15);e.d(t,"initialState",(function(){return a.a})),e.d(t,"mainReducer",(function(){return a.b}));e(16)},15:function(n,t,e){"use strict";e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return f}));var r=e(22),a=e(7),i=e(3),c=e(5);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(e,!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var l={dayPictures:[],requestDate:a.DateTime.local(),error:null};function f(n,t){return Object(i.isActionOf)(c.a.addPictures,t)?u({},n,{dayPictures:n.dayPictures.concat(t.payload)}):Object(i.isActionOf)(c.a.updateRequestDate,t)?u({},n,{requestDate:t.payload}):Object(i.isActionOf)(c.a.changeError,t)?u({},n,{error:t.payload}):n}},16:function(n,t){},21:function(n,t,e){n.exports=e.p+"static/media/banner.2b50f88b.png"},26:function(n,t,e){n.exports=e(37)},37:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(17),c=e.n(i),o=e(4),u=e.n(o),l=e(8),f=e(23),C=e(18),s=e.n(C),p=function(){return a.a.createElement("svg",{width:"150",height:"20",viewBox:"0 0 257 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",{clipPath:"url(#clip0)"},a.a.createElement("path",{d:"M163.779 7.84469C165.522 7.84469 167.163 8.15848 168.65 8.78605C170.137 9.41363 171.419 10.3027 172.496 11.401C173.572 12.4992 174.393 13.8067 175.008 15.3756C175.623 16.9445 175.88 18.5658 175.88 20.3962C175.88 22.2266 175.572 23.9002 175.008 25.4691C174.393 27.038 173.572 28.3455 172.496 29.4437C171.419 30.542 170.137 31.4311 168.65 32.0586C167.163 32.6862 165.522 33 163.779 33C162.394 33 161.163 32.7908 159.984 32.3201C158.805 31.9017 157.779 31.2742 156.805 30.4374L156.036 32.1632H150.19V0.104599H158.035V9.51823C159.728 8.41997 161.676 7.84469 163.779 7.84469ZM162.753 25.7829C163.471 25.7829 164.189 25.626 164.804 25.3645C165.419 25.103 165.983 24.6846 166.445 24.2139C166.906 23.7433 167.265 23.168 167.522 22.4881C167.778 21.8082 167.932 21.1284 167.932 20.3962C167.932 19.664 167.778 18.9319 167.522 18.3043C167.265 17.6244 166.906 17.1014 166.445 16.5784C165.983 16.1078 165.419 15.7417 164.804 15.4279C164.189 15.1664 163.471 15.0095 162.753 15.0095C162.035 15.0095 161.317 15.1664 160.702 15.4279C160.035 15.6894 159.523 16.1078 159.061 16.5784C158.6 17.0491 158.241 17.6244 157.984 18.3043C157.728 18.9841 157.574 19.664 157.574 20.3962C157.574 21.1284 157.728 21.8605 157.984 22.4881C158.241 23.168 158.6 23.691 159.061 24.2139C159.523 24.6846 160.087 25.0507 160.702 25.3645C161.317 25.626 161.984 25.7829 162.753 25.7829Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M190.34 33C188.443 33 186.751 32.6862 185.161 32.0587C183.571 31.4311 182.187 30.542 181.059 29.4438C179.879 28.3455 179.008 26.9858 178.341 25.4691C177.726 23.9525 177.367 22.279 177.367 20.4485C177.367 18.6181 177.675 16.9446 178.341 15.4279C178.956 13.9113 179.879 12.5515 181.059 11.4533C182.238 10.355 183.571 9.46596 185.161 8.83838C186.751 8.21081 188.494 7.89702 190.34 7.89702C192.237 7.89702 193.929 8.21081 195.519 8.83838C197.109 9.46596 198.493 10.355 199.621 11.4533C200.8 12.5515 201.672 13.9113 202.339 15.4279C203.005 16.9446 203.313 18.6181 203.313 20.4485C203.313 22.279 203.005 23.9525 202.339 25.4691C201.723 26.9858 200.8 28.3455 199.621 29.4438C198.442 30.542 197.109 31.4311 195.519 32.0587C193.929 32.6862 192.237 33 190.34 33ZM190.34 25.6783C191.776 25.6783 193.006 25.2076 193.929 24.214C194.852 23.2203 195.314 21.9652 195.314 20.3962C195.314 18.8273 194.852 17.5721 193.929 16.5785C193.006 15.5848 191.827 15.1141 190.34 15.1141C188.904 15.1141 187.674 15.5848 186.751 16.5785C185.828 17.5721 185.315 18.8273 185.315 20.3962C185.315 21.9652 185.776 23.2203 186.751 24.214C187.725 25.2076 188.904 25.6783 190.34 25.6783Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M217.722 33C215.825 33 214.132 32.6862 212.543 32.0587C210.953 31.4311 209.569 30.542 208.441 29.4438C207.261 28.3455 206.39 26.9858 205.723 25.4691C205.108 23.9525 204.749 22.279 204.749 20.4485C204.749 18.6181 205.056 16.9446 205.723 15.4279C206.338 13.9113 207.261 12.5515 208.441 11.4533C209.62 10.355 210.953 9.46596 212.543 8.83838C214.132 8.21081 215.876 7.89702 217.722 7.89702C219.619 7.89702 221.311 8.21081 222.901 8.83838C224.49 9.46596 225.875 10.355 227.003 11.4533C228.182 12.5515 229.054 13.9113 229.721 15.4279C230.387 16.9446 230.695 18.6181 230.695 20.4485C230.695 22.279 230.387 23.9525 229.721 25.4691C229.105 26.9858 228.182 28.3455 227.003 29.4438C225.824 30.542 224.49 31.4311 222.901 32.0587C221.363 32.6862 219.619 33 217.722 33ZM217.773 25.6783C219.209 25.6783 220.44 25.2076 221.363 24.214C222.285 23.2203 222.747 21.9652 222.747 20.3962C222.747 18.8273 222.285 17.5721 221.363 16.5785C220.44 15.5848 219.26 15.1141 217.773 15.1141C216.337 15.1141 215.107 15.5848 214.184 16.5785C213.261 17.5721 212.748 18.8273 212.748 20.3962C212.748 21.9652 213.209 23.2203 214.184 24.214C215.107 25.2076 216.286 25.6783 217.773 25.6783Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M247.616 32.1632L241.822 22.2266V32.1632H233.874V0.104599H241.822V17.8859L247.309 8.62916H256.231L249.052 19.8732L256.949 32.2155H247.616V32.1632Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M26.8178 7.06023H9.79389C9.02474 7.06023 8.40942 7.37402 7.9992 7.94929C7.53771 8.52457 7.3326 9.25674 7.3326 10.0412C7.3326 10.8257 7.53771 11.5056 7.94792 12.0285C8.35814 12.6038 8.97346 12.8653 9.79389 12.8653H19.7929C22.5106 12.8653 24.6129 13.9113 26.2025 15.9509C27.6383 17.7813 28.3049 20.0824 28.3049 22.8019C28.3049 25.5214 27.587 27.7702 26.2025 29.6529C24.6129 31.6926 22.5106 32.7385 19.7929 32.7385H1.58958V25.8352H18.6648C19.3827 25.8352 19.998 25.5214 20.4082 24.8938C20.8184 24.2662 21.0235 23.5864 21.0235 22.7496C21.0235 21.9128 20.8184 21.2853 20.4082 20.71C19.998 20.187 19.434 19.8732 18.6648 19.8732H8.61452C5.89685 19.8732 3.74322 18.8273 2.15363 16.7876C0.717877 15.0095 0 12.7084 0 10.0412C0 7.37402 0.717877 5.1252 2.15363 3.29478C3.74322 1.25516 5.89685 0.209198 8.61452 0.209198H26.8178V7.06023Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M47.0722 19.8732H40.3036C38.5602 19.8732 37.3296 20.4485 36.5604 21.6514C36.0477 22.4881 35.7913 23.4818 35.7913 24.737C35.7913 25.2076 35.7913 25.4691 35.7913 25.5214C35.7913 25.626 35.8426 25.6783 35.8426 25.7829V32.7385H28.9202C28.9202 32.2156 28.9202 31.4834 28.9202 30.542C28.9202 29.6007 28.9202 28.3455 28.9202 26.8289C28.9202 25.3122 28.9202 23.691 28.9202 21.9652C28.9202 19.3503 29.5355 17.2583 30.8174 15.6894C32.3044 13.8067 34.4581 12.8653 37.2783 12.8653H45.9441C46.7645 12.8653 47.3799 12.6038 47.7901 12.0286C48.2003 11.4533 48.4567 10.8257 48.4567 10.0412C48.4567 9.20447 48.2516 8.52459 47.8414 8.00161C47.3799 7.37404 46.7645 7.06025 45.9441 7.06025H28.9202V0.156921H47.1235C49.8412 0.156921 51.9948 1.20288 53.5844 3.2425C55.0201 5.07293 55.738 7.37404 55.738 10.0412C55.738 12.7084 55.0201 14.9572 53.5844 16.7877C51.9435 18.8796 49.7899 19.8732 47.0722 19.8732Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M89.0167 32.7385H81.4277L73.0696 7.63552C73.0183 7.37403 72.8132 7.21714 72.5056 7.21714C72.1979 7.21714 71.9928 7.37403 71.839 7.63552L63.6859 32.7385H55.9944C56.4559 31.1696 57.3789 28.1363 58.8146 23.4818C60.2504 18.8796 61.6349 14.5388 63.0193 10.4073C64.5576 5.85739 65.4806 3.29479 65.7883 2.77181C66.4036 1.88275 67.3266 1.15058 68.5572 0.679895C69.7879 0.209213 71.0698 -0.0522766 72.5056 -0.0522766C73.9413 -0.0522766 75.2232 0.209213 76.4026 0.679895C77.582 1.15058 78.505 1.83045 79.1203 2.77181C79.4792 3.29479 80.4535 5.85739 81.9405 10.355C82.8635 13.1268 84.248 17.4675 86.0939 23.4295C87.2733 27.0904 88.1963 30.1759 89.0167 32.7385Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M116.399 32.7385H100.759C97.0159 32.7385 94.0419 31.065 91.837 27.7702C89.8885 24.7892 88.9142 21.0761 88.9142 16.7353C88.9142 12.29 89.8884 8.52457 91.8882 5.38669C94.0932 1.93503 97.0159 0.209198 100.759 0.209198H116.399V7.11253H101.939C100.195 7.11253 98.8106 8.05389 97.8364 9.93661C96.9647 11.6101 96.5032 13.7021 96.5032 16.2124C96.5032 18.775 96.9647 20.9715 97.8876 22.7496C98.9132 24.7369 100.246 25.7306 101.939 25.7306H116.399V32.7385Z",fill:"#BE0122"}),a.a.createElement("path",{d:"M145.165 32.7385H126.962C124.244 32.7385 122.09 31.6926 120.501 29.6007C119.065 27.7179 118.347 25.4168 118.347 22.6973C118.347 20.2393 118.962 18.0951 120.142 16.317C118.962 14.5389 118.347 12.3946 118.347 9.98894C118.347 7.32174 119.065 5.07293 120.501 3.19021C122.09 1.15059 124.244 0.10463 126.962 0.10463H145.165V7.00796H128.192C127.423 7.00796 126.808 7.32174 126.398 7.89702C125.936 8.4723 125.731 9.20447 125.731 9.98894C125.731 10.7734 125.936 11.4533 126.346 11.9763C126.757 12.5515 127.372 12.813 128.192 12.813H145.216V19.6641V19.8732H127.218C126.757 20.0824 126.398 20.4485 126.09 20.9715C125.834 21.4945 125.68 22.0698 125.68 22.7496C125.68 23.5341 125.885 24.2663 126.295 24.8416C126.705 25.4168 127.321 25.7306 128.141 25.7306H145.165V32.7385Z",fill:"#BE0122"})))},d=e(1),m=e(2);function h(){var n=Object(d.a)(["\n  padding-top: 20px;\n  padding-left: 30px;\n"]);return h=function(){return n},n}var E=m.a.header(h()),y=function(){return a.a.createElement(E,null,a.a.createElement(p,null))},b=e(21),v=e.n(b);function g(){var n=Object(d.a)(["\n  position: relative;\n  width: 200px;\n  height: 240px;\n  left: 40px;\n  top: 130px;\n\n  font-family: DM Serif Display;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 40px;\n  line-height: 106.2%;\n  color: white;\n"]);return g=function(){return n},n}function O(){var n=Object(d.a)(["\n  display: flex;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 400px;\n  width: 100%;\n  margin-top: -30px;\n  margin-bottom: -70px;\n"]);return O=function(){return n},n}var x=m.a.div(O(),v.a),w=m.a.div(g()),j=function(){return a.a.createElement(x,null,a.a.createElement(w,null,"Astronomy Picture of the Day"))},D=e(7);function H(){var n=Object(d.a)(["\n  font-size: 15px;\n  color: #ffffff;\n"]);return H=function(){return n},n}function P(){var n=Object(d.a)(["\n  font-size: 15px;\n  color: #818080;\n  margin-bottom: 10px;\n"]);return P=function(){return n},n}function A(){var n=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 18px;\n  color: #ffffff;\n"]);return A=function(){return n},n}function S(){var n=Object(d.a)(["\n  max-width: 100%;\n  background: linear-gradient(180deg, rgba(23, 23, 28, 0) 0%, #17171c 100%);\n  padding: 20px 30px;\n  font-family: Source Sans Pro;\n  font-style: normal;\n  font-weight: 300;\n"]);return S=function(){return n},n}function R(){var n=Object(d.a)(["\n  display: flex;\n  height: 400px;\n  max-width: 100%;\n  min-width: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n"]);return R=function(){return n},n}function k(){var n=Object(d.a)(["\n  margin-left: 30px;\n  font-family: DM Serif Display;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  text-transform: lowercase;\n  color: #be0122;\n  margin-bottom: 10px;\n"]);return k=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n"]);return M=function(){return n},n}var V=m.a.div(M()),T=m.a.div(k()),B=m.a.div(R(),(function(n){return n.url})),L=m.a.div(S()),Z=m.a.div(A()),_=m.a.div(P()),U=m.a.div(H()),z=function(n){return a.a.createElement(V,null,a.a.createElement(T,null,(t=n.dayPicture.date,D.DateTime.fromISO(t).toFormat("dd LLL yyyy"))),a.a.createElement(B,{url:n.dayPicture.url}),a.a.createElement(L,null,a.a.createElement(Z,null,n.dayPicture.title),a.a.createElement(_,null,n.dayPicture.copyright),a.a.createElement(U,null,n.dayPicture.explanation)));var t},q=e(6);function I(){var n=Object(d.a)(["\n  font-family: 'DM Serif Display';\n  color: #be0122;\n  font-size: 30px;\n  margin-left: 30px;\n"]);return I=function(){return n},n}function N(){var n=Object(d.a)(["\n  font-family: 'DM Serif Display';\n  max-width: 375px;\n  min-width: 375px;\n"]);return N=function(){return n},n}var F=m.a.div(N()),G=m.a.div(I()),J=2;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(){var n=Object(r.useReducer)(q.mainReducer,q.initialState),t=Object(f.a)(n,2),e=t[0],i=t[1],c=function(n){return"https://api.nasa.gov/planetary/apod?api_key=".concat("4Z2WhZrhvwLUMNFzfu6JvctaPjU8DOocBnBMlVK8","&date=").concat(n)};function o(n){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(t).then((function(n){return n.json()})).catch((function(n){return i(q.mainActions.changeError(new Error(n)))})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,t){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function n(t,e){var r,a,i,l,f;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=[],a=0;a<e;a++)i=t.minus({days:a}).toFormat("yyyy-LL-dd").toString(),l=c(i),r.push(o(l));return n.next=4,Promise.all(r);case 4:return f=n.sent,n.abrupt("return",f);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(l.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(e.requestDate,J);case 2:t=n.sent,i(q.mainActions.updateRequestDate(e.requestDate.minus({days:J}))),i(q.mainActions.addPictures(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return a.a.createElement(F,null,a.a.createElement(y,null),a.a.createElement(j,null),e.error?a.a.createElement(G,null,"Sorry. ",a.a.createElement("br",null)," Too many requests. ",a.a.createElement("br",null)," Try again later..."):a.a.createElement(s.a,{pageStart:0,loadMore:function(){return m.apply(this,arguments)},hasMore:!0,loader:a.a.createElement("div",{className:"loader",key:0},"Loading ...")},e.dayPictures.map((function(n,t){return a.a.createElement(z,{dayPicture:n,key:n.title+t})}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},5:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r,a=e(3);!function(n){n.ADD_PICTURES="main/ADD_PICTURES",n.UPDATE_REQUEST_DATE="main/UPDATE_REQUEST_DATE",n.CHANGE_ERROR="main/CHANGE_ERROR"}(r||(r={}));var i={addPictures:Object(a.createStandardAction)(r.ADD_PICTURES)(),updateRequestDate:Object(a.createStandardAction)(r.UPDATE_REQUEST_DATE)(),changeError:Object(a.createStandardAction)(r.CHANGE_ERROR)()}},6:function(n,t,e){"use strict";var r=e(14);e.o(r,"initialState")&&e.d(t,"initialState",(function(){return r.initialState})),e.o(r,"mainActions")&&e.d(t,"mainActions",(function(){return r.mainActions})),e.o(r,"mainReducer")&&e.d(t,"mainReducer",(function(){return r.mainReducer}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f96b677c.chunk.js.map