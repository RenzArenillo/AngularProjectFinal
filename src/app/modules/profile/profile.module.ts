import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { RouterModule } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileItemComponent, ProfileFormComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class ProfileModule {}
