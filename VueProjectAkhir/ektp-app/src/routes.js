import registerPage from "./pages/Register.vue";
import homePage from "./pages/Home.vue";
import tambahkkPage from "./pages/TambahKK.vue";
import detaikKKPage from "./pages/DetailKK.vue";


export default[
    {
        path: "/",
        component: registerPage,
        name:['Selamat Datang', 'Daftar']
    },
    {
        path: "/home",
        component: homePage,
        name: 'Homepage'
    },
    {
        path: "/addKK",
        component: tambahkkPage,
        name: 'Tambah Kartu Keluarga'
    },
    {
        path: `/detail/:id`,
        component: detaikKKPage,
        name: 'Detail Kartu Keluarga'
    },
]