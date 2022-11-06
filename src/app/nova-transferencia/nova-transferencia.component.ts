import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferencia{

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number = 1;
  quantidade: number = 1;


  transferir(){
    console.log("clicou")
    const valorEmitir = {valor: this.valor, quantidade: this.quantidade}
    this.aoTransferir.emit(valorEmitir)
  }
}
