(this["webpackJsonpweb-pos"]=this["webpackJsonpweb-pos"]||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),m=a.n(r),o=a(11),l=a(1);a(37);var i=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-custom shadow header"},c.a.createElement(o.b,{to:"/",className:"navbar-brand"},"WebPOS"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"/terminal",className:"nav-link"},"Terminal")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(o.b,{to:"/inventory",className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Inventory"),c.a.createElement("div",{className:"dropdown-menu shadow","aria-labelledby":"navbarDropdownMenuLink"},c.a.createElement(o.b,{to:"/inventory",className:"dropdown-item"},"View inventory"),c.a.createElement(o.b,{to:"/inventory/add",className:"dropdown-item"},"Add inventory"),c.a.createElement(o.b,{to:"/inventory/edit",className:"dropdown-item"},"Edit inventory"))))))},s=a(5),u=a(4),d=a.n(u);var p=function(e){return c.a.createElement("div",{className:"row item"},c.a.createElement("div",{className:"col"},e.itemNumber),c.a.createElement("div",{className:"col"},e.itemName),c.a.createElement("div",{className:"col"},e.description),c.a.createElement("div",{className:"col"},e.stock),c.a.createElement("div",{className:"col"},e.price))},N=a(9);a(60);var b=function(){var e=Object(n.useState)({itemNumber:"",itemName:"",description:"",price:"",stock:""}),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"search-container shadow"},c.a.createElement("div",{className:"heading"},"Search Item"),c.a.createElement("div",{className:"row column-heading"},c.a.createElement("div",{className:"col-sm"},"Item Number"),c.a.createElement("div",{className:"col-sm"},"Item Name"),c.a.createElement("div",{className:"col-sm"},"Description"),c.a.createElement("div",{className:"col-sm"},"Stock"),c.a.createElement("div",{className:"col-sm"},"Price")),c.a.createElement(p,{itemNumber:a.itemNumber,itemName:a.itemName,description:a.description,stock:a.stock,price:a.price}),c.a.createElement("form",{className:"form search-form",autoComplete:"off"},c.a.createElement("input",{className:"form-control mr-sm-2 text-box style=margin-bottom:10px",type:"number",placeholder:"Search for an item by item number","aria-label":"Search",name:"itemNumber",onChange:function(e){var t=e.target,a=t.name,n=t.value;r((function(){return Object(N.a)({},a,n)}))}}),c.a.createElement("button",{className:"btn btn-primary my-2 my-sm-3 w-100 search-button",type:"button",onClick:function(e){r({itemNumber:"",itemName:"",description:"",price:"",stock:""});var t="http://localhost:5000/inventory/"+a.itemNumber;d.a.get(t).then((function(e){null===e.data.itemNumber?console.log("Cannot find item"):r(e.data)})).catch((function(e){return console.log("Error: "+e)})),e.preventDefault()}},"Search")))};a(61);var v=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return d.a.get("http://localhost:5000/inventory").then((function(e){return r(e.data)})).catch((function(e){return console.log("Error: "+e)})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(b,null),c.a.createElement("div",{className:"inventory-list-container shadow"},c.a.createElement("div",{className:"heading"},"Inventory"),c.a.createElement("div",{className:"row column-heading"},c.a.createElement("div",{className:"col-sm"},"Item Number"),c.a.createElement("div",{className:"col-sm"},"Item Name"),c.a.createElement("div",{className:"col-sm"},"Description"),c.a.createElement("div",{className:"col-sm"},"Stock"),c.a.createElement("div",{className:"col-sm"},"Price")),c.a.createElement("div",{className:"items-container"},a.map((function(e,t){return c.a.createElement(p,{key:t,itemNumber:e.itemNumber,itemName:e.itemName,description:e.description,stock:e.stock,price:e.price})}))),c.a.createElement("div",null)))},E=a(31),f=a(10);var h=function(e){return c.a.createElement("div",{className:"row item"},c.a.createElement("div",{className:"col"},e.itemNumber),c.a.createElement("div",{className:"col"},e.itemName),c.a.createElement("div",{className:"col"},e.price))};a(62);var g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],m=Object(n.useState)(0),o=Object(s.a)(m,2),l=o[0],i=o[1],u=Object(n.useState)(0),p=Object(s.a)(u,2),b=p[0],v=p[1],g=Object(n.useState)({itemNumber:"",itemName:"",description:"",stock:"",price:""}),y=Object(s.a)(g,2),k=y[0],w=y[1],O=new Date,j=O.getDate()+"/"+O.getMonth()+"/"+O.getFullYear();return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"terminal-container shadow"},c.a.createElement("div",{className:"heading"},"Terminal"),c.a.createElement("form",{className:"form search-form",autoComplete:"off"},c.a.createElement("input",{className:"form-control my-sm-2",type:"number",placeholder:"Enter item number","aria-label":"Search",name:"itemNumber",onChange:function(e){var t=e.target,a=t.name,n=t.value;w((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(N.a)({},a,n))})),e.preventDefault()},value:k.itemNumber}),c.a.createElement("button",{className:"btn btn-success my-2 w-100 addto-button",type:"button",onClick:function(){if(w({itemNumber:"",itemName:"",description:"",stock:"",price:""}),""!==k.itemNumber){var e="http://localhost:5000/inventory/"+k.itemNumber;d.a.get(e).then((function(e){var t;null===e.data.itemNumber?console.log("Error, item number not passed."):(t=e.data,r((function(e){return[].concat(Object(E.a)(e),[t])})),i((function(e){return e+t.price})),v((function(e){return e+13*t.price/100})))})).catch((function(e){return console.log("Error: "+e)}))}}},"Add"),c.a.createElement("button",{className:"btn btn-danger my-2 w-100 removefrom-button",type:"button",onClick:function(){if(w({itemNumber:"",itemName:"",description:"",stock:"",price:""}),""!==k.itemNumber){var e=a.map((function(e){return e.itemNumber})).indexOf(+k.itemNumber,0);-1!==e?(t=a[e],n=e,0!==a.length&&(i((function(e){return e-t.price})),v((function(e){return e-13*t.price/100})),a.splice(n,1))):console.log("Item not found")}var t,n}},"Remove"),c.a.createElement("button",{className:"btn btn-primary my-2 w-100 finish-button",type:"button",onClick:function(){var e={itemNumber:"",itemName:"",description:"",stock:"",price:""},t="http://localhost:5000/inventory/";0!==a.length?(a.forEach((function(a){d.a.get(t+a.itemNumber).then((function(n){e.stock=n.data.stock-1,d.a.put(t+"update/"+a.itemNumber,e).then((function(){return console.log("Update request sent.")})).catch((function(e){return console.log("Error: "+e)}))})).catch((function(e){return console.log("Error: "+e)}))})),r([]),i(0),v(0)):console.log("Empty receipt, nothing to do.")}},"Process Transaction")),c.a.createElement("div",{className:"receipt-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Item Number"),c.a.createElement("div",{className:"col"},"Item Name"),c.a.createElement("div",{className:"col"},"Price")),c.a.createElement("div",{className:"purchase-container"},a.map((function(e,t){return c.a.createElement(h,{key:t,itemNumber:e.itemNumber,itemName:e.itemName,price:e.price})}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},"Date: ",j),c.a.createElement("div",{className:"col"},"Tax (",13,"%): $",Number(b.toFixed(2))),c.a.createElement("div",{className:"col"},"Total: $",Number((l+b).toFixed(2)))))))};var y=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(v,null)),c.a.createElement("div",{className:"col sticky-top"},c.a.createElement(g,null)))))};a(63);var k=function(){var e=Object(n.useState)({itemNumber:"",itemName:"",description:"",price:"",stock:""}),t=Object(s.a)(e,2),a=t[0],r=t[1];function m(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(N.a)({},a,n))}))}return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(v,null)),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"create-item-container"},c.a.createElement("div",{className:"heading"},"Create Item"),c.a.createElement("br",null),c.a.createElement("form",{autoComplete:"off"},c.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},c.a.createElement("input",{className:"form-control create-item",type:"number",name:"itemNumber",onChange:m,value:a.itemNumber,placeholder:"Item number"}),c.a.createElement("input",{className:"form-control create-item",type:"text",name:"itemName",onChange:m,value:a.itemName,placeholder:"Item name"}),c.a.createElement("input",{className:"form-control create-item",type:"text",name:"description",onChange:m,value:a.description,placeholder:"Description"}),c.a.createElement("input",{className:"form-control create-item",type:"number",name:"stock",onChange:m,value:a.stock,placeholder:"Stock"}),c.a.createElement("input",{className:"form-control create-item",type:"number",name:"price",onChange:m,value:a.price,placeholder:"Price"}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("button",{type:"button",class:"btn btn-success add-button btn-lg",onClick:function(e){r({itemNumber:"",itemName:"",description:"",price:"",stock:""}),d.a.post("http://localhost:5000/inventory/add",a).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),e.preventDefault()}},"Add item"))))))))};a(64);var w=function(){var e=Object(n.useState)({itemNumber:"",itemName:"",description:"",price:"",stock:""}),t=Object(s.a)(e,2),a=t[0],r=t[1];function m(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(N.a)({},a,n))}))}return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(v,null)),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"edit-item-container"},c.a.createElement("div",{className:"heading"},"Edit Item"),c.a.createElement("p",{className:"instructions"},"Edit an item by entering its item number and editing the fields you wish to update and pressing edit"),c.a.createElement("p",{className:"instructions"},"Delete an item by entering its item number and pressing delete"),c.a.createElement("form",{autoComplete:"off"},c.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},c.a.createElement("input",{className:"form-control edit-item",type:"number",name:"itemNumber",onChange:m,value:a.itemNumber,placeholder:"Item number"}),c.a.createElement("input",{className:"form-control edit-item",type:"text",name:"itemName",onChange:m,value:a.itemName,placeholder:"Item name"}),c.a.createElement("input",{className:"form-control edit-item",type:"text",name:"description",onChange:m,value:a.description,placeholder:"Description"}),c.a.createElement("input",{className:"form-control edit-item",type:"number",name:"stock",onChange:m,value:a.stock,placeholder:"Stock"}),c.a.createElement("input",{className:"form-control edit-item",type:"number",name:"price",onChange:m,value:a.price,placeholder:"Price"}),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("button",{type:"button",class:"btn btn-success btn-lg add-button",onClick:function(e){r({itemNumber:"",itemName:"",description:"",price:"",stock:""});var t="http://localhost:5000/inventory/update/"+a.itemNumber;d.a.put(t,a).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),e.preventDefault()}},"Edit item"),c.a.createElement("button",{type:"button",class:"btn btn-danger btn-lg delete-button",onClick:function(e){r({itemNumber:"",itemName:"",description:"",price:"",stock:""});var t="http://localhost:5000/inventory/"+a.itemNumber;d.a.delete(t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log("Error: "+e)})),e.preventDefault()}},"Delete item"))))))))};a(65);var O=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement("br",null),c.a.createElement(l.a,{path:"/",exact:!0,component:y}),c.a.createElement(l.a,{path:"/terminal",exact:!0,component:g}),c.a.createElement(l.a,{path:"/inventory",exact:!0,component:v}),c.a.createElement(l.a,{path:"/inventory/add",exact:!0,component:k}),c.a.createElement(l.a,{path:"/inventory/edit",exact:!0,component:w})))};m.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ce104441.chunk.js.map