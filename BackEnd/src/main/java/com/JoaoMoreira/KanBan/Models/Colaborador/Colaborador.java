package com.JoaoMoreira.KanBan.Models.Colaborador;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "func")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Colaborador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    @Column(unique = true)
    private Long cpf;

    public Colaborador(DadosCadastraColaborador dados) {
        this.cpf = dados.cpf();
        this.nome = dados.nome();
    }
}
