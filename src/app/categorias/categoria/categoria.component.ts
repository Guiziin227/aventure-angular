import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-categoria",
  standalone: false,
  templateUrl: "./categoria.component.html",
  styleUrl: "./categoria.component.scss",
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor() {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required),
    });
  }

  save() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      console.log("Formulário enviado com sucesso!", this.camposForm.value);
    }
  }

  isInvalidField(nomeCampo: string): boolean {
    const field = this.camposForm.get(nomeCampo);
    return field?.invalid && field?.touched && field?.errors?.["required"];
  }
}
