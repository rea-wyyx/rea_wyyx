import Home from '../containers/home'
import CategoryList from "../containers/categoryList"
import Profile from "../pages/Profile/Profile"
import Recommend from "../containers/recommend"
import ShopCart from "../pages/ShopCart/ShopCart"
import Search from '../containers/search'
import Category from '../pages/Home/components/Category'

 const routes= [
{
  path:'/home',
  component:Home
},
{
  path:'/categorylist',
  component:CategoryList
},
{
  path:'/recommend',
  component:Recommend
},
{
  path:'/shopcart',
  component:ShopCart
},
{
  path:'/profile',
  component:Profile
},
{
  path:'/search',
  component:Search
},
{
  path:'/home/item/:id',
  component:Category
}

]
export default  routes