import { Component, OnInit } from '@angular/core';
import { ReceipeService } from '../services/receipe.service';
import { ReceipeItem } from '../_model/receipeItem';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {
  receipes: ReceipeItem[];
  constructor(private recipeService: ReceipeService) { }

  ngOnInit() {
     this.receipes = this.recipeService.getAllReceipes();
  }

}
