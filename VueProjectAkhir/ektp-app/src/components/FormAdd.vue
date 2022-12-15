<template>
    <div class="form">
      <h1 class="my-5">{{ $route.name }}</h1>
      <router-link to="/home">
        <button type="button" class="btn btn-primary m-3">Back</button>
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
          <form action="" style="border: 3px solid pink">
            <div class="d-flex">
              <div class="col-md-6 p-3">
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Nomor Kartu Keluarga</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Nomor Kartu Keluarga"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="">Alamat</label>
                  <textarea
                    class="form-control"
                    name=""
                    id=""
                    placeholder="Alamat"
                    rows="3"
                    cols="30"
                    style="width: 50%"
                  ></textarea>
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">RT</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="RT"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">RW</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="RW"
                    style="width: 50%"
                  />
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
              </div>
              <div class="col-md-6 p-3">
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Desa/Kelurahan</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Desa/Kelurahan"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kecamatan</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Kecamatan"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kabupaten/Kota</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Kabupaten/Kota"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Provinsi</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Provinsi"
                    style="width: 50%"
                  />
                </div>
                <div class="col-auto d-flex justify-content-between my-3">
                  <label for="name">Kode Pos</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Kode Pos"
                    style="width: 50%"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "formTambahKKPage",
  
    data() {
      return {
        buttonlink: this.$route.path,
      };
    },
  };
  </script>
  
  <style scoped>
  .form {
    margin-left: 300px;
  }
  </style>
  