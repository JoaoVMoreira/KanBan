package com.JoaoMoreira.KanBan.Models.Fila;

public record DadosListarFila(Long id, String nomeFila) {
    public DadosListarFila(Fila fila){
        this(fila.getId(), fila.getNomeFila());
    }
}
