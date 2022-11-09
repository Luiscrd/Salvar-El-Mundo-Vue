import { shallowMount } from '@vue/test-utils'
import Formulario from '@/views/Formulario.vue'


const mockStore = {
    getters: jest.fn()
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))




describe('Formulario View', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Formulario)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})