import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
  
  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'image', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        console.log(data);
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
