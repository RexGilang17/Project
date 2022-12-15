<template>
  <div class="">
    <SideBarVue></SideBarVue>
    <DetailKk></DetailKk>
  </div>
</template>

<script>
import SideBarVue from "@/components/SideBar.vue";
// import FormTambahKKVue from "@/components/FormTambahKK.vue";
import DetailKk from "@/components/FormDetailKk.vue";
export default {
  name: "detailKK",
  components: {
    SideBarVue,
    // FormTambahKKVue,
    DetailKk
},
};
</script>

<style></style>
