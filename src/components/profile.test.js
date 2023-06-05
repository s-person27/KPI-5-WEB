import {render,screen} from '@testing-library/vue';
import profile from './profile.vue';

test('Check displayed button Edit  ', () => {
    render(profile)
    screen.getByText('Edit')
})


test('Check displayed table   ', () => {
    render(profile)
    screen.getByText('Name')
    screen.getByText('Email')
    screen.getByText('Birthday')
    screen.getByText('Sex')
})


