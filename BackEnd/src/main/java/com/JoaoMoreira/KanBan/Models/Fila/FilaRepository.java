package com.JoaoMoreira.KanBan.Models.Fila;

import com.JoaoMoreira.KanBan.Models.Tarefa.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FilaRepository extends JpaRepository<Fila, Long> {
    @Query(
            value = "SELECT * FROM FILAS WHERE PROJETO_ID = :projetoId",
            nativeQuery = true
    )
    List<Fila> BuscarPorProjeto(Long projetoId);
}
