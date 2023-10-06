package com.JoaoMoreira.KanBan.Models.Fila;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastraFila(
        @NotBlank
        String nomeFila
) {
}
