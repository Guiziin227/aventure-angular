import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Categoria } from "../../categorias/categoria";
import { CategoriaService } from "../../categorias/categoria.service";
import { LugarService } from "../lugar.service";

@Component({
  selector: "app-lugar",
  standalone: false,
  templateUrl: "./lugar.component.html",
  styleUrl: "./lugar.component.scss",
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugarService: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl("", Validators.required),
      categoria: new FormControl("", Validators.required),
      localizacao: new FormControl("", Validators.required),
      urlImagem: new FormControl("", Validators.required),
      avaliacao: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    //puxamos as categorias do serviço ao inicializar o componente
    this.categoriaService.getAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (err) => {
        console.error("Erro ao carregar categorias: ", err);
      },
    });
  }

  save() {
    if (this.camposForm.valid) {
      this.lugarService.save(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log("Lugar salvo com sucesso:", lugar);
          this.camposForm.reset();
        },
        error: (error) => {
          console.error("Erro ao salvar lugar:", error);
        },
      });
    }
  }

  isInvalidField(nomeCampo: string): boolean {
    const field = this.camposForm.get(nomeCampo);
    return field?.invalid && field?.touched && field?.errors?.["required"];
  }
}
