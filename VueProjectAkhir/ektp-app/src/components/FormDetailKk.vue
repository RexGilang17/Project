<template>
    <div class="form">
      <h1 class="my-5">{{ $route.name }}</h1>
      <router-link to="/home">
        <button type="button" class="btn btn-primary m-3">Back</button>
      </router-link>
  
        <button type="button" class="btn btn-primary m-3"
         @click="modeEdit"
         v-if="isDisabled"
        >Update Kartu Keluarga</button>

      <router-link to="/home">
        <button type="button" class="btn btn-primary m-3">Lihat Anggota Keluarga</button>
      </router-link>
      <router-link to="/update/:id" v-show="buttonlink == '/detail/:id'">
        <button type="button" class="btn btn-primary m-3">
          Update Kartu Keluarga
        </button>
      </router-link>
      <router-link to="/home" v-show="buttonlink == '/detail/:id'">
        <button type="button" class="btn btn-primary">
          Lihat Anggota Keluarga
        </button>
      </router-link>
  
      <div class="d-flex justify-content-cemter my-5">
        <div class="col-md-10">
          <form @submit.prevent="inputKk" v-show="!success"  action="" style="border: 3px solid pink">
            <div class="d-flex">
              <div class="col-md-6 p-3">
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Nomor Kartu Keluarga</label>
                  <input
                    v-model="kkData.nomor_kk"
                    class="form-control"
                    type="number"
                    placeholder="Nomor Kartu Keluarga"
                    style="width: 50%"
                    required
                    :disabled="isDisabled"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="">Alamat</label>
                  <textarea
                  v-model="kkData.alamat"
                    class="form-control"
                    name=""
                    id=""
                    placeholder="Alamat"
                    rows="3"
                    cols="30"
                    style="width: 50%"
                    :disabled="isDisabled"
                  ></textarea>
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">RT</label>
                  <input
                   v-model="kkData.rt"
                    class="form-control"
                    type="number"
                    placeholder="RT"
                    style="width: 50%"
                    :disabled="isDisabled"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">RW</label>
                  <input
                  v-model="kkData.rw"
                    class="form-control"
                    type="number"
                    placeholder="RW"
                    style="width: 50%"
                    :disabled="isDisabled"
                  />
                </div>
              </div>
              <div class="col-md-6 p-3">
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Desa/Kelurahan</label>
                  <input
                  v-model="kkData.desa_kelurahan"
                  class="form-control"
                  type="text"
                  placeholder="Desa/Kelurahan"
                  style="width: 50%"
                  :disabled="isDisabled"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kecamatan</label>
                  <input
                  v-model="kkData.kecamatan"
                  class="form-control"
                  type="text"
                  placeholder="Kecamatan"
                    style="width: 50%"
                    :disabled="isDisabled"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kabupaten/Kota</label>
                  <input
                  v-model="kkData.kabupaten_kota"
                    class="form-control"
                    type="text"
                    placeholder="Kabupaten/Kota"
                    style="width: 50%"
                    :disabled="isDisabled"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Provinsi</label>
                  <input
                  v-model="kkData.provinsi"
                    class="form-control"
                    type="number"
                    placeholder="Provinsi"
                    style="width: 50%"
                    :disabled="isDisabled"
                    />
                  </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kode Pos</label>
                  <input
                  v-model="kkData.kode_pos"
                    class="form-control"
                    type="number"
                    placeholder="Kode Pos"
                    style="width: 50%"
                    :disabled="isDisabled"
                    />
                  </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <!-- Success Section -->
          <router-link to="/FormTambahKK" >
          <SuccessForm v-show="success"></SuccessForm>
        </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import kkService from '@/service/kkService';
  import SuccessForm from "./SuccessForm.vue"
  export default {
    name: "detail",
    components: {
      SuccessForm
    },
    data() {
      return {
        kkData:{
                alamat  : null,
                desa_kelurahan : null,
                kabupaten_kota  : null,
                kecamatan  : null,
                kode_pos  : null,
                nomor_kk  : null,
                provinsi  : null,
                rt  : null,
                rw  : null
             },
       
            //  buttonValue : "Submit",
             success : false,
             isDisabled : true,
      };
    },

 
    
    methods:{
      inputKk(){
          // console.log("hjghg")
           let data = this.kkData;
          //  if (this.buttonValue === "Submit") {
             kkService.create(data)
             .then(response => {
                 console.log(response.data);
                 this.success = true;
               }).catch(e =>{
                 console.log(e)
               });
          //  } else {
          //    kkService.updateKk(data.id, data)
          //    .then(response => {
          //        console.log(response.data);
          //        this.success = true;
          //      }).catch(e =>{
          //        console.log(e)
          //      });
          //  }
         },
         getKk() {
          let id = this.$route.params.id;
          kkService
          .getKk(id)
          .then((response) => {
            this.kkData = response.data;
           console.log(this.kkData);
          })
          .catch((e) => {
            console.log(e);
          });
           },
          updateKk() {
            let data = this.kkData;
            let id = this.$route.params.id;
            kkService
            .updateKk(id, data)
            .then((response) => {
              this.kkData = response.data;
              console.log(this.kkData);
              this.success = true;
            })
            .catch((e) => {
              console.log(e);
            });
          },
          modeEdit() {
            this.isDisabled
          }
       },

       mounted() {
      this.getKk()
      }
  };
  </script>
  
  <style scoped>
  .form {
    margin-left: 300px;
  }
  </style>
  