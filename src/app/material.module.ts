import {NgModule} from '@angular/core';

// Modulos de Material
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
    exports: [
      MatSliderModule,
      MatCardModule,
      MatInputModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule
    ]
  })

export class MaterialModule {}
