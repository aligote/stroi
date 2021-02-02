<template>
  <!-- Sidebar Shopping Option Start -->
  <div class="col-lg-3  order-2">
    <div class="sidebar white-bg">
      <div class="single-sidebar">
        <div class="group-title">
          <h2>categories</h2>
        </div>
        <ul>
          <li v-for="category in categories" :key="category._attributes.id">
            <nuxt-link :to='/category/ + category._attributes.id'>{{ category._text }} ({{ category._attributes.id }})</nuxt-link>
          </li>

        </ul>
      </div>
      <div class="single-sidebar">
        <div class="group-title">
          <h2>color</h2>
        </div>
        <ul class="color-option">
          <li>
            <a class="blue" href="#"></a>
          </li>
          <li>
            <a class="green" href="#"></a>
          </li>
          <li>
            <a class="black" href="#"></a>
          </li>
          <li>
            <a class="rose" href="#"></a>
          </li>
          <li>
            <a class="red" href="#"></a>
          </li>
          <li>
            <a class="purple" href="#"></a>
          </li>
          <li>
            <a class="rose" href="#"></a>
          </li>
          <li>
            <a class="yellow" href="#"></a>
          </li>
          <li>
            <a class="orange" href="#"></a>
          </li>
        </ul>
      </div>
      <div class="single-sidebar">
        <div class="group-title">
          <h2>price</h2>
        </div>
        <form action="#">
          <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
            <div class="ui-slider-range ui-corner-all ui-widget-header" ></div>
          </div>
          <input id="amount" class="amount" readonly="" type="text">
        </form>
      </div>
      <div class="single-sidebar">
        <div class="group-title">
          <h2>manufacturer</h2>
        </div>
        <ul class="manufactures-list">
          <li><a href="#">Brand one (14)</a></li>
          <li><a href="#">Brand two (13)</a></li>
          <li><a href="#">Brand three (13)</a></li>
          <li><a href="#">Brand four (14)</a></li>
          <li><a href="#">Brand five (13)</a></li>
        </ul>
      </div>
      <div class="single-sidebar">
        <div class="group-title">
          <h2>Compare Products</h2>
        </div>
        <div class="best-seller-pro-two compare-pro best-seller-pro-two owl-carousel">
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/1.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$38.00</span><del class="prev-price">$40.00</del></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/2.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$32.00</span></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/3.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$35.00</span><del class="prev-price">39.00</del></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
        </div>
      </div>
      <div class="single-sidebar">
        <div class="group-title">
          <h2>My Wish List</h2>
        </div>
        <div class="best-seller-pro-two compare-pro best-seller-pro-two owl-carousel">
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/4.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$86.00</span><del class="prev-price">90.00</del></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/1.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$32.00</span></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
          <!-- Best Seller Multi Product Start -->
          <div class="best-seller-multi-product">
            <!-- Single Product Start -->
            <div class="single-product">
              <!-- Product Image Start -->
              <div class="pro-img">
                <a href="product.html">
                  <img class="primary-img" src="@/assets/img/products/2.jpg" alt="single-product">
                </a>
              </div>
              <!-- Product Image End -->
              <!-- Product Content Start -->
              <div class="pro-content">
                <h4><a href="product.html">Products Name Here</a></h4>
                <div class="product-rating">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <p><span class="price">$38.00</span><del class="prev-price">45.00</del></p>
              </div>
              <!-- Product Content End -->
            </div>
            <!-- Single Product End -->
          </div>
          <!-- Best Seller Multi Product End -->
        </div>
      </div>
      <!-- Single Banner Start -->
      <div class="single-sidebar single-banner zoom pt-20">
        <a href="#" class="hidden-sm"><img src="@/assets/img/banner/8.jpg" alt="slider-banner"></a>
        <a href="#" class="visible-sm"><img src="@/assets/img/banner/6.jpg" alt="slider-banner"></a>
      </div>
      <!-- Single Banner End -->
    </div>
  </div>
  <!-- Sidebar Shopping Option End -->
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "categories",
  methods: {
    ...mapActions({
      getCat: 'categories/act'
    })

  },
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  },
  async mounted(){
    await  this.getCat()
}
}
</script>

<style scoped>

</style>
