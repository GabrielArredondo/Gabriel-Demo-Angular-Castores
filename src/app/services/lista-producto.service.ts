import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaProductoService {
   headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    url="http://localhost:8080/v1/taza/"
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.url+'lista',
    { headers: this.headers})
                    .pipe( map (res => res), catchError (err => throwError(err)) );
  }

 guardar(value): Observable<any>{

    return this.http.post(this.url+'guardar', value, {headers:this.headers}
    ).pipe(map(res=>res), catchError(err=>throwError(err)));

  }
   getTaza(){
      return this.http.get(this.url+'lista',
      { headers: this.headers})
                      .pipe( map (res => res), catchError (err => throwError(err)) );
  }
  actualizarTaza(id){
    return this.http.get(this.url+'lista/'+id,
    { headers: this.headers})
                    .pipe( map (res => res), catchError (err => throwError(err)) );
}
savaActualizar(value):Observable<any>{

    return this.http.put(this.url+'actualizar', value, {headers:this.headers}
    ).pipe(map(res=>res), catchError(err=>throwError(err)));


}
  deleteTaza(id){
    return this.http.delete(this.url+'eliminar/'+id,
    { headers: this.headers})
                    .pipe( map (res => res), catchError (err => throwError(err)) );
}
}
