package com.JoaoMoreira.KanBan.Models.Tarefa;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record DadosListarTarefa(Long id, String nomeTarefa, Colaborador colaboradorId, LocalDate dataLimite, Urgencia urgencia, String descricao, Fila filaId, LocalDateTime dataCriacao) {
    public DadosListarTarefa(Tarefa tarefa){
        this(tarefa.getId(), tarefa.getNomeTarefa(), tarefa.getColaborador(), tarefa.getDataLimite(), tarefa.getUrgencia(), tarefa.getDescricao(), tarefa.getFilaAtual(), tarefa.getDataCriacao());
    }
}
