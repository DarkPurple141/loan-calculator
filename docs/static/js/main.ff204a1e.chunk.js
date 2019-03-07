(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),l=n(17),u=n.n(l),i=n(2),s=n(10),p=n(12),m=n(1),h=n(3),d={incomeA:{value:0,period:"Monthly"},incomeB:{value:0,period:"Monthly"},livingExpenses:[{label:"daycare",cost:100}]};!function(e){e.INTEREST_ONLY="Interest only",e.PRINCIPAL_AND_INTEREST="Principle and interest"}(a||(a={})),function(e){e.WEEKLY="weekly",e.FORTNIGHTLY="fortnightly",e.MONTHLY="monthly"}(r||(r={}));var v={amount:0,period:25,repaymentType:a.PRINCIPAL_AND_INTEREST,repaymentFrequency:r.FORTNIGHTLY,rate:3},f={conveyancing:1500,bankFees:500,renovations:0,stampDuty:0},b=Object(s.b)({loan:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"SET_LOAN":return Object(m.a)({},e,a);default:return e}},costs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"SET_COSTS":return Object(m.a)({},e,a);default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(console.info("here",a,n),n){case"SET_PROFILE":return Object(m.a)({},e,a);case"UPDATE_EXPENSE":var r=Object(p.a)(Object.entries(a)[0],2),o=r[0],c=r[1];return console.info("here",o,c),Object(m.a)({},e,{livingExpenses:e.livingExpenses.map(function(e){return e.label===o&&(e.cost=c),e})});default:return e}}}),E=Object(s.c)(b),y=(n(29),n(4)),O=n(5),g=n(7),j=n(6),w=n(8),T=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).onChangeHandler=function(e){return function(t){var a=Number(t.target.value);n.props.updateLoan({key:e,value:a})}},n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rate,n=e.period,a=e.borrowing;return c.a.createElement("div",{className:"loan-info"},c.a.createElement("h2",null,"Loan Info"),c.a.createElement("label",null,"Amount to borrow"),c.a.createElement("input",{type:"number",name:"amount",value:a,onChange:this.onChangeHandler("amount")}),c.a.createElement("label",null,"Rate"),c.a.createElement("input",{type:"number",name:"rate","data-percent":"",value:t,onChange:this.onChangeHandler("rate")}),c.a.createElement("label",null,"Loan Period (years)"),c.a.createElement("input",{type:"number",name:"period",value:n,onChange:this.onChangeHandler("period")}))}}]),t}(o.Component),C=Object(i.b)(function(e){var t=e.loan;return{rate:t.rate,period:t.period,repayments:t.repaymentFrequency,borrowing:t.amount}},function(e){return{updateLoan:function(t){return e(function(e){var t=e.value,n=e.key;return{type:"SET_LOAN",data:Object(h.a)({},n,t)}}(t))}}})(T),k={label:"Your expense name",cost:0},I=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(g.a)(this,Object(j.a)(t).call(this,e))).onUpdateIncome=function(e){return function(t){var a=t.target.value;n.props.updateIncome(e,a)}},n.onUpdateExpense=function(e,t){n.props.updateExpense(e,t)},n.onButtonClick=function(){n.setState(k)},n.state=k,n}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.incomeA,a=t.incomeB,r=t.livingExpenses;return c.a.createElement("div",{className:"profile"},c.a.createElement("h2",null,"Profile"),c.a.createElement("label",null,"Your Income"),c.a.createElement("input",{type:"number",name:"incomeA",value:n.value,onChange:this.onUpdateIncome("incomeA")}),c.a.createElement("label",null,"Partner Income"),c.a.createElement("input",{type:"number",name:"incomeB",value:a.value,onChange:this.onUpdateIncome("incomeB")}),c.a.createElement("hr",null),c.a.createElement("h2",null,"Living Expenses"),r&&r.map(function(t){var n=t.label,a=t.cost;return c.a.createElement(c.a.Fragment,{key:n},c.a.createElement("label",null,n),c.a.createElement("input",{type:"number",name:"rate",value:a,onChange:function(t){return e.onUpdateExpense(n,Number(t.target.value))}}))}),c.a.createElement("p",null,"Add an expense"),c.a.createElement("input",{type:"text",name:"newLabel",value:this.state.label,placeholder:k.label,onChange:function(t){return e.setState({label:t.currentTarget.value})}}),c.a.createElement("input",{type:"number",name:"newCost",value:this.state.cost,placeholder:"$".concat(k.cost),onChange:function(t){return e.setState({cost:t.currentTarget.value})}}),c.a.createElement("button",{onClick:this.onButtonClick},"Add"))}}]),t}(o.Component),N=Object(i.b)(function(e){var t=e.profile;return Object(m.a)({},t)},function(e){return{updateIncome:function(t,n){return e(function(e){var t=e.value,n=e.key;return{type:"SET_PROFILE",data:Object(h.a)({},n,t)}}({key:t,value:n}))},updateExpense:function(t,n){return e(function(e){var t=e.key,n=e.value;return{type:"UPDATE_EXPENSE",data:Object(h.a)({},t,n)}}({key:t,value:n}))}}})(I),L=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"costs"},c.a.createElement("h2",null,"Costs"),Object.entries(this.props).map(function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];return c.a.createElement("p",null,n,": ",a)}))}}]),t}(o.Component),A=Object(i.b)(function(e){var t=e.costs;return Object(m.a)({},t)})(L),S=function(e,t){return e+t},P=function(e){var t;switch(e){case"Weekly":t=52;case"Fortnightly":t=26;case"Monthly":t=12;case"Yearly":default:t=1}return t},x=function(e){var t=e.costs,n=e.profile,a=e.loan;return function(e){var t=e.incomeA,n=e.incomeB;return t.value*P(t.period)+n.value*P(n.period)}(n)-function(e){return(e.livingExpenses||[]).map(function(e){return e.cost}).reduce(S,0)}(n)-function(e){return Object.values(e).reduce(S,0)}(t)-function(e){var t,n=e.period,a=e.amount,o=e.rate;switch(e.repaymentFrequency){case r.WEEKLY:t=52;case r.FORTNIGHTLY:t=26;case r.MONTHLY:t=12;default:t=12}var c=t*n,l=o/t/100,u=Math.pow(1+l,c);return a*u*l/(u-1)}(a)},_=function(e){function t(){return Object(y.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Summary"},c.a.createElement("h2",null,"Summary"),c.a.createElement("p",null,"position: ",this.props.position))}}]),t}(o.Component),F=Object(i.b)(function(e){return{position:x(e)}})(_),R=function(){return c.a.createElement("main",null,c.a.createElement("h1",null,"How much can I afford?"),c.a.createElement("p",null,"People often tackle this sort of thing upside down; trying to find additional money to stretch themselves rather than making a realistic estimate of what they can truly afford. This tool tries to properly quantify that to help you avoid unnecessary financial stress and to provide a better overview of what sort of property price you should be targeting."),c.a.createElement(N,null),c.a.createElement(C,null),c.a.createElement(A,null),c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(i.a,{store:E},c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.ff204a1e.chunk.js.map