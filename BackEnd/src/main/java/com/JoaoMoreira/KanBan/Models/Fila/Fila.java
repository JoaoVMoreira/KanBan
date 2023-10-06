package com.JoaoMoreira.KanBan.Models.Fila;

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

    public Fila(DadosCadastraFila dados) {
        this.nomeFila = dados.nomeFila();
    }
}
