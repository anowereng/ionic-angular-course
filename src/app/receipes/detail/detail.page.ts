import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceipeService } from 'src/app/services/receipe.service';
import { ReceipeItem } from 'src/app/_model/receipeItem';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private receipeService: ReceipeService) { }
  public loadedRecipe: ReceipeItem;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramap => {
      if (!paramap.has('recipeId')) {
        return;
      }
      const recipeid = paramap.get('recipeId');
      this.loadedRecipe = this.receipeService.getReceipe(recipeid);
    });
  }

}
