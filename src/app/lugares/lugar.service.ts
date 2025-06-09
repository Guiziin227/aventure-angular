import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Lugar } from "./lugar";

@Injectable({
  providedIn: "root",
})
export class LugarService {
  constructor(private http: HttpClient) {}

  save(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>("http://localhost:3000/lugares", lugar);
  }

  getAll(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>("http://localhost:3000/lugares");
  }

  filterByNomeOrCategoria(
    nome: string,
    categoria: string
  ): Observable<Lugar[]> {
    let parametros = new HttpParams();

    if (nome) {
      parametros = parametros.set("nome_like", nome);
    }

    if (categoria) {
      parametros = parametros.set("categoria", categoria);
    }

    console.log(parametros.toString());

    return this.http.get<Lugar[]>("http://localhost:3000/lugares", {
      params: parametros,
    });
  }
}
