package com.JoaoMoreira.KanBan.Controllers;


import com.JoaoMoreira.KanBan.Models.Colaborador.ColaboradorRepository;
import com.JoaoMoreira.KanBan.Models.Fila.FilaRepository;
import com.JoaoMoreira.KanBan.Models.Tarefa.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/tarefa")
@CrossOrigin(origins = "*")
public class TarefaController {

    @Autowired
    private TarefaRepository repository;
    @Autowired
    private FilaRepository filaRepository;
    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @PostMapping
    public ResponseEntity<DadosListarTarefa> cadastrar(@RequestBody @Valid DadosCadastraTarefa dados, UriComponentsBuilder uriComponentsBuilder){

        if(dados.dataLimite().isBefore(LocalDate.now())){
            throw new IllegalArgumentException("Data inválida");
        }

        var filaAtual = filaRepository.findById(dados.filaAtual()).get();
        var colaboradorId = colaboradorRepository.findById(dados.colaboradorId()).get();
        var tarefa = new Tarefa(dados, filaAtual, colaboradorId);
        repository.save(tarefa);
        var uri = uriComponentsBuilder.path("/tarefa/id").buildAndExpand(dados.colaboradorId()).toUri();
        return ResponseEntity.created(uri).body(new DadosListarTarefa(tarefa));
    }

    @GetMapping()
    public ResponseEntity<List<DadosListarTarefa>> listar(){
        var tarefas = repository.findAll().stream().map(DadosListarTarefa::new).toList();
        return ResponseEntity.ok().body(tarefas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity daletar(@PathVariable Long id){
        repository.delete(repository.getReferenceById(id));
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<DadosListarTarefa> alterarFila(@PathVariable Long id, @RequestBody DadosAlterarFila dados){
        var fila = filaRepository.findById(dados.filaId()).get();
        var tarefa = repository.getReferenceById(id);
        tarefa.alteraFila(fila);
        return ResponseEntity.ok(new DadosListarTarefa(tarefa));

    }


}
