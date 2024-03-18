import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, NgModel } from '@angular/forms';

interface Movie {
  id: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  duracion: string;
  genero: string;
  estreno: string;
}

interface Column {
  field: string;
  header: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-peliculas-page',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './peliculas-page.component.html',
  styleUrl: './peliculas-page.component.css',
})
export class PeliculasPageComponent implements OnInit {
  p: number = 1;

  imagen: string = '';
  nombre: string = '';
  descripcion: string = '';
  duracion: string = '';
  genero: string = '';
  estreno: string = '';

  currentPeliculaID = '';
  peliculaArray: any[] = [];

  movies: Movie[] = [];
  cols!: Column[];
  exportColumns!: ExportColumn[];

  filtroGenero: string = '';

  constructor(private http: HttpClient) {
    this.getAllPelicula();
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'imagen', header: 'Imagen' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'descripcion', header: 'Descripcion' },
      { field: 'duracion', header: 'Duracion' },
      { field: 'genero', header: 'Genero' },
      { field: 'estreno', header: 'Estreno' },
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  };

  getAllPelicula() {
    this.http.get("http://127.0.0.1:8000/api/peliculas").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.peliculaArray = resultData;
        this.movies = resultData;
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
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        doc.setFontSize(20);
        doc.text('Listado de Peliculas', 20, 20);
        (doc as any).autoTable(
          this.exportColumns,
          this.movies
        );
        doc.save('peliculas.pdf');
      })
    })
  }
}
