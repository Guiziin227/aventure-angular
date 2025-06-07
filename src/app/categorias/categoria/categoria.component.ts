import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria",
  standalone: false,
  templateUrl: "./categoria.component.html",
  styleUrl: "./categoria.component.scss",
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private categoriaService: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      descricao: new FormControl("", Validators.required),
    });
  }

  save() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.categoriaService.save(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log("Categoria salva com sucesso:", categoria);
          this.camposForm.reset();
        },
        error: (error) => {
          console.error("Erro ao salvar categoria:", error);
        },
      });
    }
  }

  isInvalidField(nomeCampo: string): boolean {
    const field = this.camposForm.get(nomeCampo);
    return field?.invalid && field?.touched && field?.errors?.["required"];
  }
}
