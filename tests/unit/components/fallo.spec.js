import { shallowMount } from '@vue/test-utils'
import Fallo from '@/components/Fallo.vue'

describe('Formulario View', () => {

    let wrapper;

    beforeEach(() => {
          
          wrapper = shallowMount(Fallo)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('El texto a mostrar en el h1 debe ser "Has fallado la pregunta!!"', () => {

        const h1 = wrapper.find('h1')

        expect(h1.text()).toBe('Has fallado la pregunta!!')

    })

    test('El texto a mostrar en el h2 debe ser "Cada vez estamos mas cerca de la extinción!!"', () => {

        const h2 = wrapper.find('h2')

        expect(h2.text()).toBe('Cada vez estamos mas cerca de la extinción!!')

    })

})