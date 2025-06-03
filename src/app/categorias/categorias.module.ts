import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { CategoriaComponent } from "./categoria/categoria.component";
import { CategoriasRoutingModule } from "./categorias-routing.module";

@NgModule({
  declarations: [CategoriaComponent],
  imports: [CommonModule, CategoriasRoutingModule, ReactiveFormsModule],
})
export class CategoriasModule {}
