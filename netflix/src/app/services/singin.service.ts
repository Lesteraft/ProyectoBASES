import { Injectable } from '@angular/core';

@Injectable()
export class SinginService {
    private planUsuario: any;
    private usuario: any;
    private password: any;
    private numeroTarjeta: any;
    private fechaVencimientoTarjeta: any;
    private cvc: any;
    constructor() {
       console.log('servicio Listo');
    }
    public setPlanUsuario( planUsuario: any ) {
        this.planUsuario = planUsuario;
    }

    public getPlanUsuario() {
        return this.planUsuario;
    }

    public setUsuario( usuario: any ) {
        this.usuario = usuario;
    }

    public getUsuario() {
        return this.usuario;
    }

    public setPassword( password: any ) {
        this.password = password;
    }

    public getPassword() {
        return this.password;
    }

    public setNumeroTarjeta( numeroTarjeta: any ) {
        this.numeroTarjeta = numeroTarjeta;
    }

    public getNumeroTarjeta() {
        return this.numeroTarjeta;
    }

    public setFechaVencimientoTarjeta( fechaVecimientoTarjeta) {
        this.fechaVencimientoTarjeta = fechaVecimientoTarjeta;
    }

    public getFechaVencimientoTarjeta() {
        return this.fechaVencimientoTarjeta;
    }

    public setCvc( cvc: any) {
        this.cvc = cvc;
    }

    public getCvc() {
        return this.cvc;
    }
}
