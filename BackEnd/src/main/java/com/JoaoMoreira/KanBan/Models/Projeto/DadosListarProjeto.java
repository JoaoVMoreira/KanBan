package com.JoaoMoreira.KanBan.Models.Projeto;

public record DadosListarProjeto(Long id, String nome) {
    public DadosListarProjeto(Projeto projeto){
        this(projeto.getId(), projeto.getNomeProjeto());
    }
}
