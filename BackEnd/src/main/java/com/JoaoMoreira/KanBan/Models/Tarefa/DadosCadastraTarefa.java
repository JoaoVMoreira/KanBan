package com.JoaoMoreira.KanBan.Models.Tarefa;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;
import com.JoaoMoreira.KanBan.Models.Tarefa.Urgencia;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record DadosCadastraTarefa(

        @NotBlank
        String nomeTarefa,
        @NotNull
        Long colaboradorId,
        @NotNull
        LocalDate dataLimite,
        @NotNull
        Urgencia urgencia,

        String descricao,
        @NotNull
        Long filaAtual
) {
}
