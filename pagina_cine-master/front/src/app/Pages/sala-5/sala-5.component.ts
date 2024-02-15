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
  selector: 'app-sala-5',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './sala-5.component.html',
  styleUrl: './sala-5.component.css'
})
export class Sala5Component {

  selectedMovieIndex = 4;
  selectedSeats: { row: string; seat: Seat }[] = [];;

  movies = [
    {
      movieName: 'John Wick',
      ticketRate: '5',
      movieBannerImage: '../../../assets/1/h.jpeg',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8, occupiedSeats: [2, 4, 7]},
      ]
    },
    {
      movieName: 'Interestelar',
      ticketRate: '7',
      movieBannerImage: '../../../assets/2/wallpaper.jpg',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8, occupiedSeats: [2, 4, 7]},
      ]
    },
    {
      movieName: 'Avengers: Infinity War',
      ticketRate: '11',
      movieBannerImage: '../../../assets/3/igi.jpg',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8, occupiedSeats: [2, 4, 7]},
      ]
    },
    {
      movieName: 'El Exorcista',
      ticketRate: '9',
      movieBannerImage: '../../../assets/4/the-exorcist-0.jpg',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8, occupiedSeats: [2, 4, 7]},
      ]
    },
    {
      movieName: 'La La Land',
      ticketRate: '3',
      movieBannerImage: '../../../assets/5/fondo.jpg',
      // shows: ['09:00am - 12pm', '02:00pm - 05:00pm'],
      seatRows: [
        {row: 'A', nOfSeats: 8},
        {row: 'B', nOfSeats: 8, occupiedSeats: [1, 2, 3]},
        {row: 'C', nOfSeats: 8},
        {row: 'D', nOfSeats: 8, occupiedSeats: [2, 4, 7]},
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

  getSeats(nOfSeats: number, occupiedSeats: number[] | undefined): Seat[] {
    const seats: Seat[] = [];
    for (let i = 0; i < nOfSeats; i++) {
      const isOccupied = occupiedSeats ? occupiedSeats.includes(i + 1) : false;
      seats.push({ selected: false, occupied: isOccupied });
    }
    return seats;
  }


  getTotalCost() {
    return this.selectedSeats.length * Number(this.movies[this.selectedMovieIndex].ticketRate);
  }
}5
