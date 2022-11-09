import store from '@/store/index'


describe('Vuex: pruebas en el store', () => {


    test('Estado inicial', () => {


        const { aciertos, porcentaje, preguntaActual, answers, minutos } = store.state

        expect(aciertos).toBe(0)

        expect(porcentaje).toBe(0)

        expect(preguntaActual).toBe(1)

        expect(answers.length).toBe(10)

        expect(minutos).toBe(3)

    })

    test('Mutations: updateAnswer', () => {

        const resp = true

        store.commit('updateAnswer', resp)

        const { porcentaje, preguntaActual } = store.state

        expect(porcentaje).toBe(10)

        expect(preguntaActual).toBe(2)

    })

    test('Mutations: empezarDeNuevo', () => {

        store.state.aciertos = 3

        store.state.porcentaje = 50

        store.state.preguntaActual = 5

        store.state.minutos = 2

        store.commit('empezarDeNuevo')

        const { aciertos, porcentaje, preguntaActual, minutos } = store.state

        expect(aciertos).toBe(3)

        expect(porcentaje).toBe(0)

        expect(preguntaActual).toBe(1)

        expect(minutos).toBe(3)

    })

    test('Getters: answers', () => {

        expect(store.getters['answers'].length).toBe(10)

    })

    test('Getters: answer', async () => {

        expect(store.getters['answer'].answ).toBe('¿De dónde surge realmente la especie humana?')

    })

    test('Getters: answerById', async () => {

        expect(store.getters['answerById'](5).answ).toBe('¿Existen otros seres inteligentes en el universo?')

    })

    test('Getters: porcent', async () => {

        expect(store.getters['porcent']).toBe(0)

    })

    test('Getters: preguntaActual', async () => {

        expect(store.getters['preguntaActual']).toBe(1)

    })

})

