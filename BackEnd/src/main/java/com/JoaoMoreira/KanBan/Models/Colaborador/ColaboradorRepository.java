package com.JoaoMoreira.KanBan.Models.Colaborador;

import com.JoaoMoreira.KanBan.Models.Colaborador.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {
}
