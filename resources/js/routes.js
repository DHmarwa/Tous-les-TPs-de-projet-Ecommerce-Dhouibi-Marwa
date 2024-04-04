import Viewarticles from "./components/articles/Viewarticles.vue"
import Viewcategorie from "./components/categories/Viewcategorie.vue"
import Addcategorie from "./components/categories/Addcategorie.vue"
import Addaticle from "./components/articles/Addarticle.vue"
import editarticle from "./components/articles/editarticle.vue"
import Viewarticletable from "./components/articles/Viewarticletable.vue"
import Addarticletable from "./components/articles/Addarticletable.vue"
import Editarticletable from "./components/articles/Editarticletable.vue"
import Cardarticle from "./components/articles/Cardarticle.vue"
import HomeCart from './components/cart/HomeCart.vue';
import Cart from './components/cart/Cart.vue';
import Payment from './components/cart/Payment.vue';


export const routes = [
   {
      name: "Viewcategorie",
      path: "/listcat",
      component: Viewcategorie
   },
   {
      name: "Addcategorie",
      path: "/addcategorie",
      component: Addcategorie
   },
   {
      name: "Viewarticles",
      path: "/listart",
      component: Viewarticles
   },
   {
      name: "Addarticle",
      path: "/addarticle",
      component: Addaticle
   },
   {
      name: "editarticle",
      path: "/editarticle/:id",
      component: editarticle
   },

   {
      name: "Viewarticletable",
      path: "/articletable",
      component: Viewarticletable
   },
   {
      name: "Addarticletable",
      path: "/addarticletable",
      component: Addarticletable
   },
   {
      name: "Editarticletable",
      path: "/articletable/edit/:id",
      component: Editarticletable
   },
   {
      name: "Cardarticle",
      path: "/cardarticle",
      component: Cardarticle
   },
   {
      path: '/shopping',
      name: 'HomeCart',
      component: HomeCart
   },
   {
      path:'/cart',
      name:'Cart',
      component:Cart
      },
   {
         path:'/payment',
         name:'Payment',
         component:Payment
         }
]