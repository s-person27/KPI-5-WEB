import {render,screen} from '@testing-library/vue';
import navbar from './navbar.vue';

test('Check  all button in navbar', () => {
    render(navbar)
    screen.getByText('Home')

})

test('Check  button About in navbar', () => {
    render(navbar)
    screen.getByText('About')

})

test('Check   button Cart  in navbar', () => {
    render(navbar)
    screen.getByText('Cart')

})

test('Check   button login  in navbar', () => {
    render(navbar)
    screen.getByText('login')
})

test('Check   button logout  in navbar', () => {
    render(navbar)
    screen.getByText('logout')
})

test('Check   button Shops  in navbar', () => {
    render(navbar)
    screen.getByText('Shops')
})


test('Check   button Profile  in navbar', () => {
    render(navbar)
    const i =  screen.getAllByText('Profile')
    expect(i).toHaveLength(2)
})



