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
      { title: {en:'Product One',fn:'Product Onefn'}, child: [] , parent:true}, 
      { title: {en:'Product two',fn:'Product twofn'}, child: [] , parent:true}, 
      { title: {en:'Product three',fn:'Product threefn'}, child: [] , parent:true}, 
    ] 
  }
  export  const linkTour={
    type:'button',
    buttonClass:'link-tour',
    title : {fn:'Link & Toner',en:'Link & Toner'},
    slug :"/link-tour"
   }

  export const mainMobileNavigation = {
    type: "mobile",
    navClass: "mobile-navigation",
    navLinkInfo: [
        { title: {en:'Products',fn:'Products'}, slug: 'product' , icon: 'user' , parent:true , child:[{title:{en:'productOne',fn:'productOne'} , slug:"#"},{title:{en:'productTwo',fn:'productTwo'} , slug:"#"}]},
        { title: {en:'Help',fn:'Help'}, slug: 'help', icon: 'help' , parent:true , child:[{title:{en:'productOne',fn:'productOne'} , slug:"#"},{title:{en:'productTwo',fn:'productTwo'} , slug:"#"}]},
        { title: {en:'Cart',fn:'Cart'}, slug: 'cart', icon: 'cart' , parent:true , child:[{title:{en:'productOne',fn:'productOne'} , slug:"#"},{title:{en:'productTwo',fn:'productTwo'} , slug:"#"}]}
    ]
};

export const liveChat = {
  type: 'button',
  buttonClass: 'live-chat',
  title: {fn:'Live Chat',en:'Live Chat'},
  slug : "/chat"
}
export const langSelectOption = {
  options: [{ value: "En", name: "En" }, { value: "Fn", name: "Fn" }]
}

export const footerMenuCustomerServics={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:{en:"Customer Services",fn:"Customer Services"},
  navLinkInfo: [
      { title: {en:'Help center',fn:'Help center'}, slug: 'help-center' },
      { title: {en:'Contact-us',fn:'Contact-us'}, slug: 'contact-us' },
      { title: {en:'Return an item',fn:'Return an item'}, slug: 'return item' },
     
  ]
}
export const footerMenuCorporateInfo={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:{en:"Corporate Info",fn:"Corporate Info"},
  navLinkInfo: [
      { title: {en:'Staples Business Advantage Overview',fn:'Staples Business Advantage Overview'}, slug: 'help-center' },
      { title: {en:'Industries Served',fn:'Industries Served'}, slug: 'contact-us' },
      { title: {en:'Blog',fn:'Blog'}, slug: 'return item' },
      { title: {en:'Our Brands',fn:'Our Brands'}, slug: 'return item' }
      
  ]
}

export const staplesCorporateSolutions={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:{en:"Staples Corporate Solutions",fn:"Staples Corporate Solutions"},
  navLinkInfo: [
      { title: {en:'Office Products',fn:'Office Products'}, slug: 'help-center' },
      { title: {en:'Technology Products',fn:'Technology Products'}, slug: 'contact-us' },
      { title: {en:'Furniture',fn:'Furniture'}, slug: 'return item' },
      { title: {en:'Facilities',fn:'Facilities'}, slug: 'return item' },
      { title: {en:'Promotional Products',fn:'Promotional Products'}, slug: 'return item' },
      
  ]
}


export const staplesNewCustomer={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:{en:"New Customer",fn:"New Customer"},
  navLinkInfo: [
      { title: {en:'Become a Customer',fn:'Become a Customer123'}, slug: 'help-center' },
      { title: {en:'Govt. Customers',fn:'Govt. Customers'}, slug: 'contact-us' },
      { title: {en:'Memberships',fn:'Memberships'}, slug: 'return item' },
  ]
}



export const bottomFooterText={
  type:"simple",
  navClass: "bottom-footer-navigation",
  navLinkInfo: [
      { title: 'Terms & Conditions', slug: 'terms' },
      { title: 'Privacy Policy', slug: 'privacy' },
      { title: 'Staples Bussiness Advantage', slug: 'advantage' },
  ]
}

export const headerCartCheckOutButton={
  type: 'button',
  buttonClass: 'rounded-button-red',
  title: {fn:'Checkout',en:'Checkout'},
  slug : "/checkout"
}

export const headerCartViewCartButton={
  type: 'button',
  buttonClass: 'rounded-button ',
  title: {fn:'View Cart',en:'View Cart'},
  slug : "/cart"
}

export const headerCartAddCatalogue={
  type: 'button',
  buttonClass: 'click-here',
  title: {fn:'Click here',en:'Click here'},
  slug : "/checkout"
}
export const headerCartPrintableVersion={
  type: 'button',
  buttonClass: 'click-here',
  title: {fn:'Click here',en:'Click here'},
  slug : "/checkout"
}

export const headerSignInButton={
  type: 'submit',
  buttonClass: 'header-signIn',
  title: {fn:'Sign In',en:'Sign In'},
  slug : "singin"
}


export const headerLoginPasswordButton={
  type: 'button',
  buttonClass: 'forgot-password',
  title: {fn:'Password',en:'Password'},
  slug : "/forgot-password"
}



export const headerLoginUserIdButton={
  type: 'button',
  buttonClass: 'forgot-password',
  title: {fn:'User Id ?',en:'User Id ?'},
  slug : "/forgot-user-id"
}


export const headerLoginCustomersClickButton={
  type: 'button',
  buttonClass: 'forgot-password',
  title: {fn:'Click Here',en:'Click Here'},
  slug : "/"
}


export const headerLoginShopAsGuestButton={
  type: 'submit',
  buttonClass: 'header-shopAsGuest',
  title: {fn:'Shop as guest',en:'Shop as guest'},
  
  slug : ""
}

export const categoryList=[
  {
    icon:"FaBars",
    title:{en: 'Paper', fn:'Paper'},
    ulr:"/paper"
  },
  {
    icon:"FaFolderOpen",
    title: {en: 'Filling & Organization', fn:'Filling & Organization'},
    ulr:"/filling-organization"
  },
  {
    icon:"FaLaptop",
    title: {en: 'Technology', fn:'Technology'},
    ulr:"/technology"
  },
  {
    icon:"FaPrint",
    title: {en: 'Ink & Toner', fn:'Ink & Toner'},
    ulr:"/ink-tonner"
  },
  {
    icon:"FaEyeDropper",
    title: {en: 'Janitorial Supplies', fn:'Janitorial Supplies'},
    ulr:"/janitorial Supplies"
  },
  {
    icon:"FaChair",
    title: {en: 'Furniture', fn:'Furniture'},
    ulr:"/furniture"
  },
  {
    icon:"FaMugHot",
    title: {en: 'Breakroom', fn:'Breakroom'},
    ulr:"/breakroom"
  },
  {
    icon:"FaPenAlt",
    title: {en: 'Pen', fn:'Pen'},
    ulr:"/pen"
  },
 
];


