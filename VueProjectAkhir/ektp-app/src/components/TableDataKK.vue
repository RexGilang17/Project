<template>
  <div class="tableKK">
    <div class="d-flex Card">
      <div class="card bg-warning jlmh-kk mr-5">
        <div class="card-body">
          <div>
            <span>Jumlah Kartu Keluarga</span>
            <div class="img-card">
              <p>
                <img src="@/assets/img/card-checklist.svg" alt="" /> {{ kkData.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card bg-primary jlmh-seluruh-warga">
        <div class="card-body">
          <div>
            <span>Jumlah Seluruh Warga</span>
            <div class="img-card">
              <p><img src="@/assets/img/people-fill.svg" alt="" />10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-center my-5">Data Kartu Keluarga</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Nomor KK</th>
          <th scope="col">Alamat</th>
          <th scope="col">Kota</th>
          <th scope="col">Kode Pos</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kkData" :key="index">
          <td>{{ index+1 }}.</td>
          <td>{{ item.nomor_kk }}</td>
          <td>{{ item.alamat }}</td>
          <td>{{ item.kabupaten_kota }}.</td>
          <td>{{ item.kode_pos }}</td>
          <td class="d-flex">
            <router-link :to="{path: '/detail/' + item.id}">
              <button class="btn btn-sm btn-primary mr-2 text-white">
                Detail
              </button>
            </router-link>
            <button class="btn btn-sm btn-danger mr-2" @click="deleteKkFunc(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import kkService from "@/service/kkService.js";
export default {
  name: "tableDataKK",

  data() {
    return {
      kkData: null,
    };
  },
  methods: {
    getKk() {
      kkService
        .getAll()
        .then((response) => {
          this.kkData = response.data;
          console.log(this.kkData);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteKkFunc(id){
              if (confirm("Are You Sure Want to Delete?")) {
                  kkService.deleteKk(id)
                  .then(response=> {
                      console.log(response.data);
                      location.reload();
                    // this.success= true;
                  })
                  .catch(e=>{
                      console.log(e);
                  });
  
              }else{
                  alert("Hapus dibatalkan!")
              }
          }
  },
  mounted() {
    this.getKk()
    }
  
};
</script>

<style scoped>
/* .tableKK {
  margin-left: 300px;
} */

.Card {
  margin-top: 80px;
  /* margin-left: 300px; */
}
.card {
  width: 40%;
}
.img-card {
  font-size: 60px;
  text-align: center;
}
img {
  width: 20%;
  margin-right: 10px;
}
.card-body {
  font-size: 30px;
}
/* .jlmh-kk {
  width: 200px;
} */
</style>
