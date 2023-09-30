/* 
Register Gutenberge custom Block
*/ 

wp.blocks.registerBlockType('gutenberge-block/custom-block',{
title: 'Contact Information',
icon: 'businessperson',
category: 'design',
attributes:{
    
    customerName: { type: 'string' },
    customerEmail: { type: 'string' },
    customerAddress: { type: 'string' },
    customerMobile: { type: 'string' },
},
edit: function(props){
return React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Name:")), React.createElement("input", {
    type: "text",
    value: "",
    placeholedr: "Enter name"
  }), React.createElement("div", null, React.createElement("label", null, "Email:")), React.createElement("input", {
    type: "text",
    value: "",
    placeholedr: "Enter Email"
  }), React.createElement("div", null, React.createElement("label", null, "Address:")), React.createElement("input", {
    type: "text",
    value: "",
    placeholedr: "Enter Address"
  }), React.createElement("div", null, React.createElement("label", null, "Mobile:")), React.createElement("input", {
    type: "text",
    value: "",
    placeholedr: "Enter Address"
  }));
},
save:function(props){
    return null;
}

});
