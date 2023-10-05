package com.JoaoMoreira.KanBan.Models.Tarefa;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "tarefas")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeTarefa;
    private Colaborador colaborador;
    private LocalDate dataLimite;
    @Enumerated(EnumType.STRING)
    private Urgencia urgencia = Urgencia.REGULAR;
    private String descricao;
    private Projeto projetoId;
    private Fila filaAtual;
    private LocalDateTime dataCriacao;
}
