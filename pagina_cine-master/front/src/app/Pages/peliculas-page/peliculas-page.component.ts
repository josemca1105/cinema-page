import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-peliculas-page',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './peliculas-page.component.html',
  styleUrl: './peliculas-page.component.css'
})
export class PeliculasPageComponent {
  p: number = 1;

  imagen: string = '';
  nombre: string = '';
  descripcion: string = '';
  duracion: string = '';
  genero: string = '';
  estreno: string = '';

  currentPeliculaID = '';
  peliculaArray: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllPelicula();
  }

  getAllPelicula() {
    this.http.get("http://127.0.0.1:8000/api/peliculas").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.peliculaArray = resultData;
    });
  }

  getImageUrl(id: number): string {
    return `http://127.0.0.1:8000/api/imagen/${id}`;
  }

  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:8000/api/peliculas/delete" + "/" + data.id).subscribe((resultData: any) => {
        // console.log(resultData);
        alert("Pelicula Eliminado")
        this.getAllPelicula();
    });
  }

  generatePDF() {
    const margins = {
      top: 30,
      bottom: 30,
      left: 10,
      right: 10
    };

    const doc = new jsPDF();
    doc.setFont('Times');
    doc.setFontSize(18);
    doc.text('Pruebaaaa', margins.left, margins.top);

    doc.setFontSize(12);
    doc.text('texto de pruebaaaa', margins.left, 50);

    doc.addImage(
      '../../../assets/1/john01.jpg',
      margins.left,
      70,
      20,
      30
    );

    doc.save('peliculas.pdf'); // Guardar PDF
  }
}
