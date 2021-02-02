<template>
  <!-- Shop Page Start -->
  <div class="main-shop-page pb-60">
    <div class="container">
      <!-- Row End -->
      <div class="row">
       <categories />
        <!-- Product Categorie List Start -->
        <div class="col-lg-9 order-lg-2">
          <!-- Grid & List View Start -->
          <div class="grid-list-top border-default universal-padding fix mb-30">
            <div class="grid-list-view f-left">
              <ul class="list-inline nav">
                <li><a v-bind:class="[activeG, showG]" data-toggle="tab" href="#grid-view" @click.prevent="showGrid"><i class="fa fa-th"></i></a></li>
                <li><a  v-bind:class="[activeL, showL]" data-toggle="tab" href="#list-view" @click.prevent="showList"><i class="fa fa-list-ul"></i></a></li>
                <li><span class="grid-item-list"> Items 1-12 of 13</span></li>
              </ul>
            </div>
            <!-- Toolbar Short Area Start -->
            <div class="main-toolbar-sorter f-right">
              <div class="toolbar-sorter">
                <label>sort by</label>
                <select class="sorter" name="sorter">
                  <option value="Position" selected="selected">position</option>
                  <option value="Product Name">Product Name</option>
                  <option value="Price">Price</option>
                </select>
                <span><a href="#"><i class="fa fa-arrow-up"></i></a></span>
              </div>
            </div>
            <!-- Toolbar Short Area End -->
          </div>
          <!-- Grid & List View End -->
          <div class="main-categorie">
            <!-- Grid & List Main Area End -->
            <div class="tab-content fix">
              <div id="grid-view" class="tab-pane" v-bind:class="activeG">
                <div class="row">
                  <!-- Single Product Start -->
                  <div class="col-lg-4 col-sm-6" v-for="offer in offers.slice(0, 100)" :key="offer._attributes.id">
                    <div class="single-product">
                      <!-- Product Image Start -->
                      <div class="pro-img">
                        <a href="product.html">
                          <img class="primary-img" :src="offer.picture._text" alt="single-product">
<!--                          <img class="secondary-img" src="@/assets/img/products/2.jpg" alt="single-product">-->
                        </a>
                      </div>
                      <!-- Product Image End -->
                      <!-- Product Content Start -->
                      <div class="pro-content">
                        <div class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <h4><a href="product.html">{{ offer.name._text }}</a></h4>
                        <p><span class="price">{{ offer.price._text }} руб</span><del class="prev-price">{{ offer.price._text }} руб</del></p>
                        <div class="pro-actions">
                          <div class="actions-secondary">
                            <a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
                            <a class="add-cart" href="cart.html" data-toggle="tooltip" title="Add to Cart">Add To Cart</a>
                            <a href="compare.html" data-toggle="tooltip" title="Add to Compare"><i class="fa fa-signal"></i></a>
                          </div>
                        </div>
                      </div>
                      <!-- Product Content End -->
                    </div>
                  </div>
                  <!-- Single Product End -->

                </div>
              </div>
              <!-- #grid view End -->
              <div id="list-view" class="tab-pane" v-bind:class="activeL">
                <!-- Single Product Start -->
                <div class="single-product" v-for="offer in offers.slice(0, 100)" :key="offer._attributes.id">
                  <!-- Product Image Start -->
                  <div class="pro-img">
                    <a href="product.html">
                      <img class="primary-img" :src="offer.picture._text" alt="single-product">
                      <img class="secondary-img" src="@/assets/img/products/2.jpg" alt="single-product">
                    </a>
                  </div>
                  <!-- Product Image End -->
                  <!-- Product Content Start -->
                  <div class="pro-content">
                    <div class="product-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <h4><a href="product.html">222{{ offer.name._text }}</a></h4>
                    <p><span class="price">{{ offer.price._text }} руб</span><del class="prev-price">$32.00</del></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati velit, similique voluptas doloribus assumenda quis libero animi cumque dignissimos quisquam, quaerat ea laboriosam incidunt ullam.</p>
                    <div class="pro-actions">
                      <div class="actions-secondary">
                        <a href="wishlist.html" data-toggle="tooltip" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
                        <a class="add-cart" href="cart.html" data-toggle="tooltip" title="Add to Cart">Add To Cart</a>
                        <a href="compare.html" data-toggle="tooltip" title="Add to Compare"><i class="fa fa-signal"></i></a>
                      </div>
                    </div>
                  </div>
                  <!-- Product Content End -->
                </div>
                <!-- Single Product Start -->

              </div>
              <!-- #list view End -->
            </div>
            <!-- Grid & List Main Area End -->
          </div>
          <!--Breadcrumb and Page Show Start -->
          <div class="pagination-box fix">
            <ul class="blog-pagination ">
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
            <div class="toolbar-sorter-footer">
              <label>show</label>
              <select class="sorter" name="sorter">
                <option value="Position" selected="selected">12</option>
                <option value="Product Name">15</option>
                <option value="Price">30</option>
              </select>
              <span>per page</span>
            </div>
          </div>
          <!--Breadcrumb and Page Show End -->
        </div>
        <!-- product Categorie List End -->
      </div>
      <!-- Row End -->
    </div>
    <!-- Container End -->
  </div>
  <!-- Shop Page End -->
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Categories from "./categories";
export default {
  // name: "offers",
  components: {Categories},
  // activeClass: '1',
  // showClass : '2',
  data() {
    return {
      name: "offers",
      activeG : 'active',
      showG : 'show',
      activeL : '',
      showL : ''

          }
  },
  methods: {
    ...mapActions({
      getOff: 'offers/act'
    }),
    showGrid: function (){
      return [this.activeG = 'active',
      this.showG = 'show',
      this.activeL = '',
      this.showL = '']
    },
    showList: function (){
      return [ this.activeL = 'active',
      this.showL = 'show',
        this.activeG = '',
        this.showG = ''
      ]
    }

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

</style>
