import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Categoria } from "../../categorias/categoria";

@Component({
  selector: "app-lugar",
  standalone: false,
  templateUrl: "./lugar.component.html",
  styleUrl: "./lugar.component.scss",
})
export class LugarComponent {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      categoria: new FormControl("", Validators.required),
      localizacao: new FormControl("", Validators.required),
      urlImagem: new FormControl("", Validators.required),
      avaliacao: new FormControl("", Validators.required),
    });
  }

  save() {
    console.log("Dados salvos: ", this.camposForm.value);
  }
}
