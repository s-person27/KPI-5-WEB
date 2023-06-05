import {fireEvent, render, screen,} from '@testing-library/vue';
import {mount} from '@vue/test-utils';
import editprofile from './editprofile.vue';

test('Check displayed button Save  ', () => {
    render(editprofile)
    screen.getByText('Save')
})


const factory = (values = {}) => {
    return mount(editprofile, {
        data() {
            return {
                ...values,
            }

        }
    })
}

describe('editprofile FROM', () => {
    it('renders a vue instance', () => {
        const wrapper = mount(editprofile)
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
    it('renders a input Username', () => {
        const wrapper = factory()
        const UsernameInput = wrapper.find('#username');
        UsernameInput.setValue('Names');
        expect(wrapper.vm.form.userName).toBe('Names')

        const EmailInput = wrapper.find('#useremail');
        EmailInput.setValue('test@test.com');
        expect(wrapper.vm.form.useremail).toBe('test@test.com');

        const BirthdayInput = wrapper.find('#bday');
        BirthdayInput.setValue('2021-01-01');
        expect(wrapper.vm.form.birthDay).toBe('2021-01-01');

        const SexSelect = wrapper.find('[data-usersex]');
        SexSelect.setValue('2');
        expect(wrapper.vm.form.sex).toBe('2');

    })
    // it('check submit', () => {
    //     const wrapper = factory()
    //     const handleSubmit = jest.fn()
    //     wrapper.vm.$options.methods.handleSubmit = handleSubmit
    //
    //     const form = wrapper.find('.btn-primary')
    //
    //     const saveButton = wrapper.find('.btn-primary')
    //     saveButton.element.click()
    //     expect(handleSubmit).toHaveBeenCalled()
    //
    // })
})




