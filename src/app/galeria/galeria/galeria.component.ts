import { Component, OnInit } from "@angular/core";
import { Categoria } from "../../categorias/categoria";
import { CategoriaService } from "../../categorias/categoria.service";
import { Lugar } from "../../lugares/lugar";
import { LugarService } from "../../lugares/lugar.service";

@Component({
  selector: "app-galeria",
  standalone: false,

  templateUrl: "./galeria.component.html",
  styleUrl: "./galeria.component.scss",
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categorias: Categoria[] = [];

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe((c) => (this.categorias = c));
    this.lugarService.getAll().subscribe((l) => (this.lugares = l));
  }

  getTotalStars(lugar: Lugar): string {
    return (
      "&#9733;".repeat(lugar.avaliacao || 0) +
      "&#9734;".repeat(5 - (lugar.avaliacao || 0))
    );
  }
}
