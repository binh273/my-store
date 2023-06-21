import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  id = 0;
  item: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.item = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => (this.id = parseInt(data['id'], 10)));
    this.productService.getProducts().subscribe(data => {
      this.item = data.find(p => p.id === this.id) as unknown as Product;
    });
  }
}
