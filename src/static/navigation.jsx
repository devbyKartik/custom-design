export const userNavigationInfo = {
    type:"userNavigation",
    navClass:"userNavigation",
    navLinkInfo: [
      { title: 'Sing-in', slug: 'sign-in', icon: 'user'}, 
      { title: 'Help', slug: 'help', icon: 'help' }, 
      { title: 'Cart', slug: 'cart', icon: 'cart' }
    ]
  };
  export const mainNavigation ={
    type:"product",
    navClass:"product-navigation",
    navLinkInfo: [
      { title: 'Product One', child: [] , parent:true}, 
      { title: 'Product Two', child: [] , parent:true}, 
      { title: 'Product Three', child: [] , parent:true}, 
    ] 
  }
  export  const linkTour={
    type:'simple',
    buttonClass:'link-tour',
    title : 'Link & Toner',
   }

  export const mainMobileNavigation = {
    type: "mobile",
    navClass: "mobile-navigation",
    navLinkInfo: [
        { title: 'Products', slug: 'product' , icon: 'user' , parent:true , child:[{title:"productOne" , slug:"#"},{title:"productTwo" , slug:"#"}]},
        { title: 'Help', slug: 'help', icon: 'help' , parent:true , child:[{title:"productOne" , slug:"#"},{title:"productTwo" , slug:"#"}]},
        { title: 'Cart', slug: 'cart', icon: 'cart' , parent:true , child:[{title:"productOne" , slug:"#"},{title:"productTwo" , slug:"#"}]}
    ]
};