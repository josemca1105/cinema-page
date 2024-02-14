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
        {row: 'D', nOfSeats: 8},
        {row: 'E', nOfSeats: 8},
        {row: 'F', nOfSeats: 8},
        {row: 'G', nOfSeats: 8},
        {row: 'H', nOfSeats: 10},
      ]
    },
  ];
}
