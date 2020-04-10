import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public pageTitle = 'Product Detail';
  product: Product;
  private errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(+id);
    }
  }

  private getProduct(id: number) {
    this.productService.getProducts().subscribe(
      products =>
        (this.product = products.find(product => product.productId === id)),
      err => (this.errorMessage = err)
    );
  }

  public onBack(): void {
    this.router.navigate(['/products']);
  }
}
