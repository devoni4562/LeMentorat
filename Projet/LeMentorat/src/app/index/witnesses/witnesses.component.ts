import {Component} from '@angular/core';

@Component({
  selector: 'app-index-witnesses',
  templateUrl: './witnesses.component.html',
  styleUrls: ['./witnesses.component.css']
})
export class WitnessesComponent
{
  witnesses = [
    {
      name: 'witness 1',
      img: 'assets/img/index/witness.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mollis tellus, non cursus justo. Proin maximus velit odio, consequat consectetur sem dapibus et. Phasellus vitae quam consequat, blandit ante sit amet, viverra orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in purus porta, ornare est id, pellentesque ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur ligula a volutpat pharetra.'
    },
    {
      name: 'witness 2',
      img: 'assets/img/index/witness.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mollis tellus, non cursus justo. Proin maximus velit odio, consequat consectetur sem dapibus et. Phasellus vitae quam consequat, blandit ante sit amet, viverra orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in purus porta, ornare est id, pellentesque ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur ligula a volutpat pharetra.'
    },
    {
      name: 'witness 3',
      img: 'assets/img/index/witness.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mollis tellus, non cursus justo. Proin maximus velit odio, consequat consectetur sem dapibus et. Phasellus vitae quam consequat, blandit ante sit amet, viverra orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in purus porta, ornare est id, pellentesque ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur ligula a volutpat pharetra.'
    },
    {
      name: 'witness 4',
      img: 'assets/img/index/witness.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mollis tellus, non cursus justo. Proin maximus velit odio, consequat consectetur sem dapibus et. Phasellus vitae quam consequat, blandit ante sit amet, viverra orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in purus porta, ornare est id, pellentesque ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur ligula a volutpat pharetra.'
    },
  ];

}
