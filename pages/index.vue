<template>
  <div class="wrapper">
<!--    <categories />-->
<!--    <h4>Товары</h4>-->
<!--  <offers />-->
    <app-header />
    <app-bread />
    <app-shop />
    <app-brand />
    <app-footer />
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
// import Categories from "@/components/categories"
// import Offers from '@/components/offers'
import appHeader from "@/components/appHeader"
import appBread from "@/components/appBread"
import appShop from "@/components/appShop"
import appBrand from "../components/appBrand"
import appFooter from "../components/appFooter"
export default {
  components: {
    // Categories,
    // Offers
    appHeader,
    appBread,
    appShop,
    appBrand,
    appFooter
  },
  // methods: {
  //   ...mapActions({
  //     // getCat: 'categories/act',
  //     getOff: 'offers/act'
  //   }),

  // },
  // computed: {
  //   ...mapGetters({
  //     // categories : 'categories/categories',
  //     offers: 'offers/offers'
  //   }),

  // }   ,
  // async mounted(){
  //   // this.getCat()
  //  await this.getOff()
  // }

}



</script>




<style>

</style>
