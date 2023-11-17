package com.JoaoMoreira.KanBan.Models.Projeto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "projetos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Projeto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String nomeProjeto;

    public Projeto(DadosCadastraProjeto dados) {
        this.nomeProjeto = dados.nomeProjeto();
    }
}
