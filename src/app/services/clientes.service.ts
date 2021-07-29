import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private url = environment.url;
  constructor(private http: HttpClient) { }

  consultarHU(data){
    return this.http.post(`${ this.url }/ConsultarEstadoHU/`, data);
  }

  validarProceso(data){
    return this.http.post(`${ this.url }/ValidarProceso/`, data);
  }

  ingresarIdCabezote(data){
    return this.http.post(`${ this.url }/IngresarIdCabezote/`, data);
  }

  descargarGuiasMELI(data){
    return this.http.post(`${ this.url }/IngresarIdCabezote/`, data);
  }

  consultarPanelDespacho(data): Observable<any[]>{
    return this.http.post<any[]>(`${ this.url }/PanelDespacho/`, data);
  }
}
