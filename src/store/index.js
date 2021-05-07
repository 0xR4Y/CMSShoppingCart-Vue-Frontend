import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000";
const pagesUrl = `${baseUrl}/pages`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
    strict: true,
    state:{
        pages:[],
        categories:[]
    },
    mutations:{
        setPages(state, pages){
            state.pages = pages;
        },
        setCategories(state, categories){
            state.categories = categories;
        }
    },
    actions:{
        async setPagesAction(context){
            context.commit("setPages", 
            (await Axios.get(pagesUrl)).data);
        },
        async setCategoriesAction(context){
            context.commit("setCategories", 
            (await Axios.get(categoriesUrl)).data);
        },
    }

});