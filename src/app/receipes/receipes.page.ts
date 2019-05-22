import { Component, OnInit } from '@angular/core';
import { Receipe } from '../_model/receipe';
import { ReceipeService } from '../services/receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.page.html',
  styleUrls: ['./receipes.page.scss'],
})
export class ReceipesPage implements OnInit {
  constructor(private recipeService: ReceipeService) { }

  ngOnInit() {
      this.recipeService.getAllReceipes();
  }

}
