import { NgFor, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  imports: [NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './peliculas-page.component.html',
  styleUrl: './peliculas-page.component.css'
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

  // generatePDF() {
  //   const margins = {
  //     top: 30,
  //     bottom: 30,
  //     left: 10,
  //     right: 10
  //   };

  //   const doc = new jsPDF();
  //   doc.setFont('Times');
  //   doc.setFontSize(18);
  //   doc.text('Pruebaaaa', margins.left, margins.top);

  //   doc.setFontSize(12);
  //   doc.text('texto de pruebaaaa', margins.left, 50);

  //   doc.addImage(
  //     '../../../assets/1/john01.jpg',
  //     margins.left,
  //     70,
  //     20,
  //     30
  //   );

  //   doc.save('peliculas.pdf'); // Guardar PDF
  // }
  // generatePDF() {
  //   const margins = {
  //     top: 15,
  //     bottom: 15,
  //     left: 10,
  //     right: 10
  //   };

  //   const doc = new jsPDF();
  //   doc.setFont('Times');
  //   doc.setFontSize(18);
  //   doc.text('Listado de Peliculas', margins.left, margins.top);

  //   // Get all movie data, not just the current page
  //   const allPeliculaData = this.peliculaArray;

  //   // Create the table header
  //   const tableHeaders = ['Imagen', 'Nombre', 'Descripcion', 'Duracion', 'Genero', 'Estreno'];

  //   // Create the table data
  //   const tableData = allPeliculaData.map(pelicula => [
  //     this.getImageUrl(pelicula.id),
  //     pelicula.nombre,
  //     pelicula.descripcion,
  //     pelicula.duracion,
  //     pelicula.genero,
  //     pelicula.estreno
  //   ]);

  //   // Generate the PDF table
  //   autoTable(doc, {
  //     startY: 50,
  //     // head: tableHeaders,
  //     body: tableData,
  //     styles: {
  //       halign: 'left',
  //       cellPadding: 5
  //     }
  //   });

  //   doc.save('peliculas.pdf');
  // }
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
