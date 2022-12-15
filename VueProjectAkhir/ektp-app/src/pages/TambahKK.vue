<template>
  <div class="">
    <SideBarVue></SideBarVue>
    <FormTambahKKVue></FormTambahKKVue>
  </div>
</template>

<script>
import SideBarVue from "@/components/SideBar.vue";
import FormTambahKKVue from "@/components/FormTambahKK.vue";
export default {
  name: "tambahKK",
  components: {
    SideBarVue,
    FormTambahKKVue,
  },
};
</script>

<style></style>
