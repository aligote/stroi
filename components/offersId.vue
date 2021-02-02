<template>
    <p>
<!-- {{ offer.name._text }}
<br> Цена {{ offer.price._text }} руб -->
товар
</p>
</template>
<script>
export default {
    computed: {
         catid(){
      return this.$route.params.id
    },
     getOffCatId(){
      return this.$store.getters['offers/getOffCatId'](this.catid)
    }
    }
   
    
}
</script>