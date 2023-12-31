package com.JoaoMoreira.KanBan.Models.Colaborador;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;

public record DadosListarColaborador(Long id, String nome, String cpf) {
    public DadosListarColaborador(Colaborador colaborador){
        this(colaborador.getId(), colaborador.getNome(), colaborador.getCpf());
    }
}
