import {Component, OnInit} from '@angular/core';
import {WitnessesService} from '../../../services/witnesses/witnesses.service';

@Component({
  selector: 'app-index-witnesses',
  templateUrl: './witnesses.component.html',
  styleUrls: ['./witnesses.component.css'],
})
export class WitnessesComponent implements OnInit
{
  witnesses: any[] = [];

  constructor(private witnessesService: WitnessesService)
  {
  }

  ngOnInit()
  {
    this.witnessesService.getWitnesses().subscribe((data: any[]) =>
    {
      this.witnesses = this.shuffle(data).slice(0, 4);
    });
  }

  shuffle(anyArray: any[]): any[]
  {
    let currentIndex = anyArray.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0)
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = anyArray[currentIndex];
      anyArray[currentIndex] = anyArray[randomIndex];
      anyArray[randomIndex] = temporaryValue;
    }

    return anyArray;
  }
}
