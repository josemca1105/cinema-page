import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Seat {
  selected: boolean;
  occupied: boolean;
}

interface SeatRow {
  row: string;
  seats: Seat[];
}

@Component({
  selector: 'app-sala-1',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './sala-1.component.html',
  styleUrl: './sala-1.component.css'
})
export class Sala1Component {

  selectedMovieIndex = 0;
  selectedSeats: { row: string; seat: Seat }[] = [];;

  movies = [
    {
      movieName: 'John Wick',
      ticketRate: '5',
      movieBannerImage: '../../../assets/1/h.jpeg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8},
      ]
    },
    {
      movieName: 'Interestelar',
      ticketRate: '5',
      movieBannerImage: '../../../assets/2/wallpaper.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8},
      ]
    },
    {
      movieName: 'Avengers: Infinity War',
      ticketRate: '5',
      movieBannerImage: '../../../assets/3/igi.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8},
      ]
    },
    {
      movieName: 'El Exorcista',
      ticketRate: '5',
      movieBannerImage: '../../../assets/4/the-exorcist-0.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8},
      ]
    },
    {
      movieName: 'La La Land',
      ticketRate: '5',
      movieBannerImage: '../../../assets/5/fondo.jpg',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8},
      ]
    },
  ];

  selectSeat(seat: any, row: string) {
    if (!seat.occupied) {
      if (seat.selected) {
        this.selectedSeats = this.selectedSeats.filter(s => s.row !== row || s.seat !== seat);
      } else {
        this.selectedSeats.push({ row, seat });
      }
      seat.selected = !seat.selected;
    }
  }

  getSeats(nOfSeats: number) {
    const seats = [];
    for (let i = 0; i < nOfSeats; i++) {
      seats.push({selected: false, occupied: false});
    }
    return seats;
  }

  getTotalCost() {
    return this.selectedSeats.length * Number(this.movies[this.selectedMovieIndex].ticketRate);
  }
}
