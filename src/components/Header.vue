<template>
 <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
  <router-link class="navbar-brand" to='/'>CMS Shopping Cart</router-link>
  <button class="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarsExampleDefault" 
          aria-controls="navbarsExampleDefault" aria-expanded="false" 
          aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" v-for="(p,i) in pages" :key="i">
        <router-link class="nav-link" :to="'/' + p.slug">{{p.name}}</router-link>
      </li>
    </ul>
  </div>
  <CartSummary />
</nav>  
</template>

<script>
import { mapState } from 'vuex';
import CartSummary from "./CartSummary";

export default {

  components:{ CartSummary },
  computed:{
    ...mapState(["pages"]),
    // pageContent(){
    //   const slug = this.$route.params.slug ? this.$route.params.slug : "home";
    //   const page = this.pages.fing(page => page.slug == slug);

    //   if(page){
    //     return page.content;
    //   } else{
    //     return "";
    //   }
    // }
  },
};
</script>
