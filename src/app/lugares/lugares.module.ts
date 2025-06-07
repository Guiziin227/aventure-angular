import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { LugarComponent } from "./lugar/lugar.component";
import { LugaresRoutingModule } from "./lugares-routing.module";

@NgModule({
  declarations: [LugarComponent],
  imports: [CommonModule, LugaresRoutingModule, ReactiveFormsModule],
})
export class LugaresModule {}
