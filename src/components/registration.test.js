import { mount } from '@vue/test-utils';
import Registration from './registration.vue';

describe('RegistrationForm', () => {
    it('should render the form correctly', () => {
        const wrapper = mount(Registration);

        // Перевірка наявності полів форми
        expect(wrapper.find('#username').exists()).toBe(true);
        expect(wrapper.find('#email').exists()).toBe(true);
        expect(wrapper.find('#password').exists()).toBe(true);
        expect(wrapper.find('#confirmPassword').exists()).toBe(true);
        expect(wrapper.find('#sex').exists()).toBe(true);
        expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
    });

    it('should update data properties when input fields are filled', async () => {
        const wrapper = mount(Registration);

        const usernameInput = wrapper.get('#username');
        usernameInput.setValue('admin');
        expect(wrapper.vm.username).toBe('admin');

        const emailInput = wrapper.find('#email');
        emailInput.setValue('admin@admin.com');
        expect(wrapper.vm.email).toBe('admin@admin.com');

        const passwordInput = wrapper.find('#password');
        passwordInput.setValue('password');
        expect(wrapper.vm.password).toBe('password');

        const confirmPasswordInput = wrapper.find('#confirmPassword');
        confirmPasswordInput.setValue('password123');
        expect(wrapper.vm.confirmPassword).toBe('password123');

        const BirthdayInput = wrapper.find('#birthday');

        // expect(wrapper.vm.form.birthday).toBe('2021-01-01');

         const sexInput = wrapper.find('#sex');
         sexInput.setValue('2');
         expect(wrapper.vm.sex).toBe('2');
    });

    it('should trigger registerUser method when Submit button is clicked', async () => {
        const wrapper = mount(Registration);
        wrapper.vm.registerUser = jest.fn();

        const submitButton = wrapper.find('button[type="submit"]');
        await submitButton.trigger('click');

        expect(wrapper.vm.registerUser).toHaveBeenCalled();
    });
});
