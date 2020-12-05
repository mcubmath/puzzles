(this["webpackJsonpstudent-app"]=this["webpackJsonpstudent-app"]||[]).push([[0],{147:function(e,t){},149:function(e,t){},163:function(e,t){},165:function(e,t){},193:function(e,t){},195:function(e,t){},196:function(e,t){},202:function(e,t){},204:function(e,t){},222:function(e,t){},224:function(e,t){},236:function(e,t){},239:function(e,t){},260:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchUserData",(function(){return qe}));var r={};n.r(r),n.d(r,"name",(function(){return D})),n.d(r,"id",(function(){return H})),n.d(r,"ListPreview",(function(){return F})),n.d(r,"Instructions",(function(){return q})),n.d(r,"Instance",(function(){return L})),n.d(r,"instanceList",(function(){return X}));var c={};n.r(c),n.d(c,"name",(function(){return R})),n.d(c,"id",(function(){return W})),n.d(c,"ListPreview",(function(){return Y})),n.d(c,"Instance",(function(){return G})),n.d(c,"instanceList",(function(){return Z}));var a={};n.r(a),n.d(a,"name",(function(){return le})),n.d(a,"id",(function(){return de})),n.d(a,"ListPreview",(function(){return he})),n.d(a,"instanceList",(function(){return je})),n.d(a,"Instance",(function(){return fe})),n.d(a,"Instructions",(function(){return ae}));var s=n(37),o=n(13),i=n(5),u=n.n(i),l=n(7),d=n(2),h=n(0),j=n(1),f=n.n(j),b=n(134),p=n.n(b),v=n(48),m=n(8),O=n(137),g=n(135),x=n.n(g),w=f.a.createContext({user:null,setUser:function(){}});function k(e){var t=Object(j.useState)(),n=Object(d.a)(t,2),r=n[0],c=n[1],a=Object(j.useState)(),s=Object(d.a)(a,2),o=s[0],i=s[1],f=Object(j.useState)(!1),b=Object(d.a)(f,2),p=b[0],v=b[1],m=Object(j.useState)(!1),O=Object(d.a)(m,2),g=O[0],k=O[1],y=Object(j.useContext)(w).setUser,N=function(e,t){e((function(e){var n=t.target.value.replace(/[^a-zA-Z\-']/,"");return n.length<20?n:e}))},z=Object(j.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(n){var c,a,s,i,l,d,h;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&o){t.next=3;break}return k("missing name"),t.abrupt("return");case 3:return v(n?"create":"login"),c={first:r,last:o},a="".concat("https://secret-plains-66902.herokuapp.com/api","/students")+(n?"":"/login"),t.prev=6,t.next=9,fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 9:if(s=t.sent,v(!1),!s.ok){t.next=29;break}return k(!1),t.prev=13,t.next=16,s.json();case 16:i=t.sent.token,l=x.a.decode(i),d=l.student,h={token:i,student:d},sessionStorage.setItem("mcub-student-user",JSON.stringify(h)),y(h),e.history.push("/"),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(13),console.log(t.t0);case 27:t.next=31;break;case 29:k(s.status),console.log("HTTP error, status = "+s.status);case 31:t.next=38;break;case 33:t.prev=33,t.t1=t.catch(6),v(!1),k(500),console.log(t.t1);case 38:case"end":return t.stop()}}),t,null,[[6,33],[13,24]])})));return function(e){return t.apply(this,arguments)}}(),[r,o,e.history,y]),S=Object(j.useCallback)((function(e){"Enter"===e.key&&z(!1)}),[z]);return Object(j.useEffect)((function(){return window.addEventListener("keydown",S),function(){return window.removeEventListener("keydown",S)}}),[S]),Object(h.jsx)("div",{className:"login-container",children:Object(h.jsxs)("div",{className:"login-window",children:[p?Object(h.jsx)("div",{className:"fetching-indicator",children:"create"===p?"Creating new user...":"Logging in..."}):null,g?Object(h.jsx)("p",{className:"login-error",children:404===g?"User not found. Please try again or create a new user.":403===g?"User already exists.":"missing name"===g?"Please enter both your first and last name.":"An error occurred, please try again."}):null,Object(h.jsxs)("div",{className:"name-container first",children:[Object(h.jsx)("label",{htmlFor:"firstname",children:"First Name:"}),Object(h.jsx)("input",{type:"text",name:"firstname",id:"firstname",value:r,onChange:N.bind(null,c)})]}),Object(h.jsxs)("div",{className:"name-container last",children:[Object(h.jsx)("label",{htmlFor:"lastname",children:"Last Name:"}),Object(h.jsx)("input",{type:"text",name:"lastname",id:"lastname",value:o,onChange:N.bind(null,i)})]}),Object(h.jsx)("button",{className:"create-student",onClick:function(){return z(!0)},children:"Create"}),Object(h.jsx)("button",{className:"login-student",onClick:function(){return z(!1)},children:"Log-In"})]})})}var y=n(12),N={"-":"-","+":"+","*":"x","/":"\xf7"},z={size:4,work:Array(16).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1],c=Math.floor(r/4),a=r%4,s=(a+c)%4+1;return{row:c,col:a,value:s}})),cages:[]},S={size:4,work:[{col:0,row:0,value:1},{col:1,row:0,value:2},{col:2,row:0,value:3},{col:3,row:0,value:4},{col:0,row:2,value:2},{col:0,row:3,value:4},{col:1,row:3,value:1},{col:3,row:3,value:3},{col:2,row:1,value:2},{col:2,row:2,value:4}],cages:[{squares:[{col:0,row:0},{col:1,row:0}],operation:"+",result:"3"},{squares:[{col:2,row:0},{col:3,row:0}],operation:"-",result:"1"},{squares:[{col:3,row:3}],operation:"",result:"3"},{squares:[{col:0,row:2},{col:0,row:3},{col:1,row:3}],operation:"*",result:"8"},{squares:[{col:2,row:1},{col:2,row:2}],operation:"/",result:"2"}]},C={size:4,work:Array(16).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1],c=[3,2,4,1,2,1,3,4,4,3,1,2,1,4,2,3],a=Math.floor(r/4),s=r%4,o=c[r];return{row:a,col:s,value:o}})),cages:[{squares:[{col:0,row:0},{col:0,row:1}],operation:"+",result:"5"},{squares:[{col:0,row:2},{col:0,row:3},{col:1,row:3}],operation:"+",result:"9"},{squares:[{col:1,row:0},{col:1,row:1},{col:2,row:0}],operation:"-",result:"1"},{squares:[{col:1,row:2},{col:2,row:2}],operation:"+",result:"4"},{squares:[{col:2,row:1},{col:3,row:0},{col:3,row:1}],operation:"-",result:"0"},{squares:[{col:2,row:3},{col:3,row:2},{col:3,row:3}],operation:"+",result:"7"}]};function q(e){var t=e.history;return Object(h.jsxs)("div",{className:"calcudoku-instructions",children:[Object(h.jsxs)("h2",{children:["Calcudoku Instructions",Object(h.jsx)("hr",{})]}),Object(h.jsx)("p",{children:"The goal of each puzzle is to fill the grid using only certain digits \u2013\u2013 1 through 4 for a 4\xd74 grid, 1 through 5 for a 5\xd75, etc. \u2013\u2013 so that no digit appears more than once in any row or any column."}),Object(h.jsx)(I,{data:z}),Object(h.jsx)("p",{children:"Additionally, the grid is divided into heavily outlined groups of squares called \u201ccages\u201d. Each cage has a target number and an operation in its upper left corner. The numbers when the numbers in the cage are combined using the cage\u2019s operation they must equal the target number."}),Object(h.jsx)(I,{data:S}),Object(h.jsx)("p",{children:'Digits may be repeated within a cage, as long as they are not in the same row or column. No operation is relevant for a single-cell cage: placing the "target" in the cell is the only possibility.'}),Object(h.jsx)(I,{data:C}),Object(h.jsxs)("p",{children:["Be careful that you know for sure that a number"," ",Object(h.jsx)("strong",{children:"has"})," to go in a square before you put it there. Making a mistake early can cause trouble later on. Use lots of process of elimination!"]}),Object(h.jsx)("button",{className:"try-it",onClick:function(){return t.push("/calcudoku/4x4beginner1")},children:"Try It!"})]})}function I(e){var t=e.data,n=t.size,r=Object(j.useState)(function(e){var t=e.size,n=e.cages,r=e.work;return Array(Math.pow(t,2)).fill(null).map((function(){for(var e=arguments.length,c=new Array(e),a=0;a<e;a++)c[a]=arguments[a];var s=c[1],o=Math.floor(s/t),i=s%t,u=E({col:o,row:i}),l=r.find(u),d=l?l.value:null,h=n.find((function(e){return e.squares.find(u)})),j=T({col:o,row:i},h);if(!h)return{col:o,row:i,value:d,neighbors:j};var f=h.squares.every((function(e){return e.col>=o&&(e.row>=i||e.col>o)})),b=f?h.result:null,p=f?N[h.operation]:null;return{col:o,row:i,value:d,neighbors:j,result:b,operation:p}}))}(t)),c=Object(d.a)(r,2),a=c[0],s=(c[1],Object(j.useState)(null)),o=Object(d.a)(s,2),i=o[0],u=o[1];return Object(h.jsx)("div",{children:a?Object(h.jsx)("div",{className:"puzzle-container instructions",size:n,children:Object(h.jsx)("div",{className:"grid-container",size:n,children:a.map((function(e){var t="calcudoku-square "+e.neighbors.join(" ")+(e===i?" active":"");return Object(h.jsxs)("div",{className:t,onClick:function(){return u(e)},children:[Object(h.jsxs)("div",{className:"cage-indicator",children:[e.result,e.operation]}),Object(h.jsx)("input",{type:"number",value:e.value||"",disabled:!0})]})}))})}):null})}function T(e,t){var n=[],r={"n-up":{col:e.col-1,row:e.row},"n-down":{col:e.col+1,row:e.row},"n-left":{col:e.col,row:e.row-1},"n-right":{col:e.col,row:e.row+1}};if(!t)return Object.keys(r);for(var c in r){var a=E(r[c]);t.squares.find(a)&&n.push(c)}return n}function E(e){var t=e.col,n=e.row;return function(e){return e.col===t&&e.row===n}}var A={"-":"-","+":"+","*":"x","/":"\xf7"};function L(e){var t=Object(j.useMemo)((function(){return e.name}),[e.name]),n=Object(j.useMemo)((function(){return"calcudoku-instance-data-".concat(t)}),[t]),r=Object(j.useMemo)((function(){return JSON.parse(sessionStorage.getItem(n))}),[n]),c=Object(j.useState)(r?r.size:null),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(j.useState)(r?J(r):null),f=Object(d.a)(i,2),b=f[0],p=f[1],v=Object(j.useState)(r?r.cages:null),m=Object(d.a)(v,2),O=m[0],g=m[1],x=Object(j.useState)(null),k=Object(d.a)(x,2),N=k[0],z=k[1],S=Object(j.useState)(r?"saved":null),C=Object(d.a)(S,2),q=C[0],I=C[1],T=Object(j.useContext)(w).user.token,E="".concat("https://secret-plains-66902.herokuapp.com/api","/puzzles/calcudoku/").concat(t);Object(j.useEffect)((function(){r||Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E,{method:"GET",headers:{authorization:T}});case 2:if(!(t=e.sent).ok){e.next=21;break}return e.prev=4,e.next=7,t.json();case 7:r=e.sent,sessionStorage.setItem(n,JSON.stringify(r)),o(r.size),p(J(r)),g(r.cages),I("saved"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),p([]),console.log(e.t0);case 19:e.next=22;break;case 21:console.log("HTTP error, status = "+t.status);case 22:case"end":return e.stop()}}),e,null,[[4,15]])})))()}),[E,T,r,n]),Object(j.useEffect)((function(){var e="".concat("https://secret-plains-66902.herokuapp.com/api","/activepuzzle");return Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",authorization:T},body:JSON.stringify({puzzleName:"calcudoku",puzzleId:t})});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))(),function(){fetch(e,{method:"DELETE",headers:{authorization:T}})}}),[T,t]);var A=Object(j.useCallback)((function(){var e=O.reduce((function(e,t){return!!B(b,t)}),!1),t=b.reduce((function(e,t){return!!U(b,t)}),!1);return!e&&!t}),[b,O]);Object(j.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem(n));e.completed||A()&&(fetch("".concat(E,"/completed"),{method:"PUT",headers:{"Content-Type":"application/json",authorization:T},body:JSON.stringify({completed:!0})}),e.completed=!0,sessionStorage.setItem(n,JSON.stringify(e)))}),[n,A,E,T]);var L=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I("saving"),t=b.map((function(e){return{col:e.col,row:e.row,value:e.value}})),e.next=4,fetch(E,{method:"PUT",headers:{"Content-Type":"application/json",authorization:T},body:JSON.stringify({puzzleData:t})});case 4:r=e.sent,(c=JSON.parse(sessionStorage.getItem(n))).work=t,sessionStorage.setItem(n,JSON.stringify(c)),r.ok?I("saved"):I("error");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.key;if(N){if(!isNaN(t)&&1<=t&&t<=s)N.value=t;else{var n=N.col,r=N.row;switch(t){case"Backspace":case"Delete":N.value="";break;case"ArrowUp":return void z(b.find(M({col:n-1,row:r}))||N);case"ArrowDown":return void z(b.find(M({col:n+1,row:r}))||N);case"ArrowLeft":return void z(b.find(M({col:n,row:r-1}))||N);case"ArrowRight":return void z(b.find(M({col:n,row:r+1}))||N);default:return}}p(Object(y.a)(b)),L()}else["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&z(b.find(M({col:0,row:0})))};Object(j.useEffect)((function(){return window.addEventListener("keydown",P),function(){return window.removeEventListener("keydown",P)}}));var D=function(e){return Object(h.jsx)("button",{className:"number-select",onClick:function(){N.value=e,p(Object(y.a)(b)),L()},children:e},"num".concat(e))};return Object(h.jsx)("div",{children:b?Object(h.jsxs)("div",{className:"puzzle-container",size:s,children:[Object(h.jsx)("div",{className:"saving-indicator",children:"saving"===q?"Saving...":"error"===q?"An error occurred while saving.":"saved"===q?"Saved.":" "}),Object(h.jsx)("div",{className:"grid-container",size:s,children:b.map((function(e){var n=M(e),r=e.result&&O?O.find((function(e){return e.squares.find(n)})):null,c="calcudoku-square "+e.neighbors.join(" ")+(e===N?" active":"")+(t.match("4x4beginner1")&&U(b,e)?" duplicate":"")+((t.match("4x4beginner1")||t.match("4x4beginner2"))&&r&&B(b,r)?" cageError":"");return Object(h.jsxs)("div",{className:c,onClick:function(){return z(e)},children:[Object(h.jsxs)("div",{className:"cage-indicator",children:[e.result,e.operation]}),Object(h.jsx)("input",{type:"number",value:e.value||"",disabled:!0}),Object(h.jsx)("div",{className:"selector"})]})}))}),Object(h.jsx)("div",{className:"number-select-container",children:new Array(s).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return D(r+1)}))})]}):Object(h.jsx)("h2",{className:"loading-indicator",children:"Loading..."})})}function J(e){var t=e.size,n=e.cages,r=e.work;return Array(Math.pow(t,2)).fill(null).map((function(){for(var e=arguments.length,c=new Array(e),a=0;a<e;a++)c[a]=arguments[a];var s=c[1],o=Math.floor(s/t),i=s%t,u=M({col:o,row:i}),l=r.find(u),d=n.find((function(e){return e.squares.find(u)})),h=P({col:o,row:i},d),j=d.squares.every((function(e){return e.col>=o&&(e.row>=i||e.col>o)})),f=j?d.result:null,b=j?A[d.operation]:null,p=l?l.value:null;return{col:o,row:i,value:p,neighbors:h,result:f,operation:b}}))}function P(e,t){var n=[],r={"n-up":{col:e.col-1,row:e.row},"n-down":{col:e.col+1,row:e.row},"n-left":{col:e.col,row:e.row-1},"n-right":{col:e.col,row:e.row+1}};for(var c in r){var a=M(r[c]);t.squares.find(a)&&n.push(c)}return n}function M(e){var t=e.col,n=e.row;return function(e){return e.col===t&&e.row===n}}function U(e,t){var n=t.col,r=t.row,c=t.value;return e.some((function(e){return(e.row===r||e.col===n)&&!(e.row===r&&e.col===n)&&e.value===c}))}function B(e,t){var n,r,c=t.squares,a=t.operation,s=t.result,o=c.map((function(t){return+e.find(M(t)).value}));if(o.some((function(e){return!e})))return!1;switch(a){case"+":r=0,n=function(e){return function(e,t){return e+t}};break;case"-":r=0,n=function(e){return function(t,n,r){return r===e?t+n:t-n}};break;case"*":r=1,n=function(e){return function(e,t){return e*t}};break;case"/":r=1,n=function(e){return function(t,n,r){return r===e?t*n:t/n}};break;default:r=0,n=function(e){return function(e,t){return t}}}return!o.map((function(e,t,c){return c.reduce(n(t),r)})).includes(+s)}var D="Calcudokus",H="calcudoku";function F(){return Object(h.jsx)("div",{className:"list-preview",children:"Find all calcudokus here"})}var X=[{instance:"instructions",title:"Instructions"},{instance:"4x4beginner1",title:"4x4 Beginner 1"},{instance:"4x4beginner2",title:"4x4 Beginner 2"},{instance:"4x4beginner3",title:"4x4 Beginner 3"},{instance:"4x4beginner4",title:"4x4 Beginner 4"},{instance:"4x4beginner5",title:"4x4 Beginner 5"},{instance:"4x4intermediate1",title:"4x4 Intermediate 1"},{instance:"4x4intermediate2",title:"4x4 Intermediate 2"},{instance:"4x4intermediate3",title:"4x4 Intermediate 3"},{instance:"4x4intermediate4",title:"4x4 Intermediate 4"},{instance:"4x4expert1",title:"4x4 Expert 1"},{instance:"4x4expert2",title:"4x4 Expert 2"},{instance:"4x4expert3",title:"4x4 Expert 3"},{instance:"5x5beginner1",title:"5x5 Beginner 1"},{instance:"5x5beginner2",title:"5x5 Beginner 2"},{instance:"5x5intermediate1",title:"5x5 Intermediate 1"}];function G(e){var t=Object(j.useMemo)((function(){return e.name}),[e.name]),n=Object(j.useMemo)((function(){return"logic-instance-data-".concat(t)}),[t]),r=Object(j.useState)(""),c=Object(d.a)(r,2),a=c[0],s=c[1],o=Object(j.useState)(""),i=Object(d.a)(o,2),f=i[0],b=i[1],p=Object(j.useState)(null),v=Object(d.a)(p,2),m=v[0],O=v[1],g=Object(j.useState)(30),x=Object(d.a)(g,2),k=x[0],y=x[1],N=Object(j.useRef)(!0),z=Object(j.useContext)(w).user.token,S="".concat("https://secret-plains-66902.herokuapp.com/api","/puzzles/logic/").concat(t);Object(j.useMemo)((function(){var e=JSON.parse(sessionStorage.getItem(n));if(e)return s(e.description),b(e.work),void O("saved");Object(l.a)(u.a.mark((function e(){var t,r,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S,{method:"GET",headers:{authorization:z}});case 2:if(!(t=e.sent).ok){e.next=21;break}return e.prev=4,e.next=7,t.json();case 7:r=e.sent,c=r.description,a=r.work,sessionStorage.setItem(n,JSON.stringify({description:c,work:a})),s(c),b(a),O("saved"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log(e.t0);case 19:e.next=22;break;case 21:console.log("HTTP error, status = "+t.status);case 22:case"end":return e.stop()}}),e,null,[[4,16]])})))()}),[S,z,b,n]),Object(j.useEffect)((function(){var e="".concat("https://secret-plains-66902.herokuapp.com/api","/activepuzzle");return Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",authorization:z},body:JSON.stringify({puzzleName:"logic",puzzleId:t})});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))(),function(){fetch(e,{method:"DELETE",headers:{authorization:z}})}}),[z,t]);var C=Object(j.useCallback)(Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O("saving"),e.next=3,fetch(S,{method:"PUT",headers:{"Content-Type":"application/json",authorization:z},body:JSON.stringify({puzzleData:f})});case 3:t=e.sent,(r=JSON.parse(sessionStorage.getItem(n))).work=f,sessionStorage.setItem(n,JSON.stringify(r)),t.ok?O("saved"):O("error");case 8:case"end":return e.stop()}}),e)}))),[z,f,S,n]);return Object(j.useEffect)((function(){if(N.current)return N.current=!1;O(null);var t=e.history.listen(C),n=setTimeout(C,3e3);return function(){clearTimeout(n),t()}}),[C,e.history,O,N]),Object(j.useEffect)((function(){var e=function(){"saved"!==m&&C()};return window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[C,m]),Object(j.useEffect)((function(){0===k&&(y(30),m||C())}),[k,C,m]),Object(j.useEffect)((function(){var e=setInterval((function(){return y((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[y]),a?Object(h.jsxs)("div",{className:"logic instance",children:[Object(h.jsx)("p",{className:"puzzle-description",children:a}),Object(h.jsx)("textarea",{className:"work",onChange:function(e){b(e.target.value)},value:f,placeholder:"Enter your solution or any notes here!"}),Object(h.jsx)("div",{className:"saving-indicator",children:"saving"===m?"Saving...":"error"===m?"An error occurred while saving.":"saved"===m?"Saved.":" "})]}):Object(h.jsx)("h2",{className:"loading-indicator",children:"Loading..."})}X.fetchCompletionStatus=qe;var R="Logic Puzzles",W="logic";function Y(){return Object(h.jsx)("div",{className:"list-preview",children:"Find all logic puzzles here"})}var Z=[{instance:"wolfgoatcabbage",title:"Wolf, Goat, Cabbage"},{instance:"torch",title:"Bridge & Torch"},{instance:"goldboxes",title:"Find the Gold"},{instance:"10coins",title:"10 Coins"},{instance:"socks",title:"Cathy's Socks"},{instance:"childrenboat",title:"2 Adults, 2 Children, a Boat, and a River"},{instance:"applesandoranges",title:"Apples & Oranges"},{instance:"averybobbycam",title:"Avery, Bobby, & Cam"},{instance:"bear",title:"Bear"},{instance:"hats",title:"Hats"}];function $(e){var t=Object(j.useMemo)((function(){return e.name}),[e.name]),n=Object(j.useMemo)((function(){return"light-instance-data-".concat(t)}),[t]),r=Object(j.useMemo)((function(){return JSON.parse(sessionStorage.getItem(n))}),[n]),c=Object(j.useState)(r||{size:{},work:[],beginstate:[],neighborType:"+",workPosition:0}),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(j.useState)(s.work),f=Object(d.a)(i,2),b=f[0],p=f[1],v=Object(j.useState)(s.workPosition||b.length),m=Object(d.a)(v,2),O=m[0],g=m[1],x=s.size,k=x.cols,N=x.rows,z=s.beginstate,S=s.neighborType,C=Object(j.useState)(r?"saved":null),q=Object(d.a)(C,2),I=q[0],T=q[1],E=Object(j.useContext)(w).user.token,A="".concat("https://secret-plains-66902.herokuapp.com/api","/puzzles/light/").concat(t);Object(j.useEffect)((function(){r||Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(A,{method:"GET",headers:{authorization:E}});case 2:if(!(t=e.sent).ok){e.next=19;break}return e.prev=4,e.next=7,t.json();case 7:r=e.sent,sessionStorage.setItem(n,JSON.stringify(r)),o(r),p(r.work),T("saved"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:e.next=20;break;case 19:console.log("HTTP error, status = "+t.status);case 20:case"end":return e.stop()}}),e,null,[[4,14]])})))()}),[A,E,r,n]),Object(j.useEffect)((function(){var e="".concat("https://secret-plains-66902.herokuapp.com/api","/activepuzzle");return Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",authorization:E},body:JSON.stringify({puzzleName:"light",puzzleId:t})});case 2:case"end":return n.stop()}}),n)})))(),function(){fetch(e,{method:"DELETE",headers:{authorization:E}})}}),[E,t]);var L=Object(j.useCallback)((function(e){var t=function(e){var t=e.row,n=e.col;switch(S){case"x":return[{row:t-1,col:n-1},{row:t+1,col:n+1},{row:t+1,col:n-1},{row:t-1,col:n+1},{row:t,col:n}];default:return[{row:t-1,col:n},{row:t+1,col:n},{row:t,col:n-1},{row:t,col:n+1},{row:t,col:n}]}}(e);return(b.slice(0,O).filter((function(e){return t.some(K(e))})).length+(z.some(K(e))?1:0))%2>0}),[b,O,z]),J=Object(j.useCallback)((function(){for(var e;e<N;e++)for(var t;t<k;t++)if(!L({row:e,col:t}))return!1;return!0}),[k,N,L]);Object(j.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem(n));e.completed||J()&&(fetch("".concat(A,"/completed"),{method:"PUT",headers:{"Content-Type":"application/json",authorization:E},body:JSON.stringify({completed:!0})}),e.completed=!0,sessionStorage.setItem(n,JSON.stringify(e)))}),[n,J,A,E]);var P=function(){var e=Object(l.a)(u.a.mark((function e(t){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("saving"),e.next=3,fetch(A,{method:"PUT",headers:{"Content-Type":"application/json",authorization:E},body:JSON.stringify({puzzleData:t})});case 3:r=e.sent,(c=JSON.parse(sessionStorage.getItem(n))).work=t,c.workPosition=t.length,sessionStorage.setItem(n,JSON.stringify(c)),r.ok?T("saved"):T("error");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=[].concat(Object(y.a)(b.slice(0,O)),[e]);g(O+1),p(t),P(t)},U=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=n[1],a="light-square ".concat(L({row:e,col:c})?"active":"inactive");return Object(h.jsx)("div",{className:a,onClick:function(){return M({row:e,col:c})}})},B=function(e){g(e);var t=JSON.parse(sessionStorage.getItem(n));t.workPosition=e,sessionStorage.setItem(n,JSON.stringify(t))};return Object(h.jsxs)("div",{className:"light-puzzle-container",children:[Object(h.jsxs)("div",{className:"moves-indicator",children:["Moves: ",Object(h.jsx)("span",{className:"moves",children:O})]}),Object(h.jsx)("div",{className:"light-grid",cols:k,rows:N,children:new Array(N).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return Object(h.jsx)("div",{className:"grid-row",children:Array(k).fill(null).map(U.bind(null,r))})}))}),Object(h.jsxs)("div",{className:"controller",children:[Object(h.jsx)(V,{jump:function(){return B(0)},isactive:O>0}),Object(h.jsx)(Q,{step:function(){return B(Math.max(O-1,0))},isactive:O>0}),Object(h.jsx)(_,{step:function(){return B(Math.min(O+1,b.length))},isactive:O<b.length}),Object(h.jsx)(ee,{jump:function(){return B(b.length)},isactive:O<b.length})]}),Object(h.jsx)("div",{className:"saving-indicator",children:"saving"===I?"Saving...":"error"===I?"An error occurred while saving.":"saved"===I?"Saved.":" "})]})}function K(e){var t=e.row,n=e.col;return function(e){return e.col===n&&e.row===t}}function Q(e){var t=e.step,n=e.isactive;return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step back nav-button",isactive:n.toString(),children:Object(h.jsx)("path",{d:"M1344 576v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z"})})}function V(e){var t=e.jump,n=e.isactive;return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump back nav-button",isactive:n.toString(),children:Object(h.jsx)("path",{d:"M1811 269q19-19 32-13t13 32v1472q0  26-13 32t-32-13l-710-710q-8-9-13-19v710q0  26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19  32-13t13 32v710q5-11 13-19z"})})}function _(e){var t=e.step,n=e.isactive;return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step forward nav-button",isactive:n.toString(),children:Object(h.jsx)("path",{d:"M1280 1024q0 26-19 45l-448 448q-19 19-45  19t-45-19-19-45v-896q0-26 19-45t45-19 45  19l448 448q19 19 19 45z"})})}function ee(e){var t=e.jump,n=e.isactive;return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump forward nav-button",isactive:n.toString(),children:Object(h.jsx)("path",{d:"M237 1779q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710  710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19  45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z"})})}Z.fetchCompletionStatus=qe;var te={size:{cols:1,rows:1},beginstate:[],work:[]},ne={size:{cols:3,rows:1},beginstate:[],work:[]},re={size:{cols:3,rows:3},beginstate:[],work:[]},ce={size:{cols:3,rows:3},beginstate:[],work:[],neighborType:"x"};function ae(e){var t=e.history;return Object(h.jsxs)("div",{className:"light-instructions",children:[Object(h.jsxs)("h2",{children:["Light Puzzle Instructions",Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"steps",children:[Object(h.jsxs)("div",{className:"step",children:[Object(h.jsx)("p",{children:"Here, the goal is to light up all the squares. Clicking a square toggles it on and off (clicking a dark square will light it up and clicking a lit square will make it dark again)."}),Object(h.jsx)(oe,{data:te})]}),Object(h.jsxs)("div",{className:"step",children:[Object(h.jsx)("p",{children:"However, when you click on a square the same thing will happen to squares that are next to it."}),Object(h.jsx)(oe,{data:ne})]}),Object(h.jsxs)("div",{className:"step",children:[Object(h.jsx)("p",{children:"You can use the navigation buttons at the bottom of the puzzle to go back and forward through the moves you've made."}),Object(h.jsx)(oe,{data:ne,showNav:!0})]}),Object(h.jsx)("div",{className:"step",children:Object(h.jsx)("p",{className:"emphasized",children:"It can be tempting to click randomly, but take it slow! Try to light up all the squares using as few moves as you can!"})})]}),Object(h.jsx)("button",{className:"try-it",onClick:function(){return t.push("/light/small")},children:"Try It!"})]})}function se(e){var t=e.history;return Object(h.jsxs)("div",{className:"light-instructions",children:[Object(h.jsxs)("h2",{children:["Light Puzzle-X Instructions",Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"steps",children:[Object(h.jsx)("div",{className:"step",children:Object(h.jsx)("p",{children:'Puzzles marked with an "X" work a little differently. Clicking a square will light up squares the diagonal to it instead of ones directly next to it.'})}),Object(h.jsxs)("div",{className:"examples",children:[Object(h.jsxs)("div",{className:"example",children:["Normal Puzzle",Object(h.jsx)(oe,{data:re})]}),Object(h.jsxs)("div",{className:"example",children:["Puzzle-X",Object(h.jsx)(oe,{data:ce})]})]})]}),Object(h.jsx)("button",{className:"try-it",onClick:function(){return t.push("/light/smallx")},children:"Try It!"})]})}function oe(e){var t=e.data,n=e.showNav,r=Object(j.useState)(t.work),c=Object(d.a)(r,2),a=c[0],s=c[1],o=Object(j.useState)(0),i=Object(d.a)(o,2),u=i[0],l=i[1],f=t.size,b=f.cols,p=f.rows,v=t.beginstate,m=t.neighborType,O=function(e){var t=e.row,n=e.col;switch(m){case"x":return[{row:t-1,col:n-1},{row:t+1,col:n+1},{row:t+1,col:n-1},{row:t-1,col:n+1},{row:t,col:n}];default:return[{row:t-1,col:n},{row:t+1,col:n},{row:t,col:n-1},{row:t,col:n+1},{row:t,col:n}]}},g=function(e){l(e)},x=function(e){s([].concat(Object(y.a)(a.slice(0,u)),[e])),l(u+1)},w=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var c=n[1],s=O({row:e,col:c}),o=a.slice(0,u).filter((function(e){return s.some(ie(e))})),i=(o.length+(v.some(ie({row:e,col:c}))?1:0))%2>0,l="light-square ".concat(i?"active":"inactive");return Object(h.jsx)("div",{className:l,onClick:function(){return x({row:e,col:c})}})};return Object(h.jsxs)("div",{className:"light-puzzle-container",children:[Object(h.jsx)("div",{className:"light-grid",cols:b,rows:p,children:new Array(p).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return Object(h.jsx)("div",{className:"grid-row",children:Array(b).fill(null).map(w.bind(null,r))})}))}),n?Object(h.jsxs)("div",{className:"controller",children:[Object(h.jsx)(V,{jump:function(){return g(0)},isactive:u>0}),Object(h.jsx)(Q,{step:function(){return g(Math.max(u-1,0))},isactive:u>0}),Object(h.jsx)(_,{step:function(){return g(Math.min(u+1,a.length))},isactive:u<a.length}),Object(h.jsx)(ee,{jump:function(){return g(a.length)},isactive:u<a.length})]}):null]})}function ie(e){var t=e.row,n=e.col;return function(e){return e.col===n&&e.row===t}}var ue=Array.from({length:5},(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return r+1}));var le="Light Puzzles",de="light";function he(){return Object(h.jsx)("div",{className:"list-preview",children:"Find all light puzzles here"})}var je=[{instance:"instructions",title:"Instructions"},{instance:"small",title:"Small"},{instance:"medium",title:"Medium"},{instance:"large",title:"Large"},{instance:"instructionsx",title:"Instructions-X"},{instance:"smallx",title:"Small-X"},{instance:"mediumx",title:"Medium-X"},{instance:"largex",title:"Large-X"}];je.fetchCompletionStatus=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qe(t),je.forEach((function(e){var t=e.instance;if(!t.match("instructions")){for(var n=!0,r=1;r<=5;r++){var c="light-instance-data-".concat(t).concat(r),a=JSON.parse(sessionStorage.getItem(c));a&&a.completed||(n=!1)}sessionStorage.setItem("light-instance-data-".concat(t),JSON.stringify({completed:n}))}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var fe=function(e){var t=e.history,n=e.name,r=e.match,c=Object(j.useState)(1),a=Object(d.a)(c,2),s=a[0],i=a[1];return Object(j.useEffect)((function(){n.match("instructions")||t.push("/light/".concat(n,"/").concat(s))}),[s,n,t]),"instructionsx"===n?Object(h.jsx)(se,{history:t}):Object(h.jsxs)("div",{className:"light category-container ".concat(n),children:[Object(h.jsxs)(m.d,{children:[ue.map(function(e,t){return Object(h.jsx)(m.b,{path:"".concat(e.url,"/").concat(t),render:function(e){return Object(h.jsx)($,Object(o.a)(Object(o.a)({},e),{},{name:"".concat(n).concat(t)}))}},t)}.bind(null,r)),Object(h.jsx)(m.b,{render:function(){return t.push("/light")}})]}),Object(h.jsxs)("div",{className:"selector-container",children:[Object(h.jsx)("button",{className:"previous selector  ".concat(1===s?"inactive":"active"),onClick:function(){return i(Math.max(s-1,1))},children:"Prev"}),ue.map((function(e){return Object(h.jsx)("button",{onClick:function(){return i(e)},className:"instance selector ".concat(e===s?"selected":"")},"selector-".concat(e))})),Object(h.jsx)("button",{className:"next selector  ".concat(s===ue.length?"inactive":"active"),onClick:function(){return i(Math.min(s+1,5))},children:"Next"})]})]})};var be=[c,r,a],pe="/light/instructions",ve=function(){return Object(h.jsx)("div",{className:"potd-preview",children:"Light up all the lights!"})};function me(e){var t=e.history,n=Object(j.useContext)(w).user.token;return Object(h.jsxs)("div",{className:"dashboard-container",children:[Object(h.jsx)(Oe,{history:t,token:n}),Object(h.jsxs)("div",{className:"puzzle-list-container",children:[Object(h.jsx)("h2",{children:"Individual Work"}),Object(h.jsx)("ul",{children:be.map(ge.bind(null,t,n))})]})]})}function Oe(e){var t=ve;return Object(h.jsxs)("div",{className:"potd-container",onClick:function(){return e.history.push(pe,{token:e.token})},children:[Object(h.jsx)("h2",{children:"Puzzle of the Day"}),Object(h.jsx)(t,{})]})}function ge(e,t,n){return Object(h.jsxs)("li",{onClick:function(){return e.push("/".concat(n.id),{token:t})},children:[Object(h.jsx)("h3",{children:n.name}),n.ListPreview()]},n.id)}function xe(e){var t=e.history,n=e.instanceList,r=e.title,c=e.puzzleType,a=Object(j.useContext)(w).user,s=Object(j.useState)(!1),o=Object(d.a)(s,2),i=o[0],f=o[1];Object(j.useEffect)((function(){i||Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchCompletionStatus(a);case 2:f(!0);case 3:case"end":return e.stop()}}),e)})))()}),[i,n,a]);return Object(h.jsxs)("div",{className:"instance-list-container",children:[Object(h.jsx)("h2",{children:r}),Object(h.jsx)("ul",{style:{"grid-template-rows":"repeat(".concat(Math.ceil(n.length/2),", 1fr)")},children:n.map(function(e,t){var n,r=t.instance,a=t.title,s="".concat(c,"-instance-data-").concat(r),o=JSON.parse(sessionStorage.getItem(s)),i=!!o&&o.completed;return Object(h.jsx)("li",{onClick:function(){return e.push("/".concat(c,"/").concat(r))},className:i?"completed":"",children:Object(h.jsx)("h3",{children:(n=a,n.replace(/^./,(function(e){return e.toUpperCase()})))})},r)}.bind(null,t))})]})}function we(e){var t=e.match,n=e.Instance,r=e.Instructions,c=e.id,a=e.name,s=e.instanceList;return Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"".concat(t.url,"/instructions"),render:function(e){return Object(h.jsx)(r,Object(o.a)({},e))}},"instructions"),s.map(function(e,t){var r=t.instance;return Object(h.jsx)(m.b,{path:"".concat(e.url,"/").concat(r),render:function(e){return Object(h.jsx)(n,Object(o.a)(Object(o.a)({},e),{},{name:r}))}},r)}.bind(null,t)),Object(h.jsx)(m.b,{exact:!0,path:t.url,render:function(e){return Object(h.jsx)(xe,Object(o.a)(Object(o.a)({},e),{},{instanceList:s,title:a,puzzleType:c}))}})]})}n(260);var ke=Object(O.a)(),ye=Object(h.jsx)("path",{d:"M1792 1024v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z"});function Ne(){var e=JSON.parse(sessionStorage.getItem("mcub-student-user")),t=Object(j.useState)(e),n=Object(d.a)(t,2),r=n[0],c=n[1],a={user:r,setUser:c};return Object(j.useEffect)((function(){r&&Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,qe(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[r]),Object(h.jsx)(v.a,{history:ke,basename:"/",children:Object(h.jsx)(w.Provider,{value:a,children:r?Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{className:"main-nav",children:[Object(h.jsx)(Se,{student:r.student,setUser:c}),Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{exact:!0,path:"/"}),Object(h.jsx)(m.b,{component:ze})]})]}),Object(h.jsxs)(m.d,{children:[be.map(Ce),Object(h.jsx)(m.b,{path:"/login",component:k}),Object(h.jsx)(m.b,{path:"/",component:me})]})]}):Object(h.jsxs)(m.d,{children:[Object(h.jsx)(m.b,{path:"/login",component:k}),Object(h.jsx)(m.b,{path:"/",children:Object(h.jsx)(m.a,{to:"/login"})})]})})})}function ze(e){var t=e.history,n=window.location.href.match(/#(.*)\/[^/]+$/)[1];return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:function(){return t.push(n)},className:"back-button",children:ye})}function Se(e){var t=e.student,n=e.setUser;return Object(h.jsxs)("div",{className:"profile-bar",children:[Object(h.jsxs)("span",{className:"student-name",children:[Te(t.first)," ",Te(t.last)]}),Object(h.jsx)("button",{onClick:function(){n(null),sessionStorage.removeItem("mcub-student-user")},className:"log-out",children:"Log Out"})]})}function Ce(e){var t=e.Instance,n=e.id,r=e.Instructions,c=e.name,a=e.instanceList;return Object(h.jsx)(m.b,{path:"/".concat(e.id),render:function(e){return Object(h.jsx)(we,Object(o.a)(Object(o.a)({},e),{},{Instance:t,id:n,Instructions:r,name:c,instanceList:a}))}},e.id)}function qe(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(l.a)(u.a.mark((function e(t){var n,r,c,a,o,i,l,d,h,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.token,r="".concat("https://secret-plains-66902.herokuapp.com/api","/data"),e.next=4,fetch(r,{method:"GET",headers:{authorization:n}});case 4:if(!(c=e.sent).ok){e.next=12;break}return e.next=8,c.json();case 8:for(o in a=e.sent){i=Object(s.a)(a[o]);try{for(i.s();!(l=i.n()).done;)d=l.value,h=d.puzzleId,j="".concat(o,"-instance-data-").concat(h),sessionStorage.setItem(j,JSON.stringify(d))}catch(u){i.e(u)}finally{i.f()}}e.next=13;break;case 12:console.log("HTTP error, status = ".concat(c.status));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(e){return e.replace(/^.|\W./g,(function(e){return e.toUpperCase()}))}p.a.render(Object(h.jsx)(f.a.StrictMode,{children:Object(h.jsx)(Ne,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.acffcf59.chunk.js.map