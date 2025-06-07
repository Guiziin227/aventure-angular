import { HttpClient } from "@angular/common/http";
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
}
