import { shallowMount } from '@vue/test-utils'
import Header from '@/modules/shared/components/Header.vue'

const mockStore = {
    getters: jest.fn()
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Header)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})