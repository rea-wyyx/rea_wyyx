import Home from '../containers/home'
import CategoryList from "../containers/categoryList"
import Profile from "../pages/Profile/Profile"
import Recommend from "../pages/Recommend/Recommend"
import ShopCart from "../pages/ShopCart/ShopCart"
import Search from '../containers/search'
import Category from '../pages/CategoryDetail'

 const routes= [
{
  path:'/home',
  component:Home,
  exact: true, // 是否严格匹配路由路径
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
  path:'/home/item',
  component:Category
}

]
export default  routes