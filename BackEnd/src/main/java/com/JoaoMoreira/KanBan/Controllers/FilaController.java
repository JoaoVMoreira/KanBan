package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Fila.DadosCadastraFila;
import com.JoaoMoreira.KanBan.Models.Fila.DadosListarFila;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Fila.FilaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/filas")
public class FilaController {

    @Autowired
    private FilaRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosListarFila> cadastrar(@RequestBody @Valid DadosCadastraFila dados, UriComponentsBuilder uriComponentsBuilder){
        var fila = new Fila(dados);
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
        var fila = repository.getReferenceById(id);
        return ResponseEntity.ok().build();
    }
}
