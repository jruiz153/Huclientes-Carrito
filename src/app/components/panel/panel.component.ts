import { Component, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { DateAdapter } from '@angular/material/core';
import { HuService } from '../../services/hu.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {
  items = this.cartService.getItems();
  forma: FormGroup;
  dataSource;
  hus = [];
  isHU = false;
  cargandoHU = false;
  mensaje = '';
  mensaje_hus = '';

  /* @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSort, { static: true }) sort: MatSort

  displayedColumns = ['Id', 'Estado','Fecha_Recol_HU','Fecha_Despa_HU','Fecha_Noved_HU','Fecha_Dispe_HU','Fec_HU','GuiasReciMeli']; //,, */

  constructor(private clienteS: ClientesService,private fb: FormBuilder, private router: Router, private dateAdapter: DateAdapter<Date>, private cartService: HuService ) { 
    this.dateAdapter.setLocale('en-GB');

    this.forma = this.fb.group({
      txtFechaIni: [''],
      txtFechaFin: [''],
    })
  }

  ngOnInit(): void {
  }

  consultarHUs(){
    var f1 ='';
    var f2 ='';

    f1 = this.forma.get('txtFechaIni').value.toJSON().slice(0, 10).split('-').reverse().join('/');
    f2 = this.forma.get('txtFechaFin').value.toJSON().slice(0, 10).split('-').reverse().join('/');

    const data = {
      "f1": f1,
      "f2": f2,
      "hu": '',
    }
    this.cargandoHU = true;
    this.mensaje = 'Cargando';

    this.clienteS.consultarPanelDespacho(data).subscribe(
      res=> {
        this.hus = res; 
        this.isHU = true;
        this.mensaje_hus = 'Se encontrarón ' + res.length + ' HUs';
        this.cargandoHU = false;
      },
      error =>{
        this.cargandoHU = false;
      }
    )
  }

  consultarRVsHU(data){
    console.log(data)
  }

  submit(){

  }

  nuevo(){
    alert("hola")
    this.router.navigate(['/panel']);
  }

  onContextMenuAction1(item: any) {
    alert(`Click on Action 1 for ${item.id}`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface Persona {
  id : number;
  name: string;
  carreras: Carrera []
}

export interface Carrera {
  id: number;
  nombre: string;
}
