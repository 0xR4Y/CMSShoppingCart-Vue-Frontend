<template>
 <div class="row mt-3">
    <CategoryList />
      <div class="col-9">
        <div class="row">
          <div class="col-4 mt-3" v-for="(p, i) in products" :key="i">
            <p>
              <img :src="productImages + p.image" class="img-fluid">
            </p>
            <h3> {{p.name}} </h3>
            <p> {{p.description}} </p>
            <p> {{p.price | currency }}</p>
            <p> <button class="btn btn-primary"> Add to Cart</button> </p>
          </div>
       </div>
       <ProductPagination />
      </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import CategoryList from "./CategoryList";
import ProductPagination from "./ProductPagination";

export default {
  components:{ CategoryList,ProductPagination},
  computed:{
    ...mapState(["products","productImages"]),
    
  },
  methods:{
    ...mapActions(["setProductsByCategoryAction"]),
  },
  created(){
    const category = this.$route.params.category;
    this.setProductsByCategoryAction(category);
  },
  beforeRouteUpdate(to, from, next){
    const category = to.params.category;
    this.setProductsByCategoryAction(category);
    next();
  }
};
</script>
