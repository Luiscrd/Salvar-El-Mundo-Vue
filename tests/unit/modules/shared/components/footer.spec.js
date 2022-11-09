import { shallowMount } from '@vue/test-utils'
import Footer from '@/modules/shared/components/Footer.vue'

const mockStore = {
    getters: jest.fn()
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Footer)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})