<template>
  <div class="card-body border-color-pink">
    <h5 class="card-title">Success!</h5>
    <p class="card-text">Your Data Has Been Submitted!</p>
    <router-link to="/detail" class="btn bg-color-pink text-dark"
      >Back</router-link>
      <router-link to="/FormTambahKK" >
        <button id="btn" class="btn btn-primary mt-3 ml-3">Close</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "SucessForm",

  data() {
    return {
      Judul: null,
    }
  }

  // methods: {
    
  // },
};
</script>

<style scoped>
.border-color-pink {
  border: solid 2px pink;
}
.bg-color-pink {
  background-color: pink;
}
</style>
