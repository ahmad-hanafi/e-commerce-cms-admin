<template>
  <div>
    <Navbar />
    <div>
      <h1>ini update product tapi di component</h1>
      <form>
        <label for="name">Name</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="text"
            class="form-control col-6"
            required
            v-model="item.name"
          /><br />
        </div>

        <label for="image">Image URL</label><br />
        <div class="d-flex justify-content-center">
          <textarea
            class="form-control col-6"
            rows="2"
            type="text"
            required
            v-model="item.image_url"
          /><br />
        </div>

        <label for="category">Category</label><br />
        <div class="d-flex justify-content-center">
          <select v-model="item.category" class="form-control col-6">
            <option disabled value="">Please select one</option>
            <option>Bulog</option>
            <option>Lokal</option>
            <option>Premium</option>
          </select>
          <br />
        </div>

        <label for="price">Price (In Rupiah)</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="number"
            class="form-control col-6"
            required
            v-model="item.price"
          /><br />
        </div>

        <label for="stock">Stock</label><br />
        <div class="d-flex justify-content-center">
          <input
            type="number"
            class="form-control col-6"
            required
            v-model="item.stock"
          /><br />
        </div>
        <hr />
        <button
          type="button"
          class="btn btn-primary btn-block"
          @click.prevent="updateProduct(item.id)"
        >
          Save changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Update",
  components: {
    Navbar,
  },
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  methods: {
    updateProduct(id) {
      this.$store.dispatch("updateProduct", {
        id: id,
        router: this.$router,
      });
    },
  },
};
</script>

<style>
</style>