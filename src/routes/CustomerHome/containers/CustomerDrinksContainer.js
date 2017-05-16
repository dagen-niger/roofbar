import { connect } from 'react-redux'
import { makeOrder } from '../modules/orders'

import CustomerBigDrinkList from '../components/CustomerBigDrinkList'

const mapDispathToProps = {
  makeOrder,
}

const mapStateToProps = state => ({
  ...state.customerBar
})

export default connect(mapStateToProps, mapDispathToProps)(CustomerBigDrinkList)