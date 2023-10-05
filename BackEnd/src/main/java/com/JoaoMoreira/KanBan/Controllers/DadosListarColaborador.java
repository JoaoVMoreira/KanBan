package com.JoaoMoreira.KanBan.Controllers;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;

public record DadosListarColaborador(Long id, String nome, Long cpf) {
    public DadosListarColaborador(Colaborador colaborador){
        this(colaborador.getId(), colaborador.getNome(), colaborador.getCpf());
    }
}