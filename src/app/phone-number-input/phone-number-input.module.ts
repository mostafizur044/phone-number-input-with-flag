import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneNumberInputComponent } from "./phone-number-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PhoneNumberInputComponent],
  exports: [PhoneNumberInputComponent]
})
export class PhoneNumberInputModule {}
