(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(66),c=n.n(i),o=(n(73),n(2)),u=n(3),s=n(5),d=n(4),m=n(6),l=(n(74),n(75),n(15)),h=n(7);function p(e,t,n){var a,r=new Date;return r.getDay()>e?(a=Object(h.addDays)(r,e-r.getDay()+7),console.log("hello")):r.getDay()===e&&r.getHours()>t?(a=Object(h.addDays)(r,e-r.getDay()+7),console.log("what")):r.getDay()===e&&r.getHours()===t&&r.getMinutes()>n?(a=a=Object(h.addDays)(r,e-r.getDay()+7),console.log("whatthe")):a=Object(h.addDays)(r,e-r.getDay()),a.setHours(t),a.setMinutes(n),a.setSeconds(0),a}function _(e){var t,n,a,r="";return e=(t=function(e){return g(e,3600)}(e)).seconds,n=t.result,e=(t=function(e){return g(e,60)}(e)).seconds,a=t.result,n&&(r="".concat(r," ").concat(f(n),":")),r="".concat(r).concat(f(a),":").concat(f(e))}function f(e){return e<10?"0".concat(e):"".concat(e)}function g(e,t){e=parseInt(e,10);var n=Math.floor(e/t);return n&&(e-=n*t),{seconds:e,result:n}}function y(e){var t=new Date;return _(Object(h.differenceInSeconds)(e,t))}var b=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(s.a)(this,Object(d.a)(t).call(this,e));var a=p(e.air_day,e.air_hour,e.air_minute);return n.state={flicker:!1,airDate:a,currentDistance:y(a),currentInterval:null},n.countdownTimer=n.countdownTimer.bind(Object(l.a)(Object(l.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setInterval(function(){e.countdownTimer(e.state.airDate)},1e3);this.setState({currentInterval:t})}},{key:"countdownTimer",value:function(e){this.setState({currentDistance:y(e)})}},{key:"render",value:function(){return r.a.createElement("span",null,this.state.currentDistance)}}]),t}(a.Component),j=function(e){return r.a.createElement("div",{className:"ShowCardTopBanner"},r.a.createElement(b,{air_day:e.air_day,air_hour:e.air_hour,air_minute:e.air_minute}))},v=(n(178),function(e){return r.a.createElement("div",{className:"ShowCardBottomBanner"},r.a.createElement("span",null,e.title))}),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.show,t={backgroundImage:"url(".concat(e.img_src,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return r.a.createElement("article",{className:"ShowCard",style:t},r.a.createElement(j,{air_day:e.air_day,air_hour:e.air_hour,air_minute:e.air_minute}),r.a.createElement(v,{title:e.title}))}}]),t}(a.Component);n(179);var w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ShowFeed"},function(e){var t=new Date;return e.sort(function(e,n){return Object(h.differenceInSeconds)(p(e.air_day,e.air_hour,e.air_minute),t)-Object(h.differenceInSeconds)(p(n.air_day,n.air_hour,n.air_minute),t)}),e}(this.props.shows).map(function(e){return r.a.createElement(O,{show:e,key:e.id})}))}}]),t}(a.Component);n(180);function k(){return(new Date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}var D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={currentTime:k()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.setState({currentTime:k()})})}},{key:"render",value:function(){return r.a.createElement("header",{className:"RinHeader"},r.a.createElement("div",{className:"rinTitles"},r.a.createElement("span",{id:"rinMainTitle"},"rin"),r.a.createElement("span",{id:"rinDescription"},"Weekly Anime Airing Tracker")),r.a.createElement("div",{className:"rinTime"},r.a.createElement("span",{id:"rinCurrentTime",title:"Current Time"},this.state.currentTime)))}}]),t}(a.Component),E=(n(181),[{id:1,title:"That Time I Got Reincarnated as a Slime",air_day:1,air_hour:23,air_minute:0,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/548785635784130570/slime.jpg"},{id:2,title:"The Rising of the Shield Hero",air_day:2,air_hour:21,air_minute:0,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/548785611314561036/shield.jpg"},{id:3,title:"Kemurikusa",air_day:3,air_hour:21,air_minute:30,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/548857972885815306/kemuri.jpg"},{id:4,title:"Sword Art Online: Alicization",air_day:5,air_hour:23,air_minute:0,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/549055033824772136/saoalice.jpg"},{id:5,title:"KakeguruiXX",air_day:2,air_hour:1,air_minute:30,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/549058934179233805/kakeguruixx.jpg"},{id:6,title:"Gotoubun no Hanayome",air_day:5,air_hour:22,air_minute:30,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/549061764126474261/gotoubun.jpg"},{id:7,title:"Kaguya-sama: Love is War",air_day:6,air_hour:22,air_minute:30,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/549061068190777344/kaguya.jpg"},{id:8,title:"Dororo",air_day:1,air_hour:21,air_minute:30,img_src:"https://cdn.discordapp.com/attachments/511245116871278594/549062287361703958/dororo.jpg"}]),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Rin"},r.a.createElement(D,null),r.a.createElement("div",{className:"content--center"},r.a.createElement("main",{className:"RinContent"},r.a.createElement(w,{shows:E}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,n){e.exports=n(182)},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.bb7a5e47.chunk.js.map