package com.example.demo.service;

import java.util.List;

import com.example.demo.model.AddAnggota;
import com.example.demo.model.AddKk;

public interface IAnggotaService {
	public AddAnggota insertAddAnggota(AddAnggota addanggota);
	public List<AddAnggota> getAllAddAnggota();
	public AddAnggota updateAddAnggota(int id, AddAnggota addanggota);
	public AddAnggota deleteAddAnggota(int id);
	public AddAnggota getAnggota(int id);

	
}
