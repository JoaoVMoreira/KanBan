package com.JoaoMoreira.KanBan.Models.Tarefa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
    @Query(
            value = "SELECT * FROM TAREFAS WHERE FILA_ID = :filaId",
            nativeQuery = true
    )
    List<Tarefa> BuscarPorFila(Long filaId);
}
