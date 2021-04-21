<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col-1">No</th>
          <th scope="col-3">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col-1">Stock</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in products" :key="i">
          <th scope="row">{{ i+1 }}</th>
          <td>
            <img :src="product.image_url" alt="" width="350px" />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button 
            data-toggle="modal"
            class="btn btn-success"
            type="button"
            @click.prevent="getProductById(product.id)"
            data-target="#updateProduct"
            >Update
            </button>
            <button 
            @click.prevent="deleteProduct(product.id)"
            class="btn btn-danger"
            type="button"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', {
        id: id,
        router: this.$router
      })
    },
    getProductById (id) {
        // console.log(id)
      this.$store.dispatch('getProductById', {
        id: id,
        router: this.$router
      })
    }
    },
    mounted() {
        this.getProducts()
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    }
};
</script>

<style>
</style>