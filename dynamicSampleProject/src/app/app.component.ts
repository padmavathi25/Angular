import { Component } from '@angular/core';
import { loginFormConfig } from './auth/form/form.component';
import { IForm } from './auth/interface/form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamicSampleProject';
  loginForm = loginFormConfig as IForm;


  // constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
}
