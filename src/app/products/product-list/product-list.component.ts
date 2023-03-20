import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';
  @Input() displayCode: boolean;
  @Input() errorMessage: string;
  @Input() products: Product[];
  @Input() selectedProduct: Product;

  @Output() displayCodeChanged = new EventEmitter<boolean>();
  @Output() initializeNewProduct = new EventEmitter<void>();
  @Output() productWasSelected = new EventEmitter<Product>();

  constructor() {}

  checkChanged() {
    this.displayCodeChanged.emit();
  }

  newProduct() {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product) {
    this.productWasSelected.emit(product);
  }
}
