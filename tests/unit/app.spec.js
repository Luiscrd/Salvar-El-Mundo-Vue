import { mount } from '@vue/test-utils'
import App from '@/App.vue'

const mockStore = {
    getters: jest.fn()
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))

describe('App Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = mount(App)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})