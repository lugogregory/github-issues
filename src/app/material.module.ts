import {NgModule} from '@angular/core';

// Modulos de Material
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    exports: [
      MatSliderModule,
      MatCardModule
    ]
  })

export class MaterialModule {}
