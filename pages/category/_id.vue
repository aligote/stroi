<template>
<div>
<h2>
<CatId />
</h2>
<div  v-for="offer in getOffCatId" :key="offer._attributes.id">

<offersId />
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import CatId from "@/components/catId"
import offersId from '@/components/offersId'

export default {
  components: {CatId, offersId},
  computed: {
    catid(){
      return this.$route.params.id
    },
    getCatId(){
      return this.$store.getters['categories/catId'](this.catid)
    },
    // getOffCatId(){
    //   return this.$store.getters['offers/getOffCatId'](this.catid)
    // }
  }
 

}


</script>

<style scoped>

</style>
