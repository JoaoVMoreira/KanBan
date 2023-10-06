package com.JoaoMoreira.KanBan.Models.Tarefa;

import jakarta.validation.constraints.NotNull;

public record DadosAlterarFila(
        @NotNull
        Long filaId
) {
}
