import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBookComponent } from './components/card-book/card-book.component';
import { TrimPipe } from './pipes/trim.pipe';
import { RoutesHelperService } from './routes-helper/routes-helper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CardBookComponent, TrimPipe ],
  providers: [RoutesHelperService],
  exports: [ CommonModule, CardBookComponent, TrimPipe ]
})
export class SharedModule { }
