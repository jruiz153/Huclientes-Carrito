import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { HuService } from '../../services/hu.service';
import { HU } from '../../models/hu.model';

@Component({
  selector: 'app-leer-hu',
  templateUrl: './leer-hu.component.html',
  styleUrls: ['./leer-hu.component.css']
})
export class LeerHuComponent implements OnInit {
  forma: FormGroup;
  cargando = false;
  errorHU = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  cargandoHU = false;
  cargandoRecogida = false;
  cargandoDespacho = false;
  cargandoNovedad = false;
  cargandoDispersion = false;

  activarAcciones = false;
  activadoRecoger = false;
  activadoDespachar = false;
  activadoNovedad = false;
  activadoDispersar = false;

  id = 0;
  tipo_mensaje = '';
  mensaje_hu = '';
  mensaje_usuario = '';
  err_Aclaracion = false;

  items = [];

  constructor(private clienteS: ClientesService, private fb: FormBuilder, private cartHU: HuService) { 
    this.forma = this.fb.group({
      txtHU: ['', Validators.required],
      txtNumPlanillarR: [''],
      txtNumPlanillarD: [''],
      txtNumPlanillarE: [''],
      txtAclaracion: [''],
      txtPlaca: [''],
      drpZona: [''],
    })

    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  consultarHU(){
    let objHU = new HU();

    const data = {
      hu: this.forma.get('txtHU').value,
    };

    this.cargandoHU = true;

    this.clienteS.consultarHU(data).subscribe( (res: any) => {

        if(res.Respuesta == "dispatched"){
          let separacion =this.forma.get('drpZona').value.split("-")

          this.cargandoHU = false;
          objHU.hu=this.forma.get('txtHU').value;
          objHU.guias = res.Guias;
          objHU.cod_zona = separacion[0];
          objHU.nom_zona = separacion[1];

          // creacion del cabezote
          var datac = {
            "cod_regional": 1,
            "cod_agencia": 37,
            "usuario": "INMELI02",
            "hu": this.forma.get('txtHU').value,
        };

        this.clienteS.ingresarIdCabezote(datac).subscribe((resID:any) =>{
          console.log(resID)
          this.items[this.items.length -1 ].id = resID;
        })
        //fin creacion cabezote

          this.cartHU.addToCart(objHU);

          this.items = this.cartHU.getItems();
          this.forma.controls.txtHU.setValue('');
          this.forma.controls.drpZona.setValue('');
        }
        else{
          this.errorHU = true;
          this.cargandoHU = false;
          this.tipo_mensaje = 'danger'
          this.mensaje_hu = 'No se encontro HU';
          this.forma.controls.txtHU.setValue('');
        }
     });
  }

  eliminarHU(index){
    this.cartHU.clearItem(index);
    alert('Eliminado'); 
  }

  cargar_t0400300(){
    this.items.forEach(function (value) {
      if (value.id == 'undefined') {
          //err = true;

      }
    });
  }

  hola(){
    alert("ola")
  }

  //submit principal
  submit(){
  }
}
