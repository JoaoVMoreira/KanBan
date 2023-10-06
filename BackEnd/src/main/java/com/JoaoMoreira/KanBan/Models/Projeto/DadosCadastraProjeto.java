package com.JoaoMoreira.KanBan.Models.Projeto;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastraProjeto(
        @NotBlank
        String nomeProjeto
) {
}
