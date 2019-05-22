import { Injectable } from '@angular/core';
import { ReceipeItem } from '../_model/receipeItem';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {

  constructor() { }

  private receipes: ReceipeItem[] = [
    {
      id: '1',
      title: 'Chicken Biryani',
      imageUrl: '../../assets/receipe/Pic-1.jpg',
      ingredients: ['600 gm boiled basmati rice', '4 tablespoon minced mint leaves',
        '1 kilograms chicken thighs', '2 teaspoon coriander powder']
    },
    {
      id: '2',
      title: 'butternut squash',
      imageUrl: '../../assets/receipe/Pic-2.jpg',
      ingredients: ['1 cup soaked overnight chick peas', '4 tablespoon minced mint leaves',
        '2 curry leaves', '1 teaspoon garam masala powder']
    },
    {
      id: '3',
      title: 'Squash & coconut curry',
      imageUrl: '../../assets/receipe/Pic-3.jpg',
      ingredients: ['2 tbsp Madras curry paste', '1 red pepper',
        '400g can reduced-fat coconut milk', 'small bunch coriander, roughly chopped']
    }
  ];
  getAllReceipes() {
    return [...this.receipes];
  }
  getReceipe(receipeId: string) {
    return {...this.receipes.find(receipe => {
      return receipe.id === receipeId;
    })
  };
  }

}
