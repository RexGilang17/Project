import http from "@/http-common";

class kkService {
  create(data) {
    return http.post("/kk/insert", data);
  }

  getAll() {
    return http.get("/kk/getAll");
  }

  deleteKk(id) {
    return http.delete(`/kk/delete/${id}`);
  }

  updateKk(id, data) {
    return http.put(`/kk/update/${id}`, data);
  }
  getKk(id) {
    return http.get(`/kk/student/${id}`);
  }
}

export default new kkService();