import {fireEvent, render, screen,} from '@testing-library/vue';
import {mount} from '@vue/test-utils';
import checkout from './checkout.vue';

test('Check displayed button Save  ', () => {
    render(checkout)
    screen.getByText('Submit')
})


const factory = (values = {}) => {
    return mount(checkout, {
        data() {
            return {
                ...values,
            }

        }
    })
}

describe('editprofile FROM', () => {
    it('renders a vue instance', () => {
        const wrapper = mount(checkout)
        expect(wrapper.vm).toBeTruthy()
    })
    it('renders a form', () => {
        const wrapper = factory()
        expect(wrapper.find('form').exists()).toBe(true)
    })
    it('renders a input', () => {
        const wrapper = factory()
        expect(wrapper.find('input').exists()).toBe(true)
    })
    it('renders a input City, addres, Phone', () => {
        const wrapper = factory()
        const CITY = wrapper.get('#City');
        CITY.setValue('Kyiv');
        expect(wrapper.vm.city).toBe('Kyiv')

        const ADDRES = wrapper.find('#address');
        ADDRES.setValue('Heroiv Ukrainy 1');
        expect(wrapper.vm.addres).toBe('Heroiv Ukrainy 1');
        //
        const phone = wrapper.find('#Phone');
        phone.setValue('380999999999');
        expect(wrapper.vm.phone).toBe('380999999999');

    })
})




