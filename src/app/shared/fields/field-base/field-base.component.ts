import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, WritableSignal, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'field-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './field-base.component.html',
  styleUrl: './field-base.component.scss'
})
export class FieldBaseComponent implements AfterViewInit {
  label = input.required<string>();
  id = input.required<string>();
  fGroup = input<FormGroup>();
  controlName = input<string>();
  control = input<FormControl<unknown>>();

  error: WritableSignal<string> = signal('');
  async ngAfterViewInit(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (!this.control && !this.fGroup) {
      return;
    }
    const control = this.control ? this.control() : this.fGroup!()!.get(this.controlName!()!) as FormControl;
    if (control) {
      control!.valueChanges.subscribe(() => {
        const errors = control!.errors;
        if (errors) {
          const key = Object.keys(errors)[0];
          this.error.set(errors[key] as string);
        } else {
          this.error.set('');
        }
      });
    }
  }
}
