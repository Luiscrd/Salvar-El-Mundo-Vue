import { shallowMount } from '@vue/test-utils'
import Acierto from '@/components/Acierto.vue'

describe('Formulario View', () => {

    let wrapper;

    beforeEach(() => {
          
          wrapper = shallowMount(Acierto)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('El texto a mostrar en el h1 debe ser "Bien!!, has acertado"', () => {

        const h1 = wrapper.find('h1')

        expect(h1.text()).toBe('Bien!!, has acertado')

    })

    test('El texto a mostrar en el h2 debe ser "Sigue así y podremos salvarnos"', () => {

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Sigue así y podremos salvarnos')

    })

})