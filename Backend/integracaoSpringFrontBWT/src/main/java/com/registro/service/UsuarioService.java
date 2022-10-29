package com.registro.service;

import java.util.List;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registro.model.Usuario;
import com.registro.repositories.UsuarioRepository;
import com.registro.service.exception.ObjectNotFoundException;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepo;
	
	public Usuario findById(Long id) {
		Optional<Usuario> usuario = usuarioRepo.findById(id);
		return usuario.orElseThrow(()-> new ObjectNotFoundException("Objeto com id:" + id + "não foi encontrado. Tipo :" + Usuario.class.getName()));
	}
	
	public List<Usuario> findAll() {
		return usuarioRepo.findAll();
	}
	
	public Usuario save (Usuario usuario) {
		return usuarioRepo.save(usuario);
	}
	
	public Usuario update (Usuario usuario) {
		findById(usuario.getId());
		return usuarioRepo.save(usuario);
	}
	
	public void deleteUsuario(Long id) {
		usuarioRepo.deleteById(id);
	}
	
}
