import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

const material = [MatButtonModule, MatExpansionModule];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
