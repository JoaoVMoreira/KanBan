package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import com.JoaoMoreira.KanBan.Models.Colaborador.ColaboradorRepository;
import com.JoaoMoreira.KanBan.Models.Colaborador.DadosCadastraColaborador;
import com.JoaoMoreira.KanBan.Models.Colaborador.DadosListarColaborador;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/colaborador")
@CrossOrigin(origins = "*")
public class ColaboradorController {

    @Autowired
    private ColaboradorRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosListarColaborador> cadastrar(@RequestBody @Valid DadosCadastraColaborador dados, UriComponentsBuilder uriComponentsBuilder){
        var colaborador = new Colaborador(dados);
        repository.save(colaborador);
        var uri = uriComponentsBuilder.path("/colaborador/{id}").buildAndExpand(colaborador.getId()).toUri();
        return ResponseEntity.created(uri).body(new DadosListarColaborador(colaborador));
    }

    @GetMapping
    public ResponseEntity<List<DadosListarColaborador>> listar(){
        var colaboradores = repository.findAll().stream().map(DadosListarColaborador::new).toList();
        return ResponseEntity.ok().body(colaboradores);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<DadosListarColaborador> deletar(@PathVariable Long id){
        var colaborador = repository.getReferenceById(id);
        repository.delete(colaborador);
        return ResponseEntity.ok().build();
    }
}
