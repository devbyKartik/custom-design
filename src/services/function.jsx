export const  breadcrumbArray=(activeName,list)=>{
   let breadcrumb=[{status:true, title:"Home",slug:"/"}, ];
   if(list.length>0){
    breadcrumb= [...breadcrumb , ...list] ;
   }
   if(activeName && activeName.status){
      breadcrumb= [...breadcrumb , activeName] ;
   }
   return breadcrumb;
}