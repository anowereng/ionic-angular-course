import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceipeService } from 'src/app/services/receipe.service';
import { ReceipeItem } from 'src/app/_model/receipeItem';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.page.html',
  styleUrls: ['./receipes-detail.page.scss'],
})
export class ReceipesDetailPage implements OnInit {
loadedRecipe: ReceipeItem;

  constructor(private activatedRoute: ActivatedRoute, private receipeService: ReceipeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramap => {
      if (!paramap.has('recipeId')) {
        return;
      }
      const recipeid = paramap.get('recipeId');
      this.loadedRecipe = this.receipeService.getReceipe(recipeid);
    });
    // this.loadedRecipe = this.receipeService.getReceipe("2");
  }
}
