import {  ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export const passwordMatchValidator: ValidatorFn = (control:AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passconf = control.get('passconf');

    
    if (password && passconf) {
       
      return password.value !== passconf.value ? { 'passwordmatch': true } : null;
    }
    return null;
  };