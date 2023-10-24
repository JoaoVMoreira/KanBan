package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Fila.DadosCadastraFila;
import com.JoaoMoreira.KanBan.Models.Fila.DadosListarFila;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Fila.FilaRepository;
import com.JoaoMoreira.KanBan.Models.Projeto.ProjetoRepository;
import com.JoaoMoreira.KanBan.Models.Tarefa.DadosListarTarefa;
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
@RequestMapping("/filas")
@CrossOrigin(origins = "*")
public class FilaController {

    @Autowired
    private FilaRepository repository;

    @Autowired
    private ProjetoRepository projetoRepository;

    @Autowired
    private TarefaRepository tarefaRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosListarFila> cadastrar(@RequestBody @Valid DadosCadastraFila dados, UriComponentsBuilder uriComponentsBuilder){
        var projeto = projetoRepository.findById(dados.projetoId()).get();
        var fila = new Fila(dados, projeto);
        repository.save(fila);
        var uri = uriComponentsBuilder.path("/fila/{id}").buildAndExpand(fila.getId()).toUri();
        return ResponseEntity.created(uri).body(new DadosListarFila(fila));
    }

    @GetMapping
    public ResponseEntity<List<DadosListarFila>> listar(){
        var filas = repository.findAll().stream().map(DadosListarFila::new).toList();
        return ResponseEntity.ok().body(filas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DadosListarFila> deletar(@PathVariable Long id){
        var tarefas = tarefaRepository.BuscarPorFila(id).stream().toList();
        if(tarefas.isEmpty()){
            var fila = repository.getReferenceById(id);
            repository.delete(fila);
            return ResponseEntity.ok().build();
        }else{
            for (Tarefa tarefa: tarefas) {
                tarefaRepository.delete(tarefa);
            }
            var fila = repository.getReferenceById(id);
            repository.delete(fila);
            return ResponseEntity.ok().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<DadosListarFila>> listarPorProjeto(@PathVariable Long id){
        var filas = repository.BuscarPorProjeto(id).stream().map(DadosListarFila::new).toList();
        return ResponseEntity.ok().body(filas);
    }
}
