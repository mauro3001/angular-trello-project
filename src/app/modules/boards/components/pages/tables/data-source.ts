import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export class DataSourceProduct extends DataSource<Product> {

    data = new BehaviorSubject<Product[]>([]);
    originalData: Product[] = [];
    
    connect() : Observable<Product[]> {
        return this.data;
    }

    init(products: Product[]) {
        this.originalData = products;
        this.data.next(products);
    }
    
    getTotal() {
        let products = this.data.getValue();
        return Math.round(products.map((p) => p.price).reduce((price, total) => price + total, 0));
    }

    update(id: Product['id'], changes: Partial<Product>) {
        const products = this.data.getValue();
        const productIndex = products.findIndex((item) => item.id === id);
        if (productIndex !== -1) {
            products[productIndex] = 
            { ...products[productIndex], ...changes };
            this.data.next(products);
        }
    }

    find(query: string) {
        const newProducts = this.originalData.filter((product) => {
            const word = `${product.id}-${product.title}-${product.price}`;
            return word.toLowerCase().includes(query.toLowerCase())
        });
        this.data.next(newProducts);
    }

    disconnect() {}
}