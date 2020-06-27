import {NgModule} from '@angular/core';

// Modulos de Material
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    exports: [
      MatSliderModule,
      MatCardModule,
      MatInputModule,
      MatIconModule
    ]
  })

export class MaterialModule {}
