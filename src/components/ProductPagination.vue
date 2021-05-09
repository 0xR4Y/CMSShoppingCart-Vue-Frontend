<template>
  <nav class="mt-5">
    <ul class="pagination">
      <li class="page-item" v-if="currentPage !=1">
      <button class="btn btn-secondary mx-1">Previous</button>
      </li>

      <li class="page-item" v-for="(p, i) in pageCount" :key="i">
      <button 
      class="btn mx-1" 
      :class="[
        i + 1 == currentPage ? 'btn-primary' : 'btn-secondary',
        ]"
        >
        {{p}}
        </button>
      </li>

      <li class="page-item" v-if="currentPage != pageCount">
      <button class="btn btn-secondary mx-1">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  computed:{
    ...mapState(["pageCount","currentPage"]),
    
  },
  methods:{
    ...mapActions(["setProductsByCategoryAction"]),
  },
  created(){
  },
};
</script>
