import { Component } from '@angular/core';

@Component({
  selector: 'app-sala-1',
  standalone: true,
  imports: [],
  templateUrl: './sala-1.component.html',
  styleUrl: './sala-1.component.css'
})
export class Sala1Component {
  movieList: any[] = [
    {
      movieName: 'John Wick',
      ticketRate: '5',
      movieBannerImage: '../../../assets/1/john01.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 10},
      ]
    },
    {
      movieName: 'Interestelar',
      ticketRate: '5',
      movieBannerImage: '../../../assets/2/main.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 10},
      ]
    },
    {
      movieName: 'Avengers: Infinity War',
      ticketRate: '5',
      movieBannerImage: '../../../assets/3/infi.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 10},
      ]
    },
    {
      movieName: 'El Exorcista',
      ticketRate: '5',
      movieBannerImage: '../../../assets/4/exor.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 10},
      ]
    },
    {
      movieName: 'La La Land',
      ticketRate: '5',
      movieBannerImage: '../../../assets/5/poster.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 10},
      ]
    },
  ];
}
