import { mount } from '@vue/test-utils';
import cart from './cart.vue';

describe('Cart', () => {
    it('check  press to  - and + ', () => {
        const wrapper = mount(cart);

        // Перевірка початкових значень
        expect(wrapper.vm.elem.total).toBe(300);
        expect(wrapper.vm.elem.quantity).toBe(1);

        // Натиснення кнопки "+" і перевірка зміни значень
        wrapper.find('.update-cart[data-action="add"]').trigger('click');
        expect(wrapper.vm.elem.total).toBe(2000);
        expect(wrapper.vm.elem.quantity).toBe(2);

        // Натиснення кнопки "-" і перевірка зміни значень
        wrapper.find('.update-cart[data-action="remove"]').trigger('click');
        expect(wrapper.vm.elem.total).toBe(300);
        expect(wrapper.vm.elem.quantity).toBe(1);
    });
});
