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
    slug :"/link-tour"
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

export const liveChat = {
  type: 'simple',
  buttonClass: 'live-chat',
  title: 'Live Chat',
  slug : "/chat"
}
export const langSelectOption = {
  options: [{ value: "En", name: "En" }, { value: "Fn", name: "Fn" }]
}

export const footerMenuCustomerServics={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:"Customer Services",
  navLinkInfo: [
      { title: 'Help center', slug: 'help-center' },
      { title: 'Contact-us', slug: 'contact-us' },
      { title: 'Return an item', slug: 'return item' },
      { title: 'Return an item', slug: 'return item' },
      { title: 'Return an item', slug: 'return item' }
  ]
}
export const footerMenuCorporateInfo={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:"Corporate Info",
  navLinkInfo: [
      { title: 'Staples Business Advantage Overview', slug: 'help-center' },
      { title: 'Industries Served', slug: 'contact-us' },
      { title: 'Blog', slug: 'return item' },
      { title: 'Our Brands', slug: 'return item' }
      
  ]
}

export const staplesCorporateSolutions={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:"Staples Corporate Solutions",
  navLinkInfo: [
      { title: 'Office Products', slug: 'help-center' },
      { title: 'Technology Products', slug: 'contact-us' },
      { title: 'Furniture', slug: 'return item' },
      { title: 'Facilities', slug: 'return item' },
      { title: 'Promotional Products', slug: 'return item' },
      
  ]
}


export const staplesNewCustomer={
  type:"footerLinks",
  navClass: "footer-navigation",
  heading:"New Customer",
  navLinkInfo: [
      { title: 'Become a Customer', slug: 'help-center' },
      { title: 'Govt. Customers', slug: 'contact-us' },
      { title: 'Memberships', slug: 'return item' },
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
  type: 'simple',
  buttonClass: 'rounded-button-red',
  title: 'Checkout',
  slug : "/checkout"
}

export const headerCartViewCartButton={
  type: 'simple',
  buttonClass: 'rounded-button ',
  title: 'View Cart',
  slug : "/cart"
}

export const headerCartAddCatalogue={
  type: 'simple',
  buttonClass: 'click-here',
  title: 'Click here',
  slug : "/checkout"
}
export const headerCartPrintableVersion={
  type: 'simple',
  buttonClass: 'click-here',
  title: 'Click here',
  slug : "/checkout"
}

export const headerSignInButton={
  type: 'submit',
  buttonClass: 'header-signIn',
  title: 'Sign In',
  slug : "singin"
}


export const headerLoginPasswordButton={
  type: 'simple',
  buttonClass: 'forgot-password',
  title: 'Password',
  slug : "/forgot-password"
}



export const headerLoginUserIdButton={
  type: 'simple',
  buttonClass: 'forgot-password',
  title: 'User Id ?',
  slug : "/forgot-user-id"
}


export const headerLoginCustomersClickButton={
  type: 'simple',
  buttonClass: 'forgot-password',
  title: 'Click Here ',
  slug : "/"
}


export const headerLoginShopAsGuestButton={
  type: 'submit',
  buttonClass: 'header-shopAsGuest',
  title: 'Shop as guest',
  slug : ""
}