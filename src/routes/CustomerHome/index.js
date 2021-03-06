import CustomerBarContainer from './containers/CustomerBarContainer'
import { injectReducer } from 'store/reducers'
import customerOrdersReducer, { fetchAllCustomerOrders } from 'store/orders'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    const state = store.getState()


    if (!state.customerOrders || state.customerOrders.orders.length) {
      store.dispatch(fetchAllCustomerOrders())
    }

    injectReducer(store, { key: 'customerOrders', reducer:customerOrdersReducer })

    cb(null, CustomerBarContainer)
  }
})
