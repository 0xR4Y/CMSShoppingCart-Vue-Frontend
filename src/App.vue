<template>
  <div id="container">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from "vuex";

import Header from "./components/Header";

export default {

  components: {
    Header,
  },
  methods:{
    ...mapActions(["setPagesAction","setCategoriesAction"]),
  },
  async created(){
    this.setPagesAction();
    this.setCategoriesAction();
  },
};
</script>
