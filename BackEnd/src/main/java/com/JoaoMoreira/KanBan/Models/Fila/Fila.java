package com.JoaoMoreira.KanBan.Models.Fila;

import com.JoaoMoreira.KanBan.Models.Projeto.Projeto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "filas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Fila {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeFila;
    @ManyToOne
    @JoinColumn(name = "projeto_Id")
    private Projeto projeto;

    public Fila(DadosCadastraFila dados, Projeto projeto) {
        this.nomeFila = dados.nomeFila();
        this.projeto = projeto;
    }

    public Fila(String nomeFila, Projeto projeto) {
        this.nomeFila = nomeFila;
        this.projeto = projeto;
    }
}
