import { createStore } from "vuex"
// import answers from '@/store/answers'
import store from '@/store/index'

const createVuexStore = (intialState) => createStore({
    ...store,
    state: intialState
})

export default createVuexStore