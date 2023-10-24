package com.JoaoMoreira.KanBan.Models.Fila;

import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;

public record DadosListarFila(Long id, String nomeFila, Projeto projeto) {
    public DadosListarFila(Fila fila){
        this(fila.getId(), fila.getNomeFila(), fila.getProjeto());
    }
}
