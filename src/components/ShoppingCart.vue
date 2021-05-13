<template>
    <div class="row mt-3">
        <CategoryList />

        <div class="col-9">
            <h2 class="display-4">Your cart</h2>
            <table class="table table-borderd">
                <thread>
                    <tr>
                        <th>Product</th>
                        <th>Quantiry</th>
                        <th>Actions</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thread>
                <tbody>
                    <tr v-if="itemCount == 0">
                        <td colspan="5" class="text-center">
                            Your cart is empty.
                        </td>
                    </tr>
                    <tr v-else v-for="(c,i) in cart" :key="i">
                        <td> {{ c.product.name}} </td>
                        <td> {{ c.quantity}} </td>
                        <td>
                            <button class="btn small btn-primary mx-1">
                                +
                            </button>
                            <button class="btn small btn-warning mx-1">
                                -
                            </button>
                            <button class="btn small btn-danger mx-1">
                                remove
                            </button>
                        </td>
                        <td> {{ c.product.price | currency }} </td>
                        <td> {{ (c.product.price * c*quantity) | currency }} </td>
                    </tr>
                </tbody>
                <tfoor v-if="itemCount > 0">
                    <tr>
                        <td colspan="5" class="text-right">
                            <h4>Total: {{ totalPrice | currency}}</h4>
                        </td>
                    </tr> 
                    <tr>
                        <td colspan="5">
                            <button class="btn btn-danger float-left">
                                Clear Cart
                            </button>
                            <router-link to="/checkout" class="btn btn-primary float-right">
                            Checkout
                            </router-link>
                        </td>
                    </tr>
                </tfoor>
            </table>
        
        </div>
    </div> 
</template>

<script>
import {mapGetters} from "vuex";
import CategoryList from "./CategoryList";
import CategoryList from './CategoryList.vue';


export default {
    components:{ CategoryListCategoryList},

    computed:{
        ...mapState({cart: state => state.cart.cart}),
        ...mapGetters({
            itemCount: "cart/itemCount",
            totalPrice: "cart/totalPrice",
        }),
    },

};
</script>