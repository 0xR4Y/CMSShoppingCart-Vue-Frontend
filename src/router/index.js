import Vue from "vue";
import VueRouter from "vue-router";
import Pages from "../components/Pages"

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes:[
    {path: "/:slug?", component: Pages},
    {path: "*", redirect: "/"},
    ],

});