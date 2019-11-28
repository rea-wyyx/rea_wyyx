import { connect } from 'react-redux'
import Recommend from '../pages/Recommend/Recommend'
import {getWorthBuying,getAutoRecommend} from '../redux/actions'

export default connect(state => ({}), { getWorthBuying,getAutoRecommend})(Recommend) 