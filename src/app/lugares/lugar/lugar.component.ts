import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Categoria } from "../../categorias/categoria";
import { CategoriaService } from "../../categorias/categoria.service";

@Component({
  selector: "app-lugar",
  standalone: false,
  templateUrl: "./lugar.component.html",
  styleUrl: "./lugar.component.scss",
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {
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
    console.log("Dados salvos: ", this.camposForm.value);
  }
}
