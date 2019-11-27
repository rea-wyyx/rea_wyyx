import { connect } from 'react-redux'
import Profile from '../pages/Profile/Profile'
import {getWorthBuying , getAutoRecommend} from '../redux/actions'

export default connect(state => ({}), { getWorthBuying ,getAutoRecommend})(Profile)