package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Fila.DadosListarFila;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Fila.FilaRepository;
import com.JoaoMoreira.KanBan.Models.Projeto.DadosCadastraProjeto;
import com.JoaoMoreira.KanBan.Models.Projeto.DadosListarProjeto;
import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;
import com.JoaoMoreira.KanBan.Models.Projeto.ProjetoRepository;
import com.JoaoMoreira.KanBan.Models.Tarefa.Tarefa;
import com.JoaoMoreira.KanBan.Models.Tarefa.TarefaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/projeto")
@CrossOrigin(origins = "*")
public class ProjetoController {

   @Autowired
   private ProjetoRepository repository;

   @Autowired
   private FilaRepository filaRepository;

   @Autowired
   private TarefaRepository tarefaRepository;

   @PostMapping
   @Transactional
   public ResponseEntity<DadosListarProjeto> cadastrar(@RequestBody @Valid DadosCadastraProjeto dados, UriComponentsBuilder uriComponentsBuilder){
      var projeto = new Projeto(dados);
      repository.save(projeto);

      var toDo = new Fila("To do", projeto);
      var doing = new Fila("Doing", projeto);
      var finish = new Fila("Finish", projeto);

      filaRepository.save(toDo);
      filaRepository.save(doing);
      filaRepository.save(finish);

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
      var filas = filaRepository.BuscarPorProjeto(id).stream().toList();
      if(filas.isEmpty()){
         var projeto = repository.getReferenceById(id);
         repository.delete(projeto);
         return ResponseEntity.ok().build();
      }else{
         for (Fila fila: filas) {
            var tarefas = tarefaRepository.BuscarPorFila(fila.getId()).stream().toList();
            if(tarefas.isEmpty()){
               var filaF = filaRepository.getReferenceById(fila.getId());
               filaRepository.delete(filaF);
            }else{
               for (Tarefa tarefa: tarefas) {
                  tarefaRepository.delete(tarefa);
               }
               var filaF = filaRepository.getReferenceById(fila.getId());
               filaRepository.delete(filaF);
            }
         }
         var projeto = repository.getReferenceById(id);
         repository.delete(projeto);
         return ResponseEntity.ok().build();
      }
   }

   @GetMapping("/{id}")
   public ResponseEntity<DadosListarProjeto> listarPorId(@PathVariable long id){
      var projeto = repository.getReferenceById(id);
      return ResponseEntity.ok().body(new DadosListarProjeto(projeto));
   }
}
