package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Projeto.DadosCadastraProjeto;
import com.JoaoMoreira.KanBan.Models.Projeto.DadosListarProjeto;
import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;
import com.JoaoMoreira.KanBan.Models.Projeto.ProjetoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/projeto")
public class ProjetoController {

   @Autowired
   private ProjetoRepository repository;

   @PostMapping
   @Transactional
   public ResponseEntity<DadosListarProjeto> cadastrar(@RequestBody @Valid DadosCadastraProjeto dados, UriComponentsBuilder uriComponentsBuilder){
      var projeto = new Projeto(dados);
      repository.save(projeto);
      var uri = uriComponentsBuilder.path("/projeto/id").buildAndExpand(projeto.getId()).toUri();
      return ResponseEntity.created(uri).body(new DadosListarProjeto(projeto));
   }

   @GetMapping
   public ResponseEntity<List<DadosListarProjeto>> listar(){
      var projetos = repository.findAll().stream().map(DadosListarProjeto::new).toList();
      return ResponseEntity.ok().body(projetos);
   }

   @DeleteMapping("/{id}")
   public ResponseEntity<DadosListarProjeto> deletar(@PathVariable Long id){
      var projeto = repository.getReferenceById(id);
      repository.delete(projeto);
      return ResponseEntity.ok().build();
   }
}
