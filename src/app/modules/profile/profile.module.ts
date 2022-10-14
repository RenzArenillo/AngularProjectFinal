import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { RouterModule } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [ProfileItemComponent, ProfileFormComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatChipsModule, MatFormFieldModule, MatIconModule
  ],
})
export class ProfileModule {}
