package com.JoaoMoreira.KanBan.Models.Colaborador;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastraColaborador(
        @NotBlank
        String nome,
        @NotNull
        String cpf
) {
}
