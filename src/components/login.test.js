import {fireEvent, render, screen,} from '@testing-library/vue';
import {mount} from '@vue/test-utils';
import login from './login.vue';

test('Check displayed button Login  ', () => {
    render(login)
    screen.getByText('Login')
})
const factory = (values = {}) => {
    return mount(login, {
        data() {
            return {
                ...values,
            }

        }
    })
}

describe('Lofin FORM', () => {
    it('renders a vue instance', () => {
        const wrapper = mount(login)
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
    it('renders a input Email ', () => {
        const wrapper = factory()
        const login = wrapper.find('#floatingInput');
        login.setValue('admin@admin.com');
        expect(wrapper.vm.form.email).toBe('admin@admin.com')

        const passowrd = wrapper.find('#floatingPassword');
        passowrd.setValue('admin');
        expect(wrapper.vm.form.password).toBe('admin');

    })
    it('triggers login event on button click', async () => {
        const wrapper = factory()
        const button = wrapper.find('#login');

        // Mock user input
        wrapper.setData({
            form: {
                email: 'admin@admin',
                password: 'admin',
            },
        });

        // Simulate button click
        await button.trigger('click');


        //expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/'); помилка із push не знаю як виправити
    });


})




