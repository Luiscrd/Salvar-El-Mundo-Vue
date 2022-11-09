import { shallowMount } from '@vue/test-utils'
import NoPageFound from '@/modules/shared/pages/NoPageFound.vue'

describe('Formulario View', () => {

    let wrapper;

    beforeEach(() => {
          
          wrapper = shallowMount(NoPageFound)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('El texto a mostrar en el h1 debe ser "Page not foud"', () => {

        const h1 = wrapper.find('h1')

        expect(h1.text()).toBe('Page not foud')

    })

})