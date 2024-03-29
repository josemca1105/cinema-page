import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './peliculas-create.component.html',
  styleUrl: './peliculas-create.component.css'
})
export class PeliculasCreateComponent {

  imagen: any;

  nombre: string = '';
  descripcion: string = '';
  duracion: string = '';
  genero: string = '';
  estreno: string = '';

  peliculasArray: any[] = [];

  currentPeliculaID = '';

  uploadedFileName: string [] = [];

  today = new Date().toISOString().split('T')[0];

  constructor(private http: HttpClient, private router: Router) {
    this.getAllPelicula();
  }

  getAllPelicula() {
    this.http.get('http://127.0.0.1:8000/api/peliculas').subscribe((resultData: any) => {
      this.peliculasArray = resultData;
    });
  }

  register() {
    var formData = new FormData();
    formData.append('imagen', this.imagen, this.imagen.name);
    formData.append('nombre', this.nombre);
    formData.append('descripcion', this.descripcion);
    formData.append('duracion', this.duracion);
    formData.append('genero', this.genero);
    formData.append('estreno', this.estreno);

    this.http.post('http://127.0.0.1:8000/api/peliculas/create', formData).subscribe((resultData: any) => {
      alert('Pelicula creada con exito!');
      this.getAllPelicula();
      this.nombre = '';
      this.descripcion = '';
      this.duracion = '';
      this.genero = '';
      this.estreno = '';
      this.imagen = '';
      this.router.navigateByUrl('peliculas');
    });
  }

  uploadImage(event: any) {
    // console.log(event);
    this.imagen = event.target.files[0];
    console.log(this.imagen);
  }

  savePelicula() {
    if (this.imagen && this.currentPeliculaID == '') {
      const fileExtension = this.imagen.name.split('.').pop().toLowerCase();
      const validExtensions = ['jpg', 'jpeg', 'png'];
      if (validExtensions.includes(fileExtension)) {
        this.register();
      } else {
        alert('Por favor seleccione una imagen valida. Las extensiones validas son .jpg, .jpeg, .png');
      }
    } if (this.nombre == '' || this.descripcion == '' || this.duracion == '' || this.genero == '' || this.estreno == '') {
      alert('Por favor complete todos los campos');
    }
  }
}
