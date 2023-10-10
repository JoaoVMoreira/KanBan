package com.JoaoMoreira.KanBan.Infra;

import jakarta.persistence.EntityNotFoundException;
import jakarta.websocket.server.ServerEndpoint;
import org.hibernate.service.spi.InjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratandoErros {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity error404 (){
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity error400(MethodArgumentNotValidException exception){

        var erros = exception.getFieldErrors();
        return ResponseEntity.badRequest().body(erros.stream().map(DadosListarErros::new).toList());
    }

    private record DadosListarErros(String campo, String erro){
        public DadosListarErros(FieldError error){
            this(error.getField(), error.getDefaultMessage());
        }
    }
}
