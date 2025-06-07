import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "./categoria";
@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  save(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      "http://localhost:3000/categorias",
      categoria
    );
  }

  //retorna um array de categorias
  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>("http://localhost:3000/categorias");
  }
}
