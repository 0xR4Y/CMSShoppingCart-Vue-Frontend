export default {
    namespaced: true,

    state:{
        cart:[]
    },
    getters:{
        itemCount: (state) => 
            state.cart.reduce(
                (total,cartItem) => total + cartItem.quantity,
                0
            ),
        totalPrice: (state) =>
            state.cart.reduce(
                (total,cartItem) => 
                total + cartItem.quantity * cartItem.product.price,
                0
            ),
    },
    mutations: {
        addProduct(state, product){
            const cartItem = state.cart.find(
                (cartItem) => cartItem.product.id == product.id
            );
            if(cartItem != null){
                cartItem.quantity++;
            }else{
                state.cart.push({ product: product, quantity: 1 });
            }
        },
    },
};