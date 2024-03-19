import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  usuarioArray: any[] = [];

  currentUsuarioID = '';

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
  }

  ngOnInit(): void {

  }

  getAllUsers() {
    this.http.get('http://127.0.0.1:8000/api/usuarios').subscribe((resultData: any) => {
      this.usuarioArray = resultData;
    });
  }

  register() {
    let bodyData = {
      'email': this.email,
      'password': this.password
    };

    this.http.post('http://127.0.0.1:8000/api/login', bodyData).subscribe((resultData: any) => {
      alert('Inicio de Sesión Exitoso');
      this.getAllUsers();
      this.email = '';
      this.password = '';
      this.router.navigateByUrl('index');
    })
  }

  saveUser() {
    if (this.currentUsuarioID == '') {
      this.register();
    } if (this.email == '' && this.password == '') {
      alert('Por favor llene todos los campos');
    }
  }
}
