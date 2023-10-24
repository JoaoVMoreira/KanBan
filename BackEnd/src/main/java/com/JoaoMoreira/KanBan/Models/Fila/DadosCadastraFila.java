package com.JoaoMoreira.KanBan.Models.Fila;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastraFila(
        @NotBlank
        String nomeFila,

        @NotNull
        Long projetoId
) {
}
