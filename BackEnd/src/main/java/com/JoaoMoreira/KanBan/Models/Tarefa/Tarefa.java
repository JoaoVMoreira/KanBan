package com.JoaoMoreira.KanBan.Models.Tarefa;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import com.JoaoMoreira.KanBan.Models.Fila.Fila;
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
    @ManyToOne
    @JoinColumn(name = "colaborador_id")
    private Colaborador colaborador;
    private LocalDate dataLimite;

    @Enumerated(EnumType.STRING)
    private Urgencia urgencia;
    private String descricao;
    @ManyToOne
    @JoinColumn(name = "fila_Id")
    private Fila filaAtual;
    private LocalDateTime dataCriacao = LocalDateTime.now();

    public Tarefa(DadosCadastraTarefa dados, Fila filaAtual, Colaborador colaboradorId) {
        this.nomeTarefa = dados.nomeTarefa();
        this.colaborador = colaboradorId;
        this.dataLimite = dados.dataLimite();
        this.urgencia = dados.urgencia();
        this.descricao = dados.descricao();
        this.filaAtual = filaAtual;
    }

    public void alteraFila(Fila fila) {
        this.filaAtual = fila;
    }
}
