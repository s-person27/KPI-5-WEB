import {createStore} from 'vuex';

export default createStore({
    state: {
        cart: [],
        user: null,
        userlist: [
            {
                id: 1,
                username: 'admin',
                password: 'admin',
                email: 'admin@admin.com',
                birthday: '1999-01-01',
                sex: 1,
            },
            {
                id: 2,
                username: 'user',
                password: 'user',
                email: 'user@user.com',
                birthday: '1999-01-01',
                sex: 1,
            }
        ],
        orderlist: [
            // {   id: 1,
            //     username: 'admin',
            //     email: '',
            //     phone: '',
            //     address: '',
            //     order: [
            //         {
            //             id: 1,
            //             title: 'Xiaomi-Mi',
            //             price: 2000,
            //             image: 'Xiaomi-Mi-Notebook-Pro-15-2020-Intel-0_large.jpg',
            //             description: 'Xiaomi Mi Notebook Pro 15 2020 Intel Core i7-10510U 16GB 1TB SSD MX350 2GB 15.6" FHD Win10 Grey',
            //             quantity: 1
            //         },
            //     ]
            //
            // }
        ],
        // ProductList: [
        //     {
        //         id: 1,
        //         title: 'Xiaomi-Mi',
        //         price: 2000,
        //         image: 'Xiaomi-Mi-Notebook-Pro-15-2020-Intel-0_large.jpg',
        //         description: 'Xiaomi Mi Notebook Pro 15 2020 Intel Core i7-10510U 16GB 1TB SSD MX350 2GB 15.6" FHD Win10 Grey',
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         title: 'Iphone',
        //         price: 1000,
        //         image: 'iphone-se.jpg',
        //         description: 'Apple iPhone SE 2020 64GB Black',
        //         quantity: 1
        //     },
        //     ]

    },
    mutations: {
        addUser(state, user) {
            state.userlist.push(user);
        },
        loginUser(state, user) {
            state.user = user;
        },
        logoutUser(state) {
            state.user = null;
        },
        updateUser(state, updatedUser) {
            const index = state.userlist.findIndex(user => user.id === updatedUser.id);
            if (index !== -1) {
                // Використовуємо Vue.set для оновлення об'єкту користувача,
                // щоб Vue міг відстежувати зміни та оновлювати компоненти, які використовують цей об'єкт
                Vue.set(state.userlist, index, updatedUser);
            }
        },
        addOrder(state, order) {
            state.orderlist.push(order);
        },

    },
    actions: {
        registerUser({commit}, user) {
            // Генерувати новий ID для користувача
            const newUserId = state.userlist.length + 1;
            // Створити об'єкт нового користувача з переданими даними
            const newUser = {
                id: newUserId,
                ...user
            };
            // Викликати мутацію addUser та передати їй нового користувача
            commit('addUser', newUser);
        },
        loginUser({commit, state}, user) {
            const existingUser = state.userlist.find(
                (item) => item.email === user.email && item.password === user.password
            );
            if (existingUser) {
                commit('loginUser', existingUser);
                // Можливо, ви хочете зберегти інформацію про входження користувача в локальне сховище (localStorage) для збереження статусу онлайн
                localStorage.setItem('loggedInUser', JSON.stringify(existingUser));

            } else {
                window.alert('Email або пароль невірний');
            }
        },
        logoutUser({commit}) {
            // Видалення інформації про входження користувача з локального сховища
            localStorage.removeItem('loggedInUser');
            commit('logoutUser');
        },
        placeOrder({ commit }, order) {
            // Генерувати новий ID для замовлення
            const newOrderId = state.orderlist.length + 1;
            // Створити об'єкт нового замовлення з переданими даними та новим ID
            const newOrder = {
                id: newOrderId,
                ...order
            };
            // Викликати мутацію addOrder та передати їй нове замовлення
            commit('addOrder', newOrder);
        },
    },
    getters: {
        getUser: (state) => state.user,
        getUserList: (state) => state.userlist,
    },


})

