import { createStore } from 'vuex'
import answers from './answers'

export default createStore({
  state: {
    aciertos: 0,
    porcentaje: 0,
    preguntaActual: 1,
    answers: answers,
    minutos: 3
  },
  getters: {
    answers(state) {
      return state.answers
    },
    answer(state) {
      const answer = state.answers.find( ans => ans.id === state.preguntaActual )
      return answer
    },
    answerById: (state) => (id) => {
      const answer = state.answers.find( ans => ans.id === id )
      return answer
    },
    porcent(state) {
      return state.porcentaje
    },
    preguntaActual(state) {
      return state.preguntaActual
    }
  },
  mutations: {
    updateAnswer(state, resp) {
      if( resp ) state.porcentaje += 10
      if(state.preguntaActual < 11 ) state.preguntaActual++
    },
    empezarDeNuevo(state) {
      state.preguntaActual = 1
      state.porcentaje = 0
      state.minutos = 3
    }
  }
})
