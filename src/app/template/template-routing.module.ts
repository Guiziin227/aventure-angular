import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "categorias",
        loadChildren: () =>
          import("../categorias/categorias.module").then(
            (m) => m.CategoriasModule
          ),
        pathMatch: "full",
        data: {
          title: "Categorias",
          subtitle: "Registre novas categorias",
        },
      },
      {
        path: "lugares",
        loadChildren: () =>
          import("../lugares/lugares.module").then((m) => m.LugaresModule),
        pathMatch: "full",
        data: {
          title: "Lugares",
          subtitle: "Registre novos lugares",
        },
      },
      {
        path: "galeria",
        loadChildren: () =>
          import("../galeria/galeria.module").then((m) => m.GaleriaModule),
        pathMatch: "full",
        data: {
          title: "Galeria",
          subtitle: "Veja os lugares cadastrados",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
