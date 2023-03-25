import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const exportedOrganisms: any = [

];

@NgModule({
  declarations: [
    ...exportedOrganisms,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...exportedOrganisms,
  ],
})
export class OrganismsModule { }
