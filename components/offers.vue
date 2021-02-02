<template>
  <div class="offer-wrap">
    <div class="offer" v-for="offer in offers.slice(0, 100)" :key="offer._attributes.id">
      <p><img :src="offer.picture._text"  alt="рисунок товара"></p>
      <span>{{ offer.name._text }}</span>

      <span>Категория {{ offer.categoryId._text }}</span>
      <span class="price-offer-block">{{ offer.price._text }} руб.</span>

      <a class="doOrder"  :href="offer.url._text">Купить</a>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "offers",
  methods: {
    ...mapActions({
      getOff: 'offers/act'
    }),

  },
  computed: {
    ...mapGetters({
      offers: 'offers/offers'
    }),

  },
  async mounted(){
    await this.getOff()
  }

}
</script>

<style scoped>
.price-offer-block {
  font-size: 15px;
  font-weight: bold;
}

</style>
