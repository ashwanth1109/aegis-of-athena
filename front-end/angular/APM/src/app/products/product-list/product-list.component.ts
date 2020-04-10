import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public pageTitle = 'Product List';
  public products: Product[];
  public imageWidth = 50;
  public imageMargin = 2;
  public showImage = false;
  public filteredProducts: Product[];

  private _listFilter: string;
  public errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = products;
        this.listFilter = 'cart';
      },
      err => (this.errorMessage = err)
    );
  }

  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  public onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
