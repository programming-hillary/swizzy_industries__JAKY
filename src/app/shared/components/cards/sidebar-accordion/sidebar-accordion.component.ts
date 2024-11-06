import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faChevronDown, faChevronRight, faMagnifyingGlassPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}]
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-sidebar-accordion',
  standalone: true,
  imports: [FontAwesomeModule, MatTreeModule, MatButtonModule, MatIconModule, MatExpansionModule],
  templateUrl: './sidebar-accordion.component.html',
  styleUrl: './sidebar-accordion.component.scss'
})
export class SidebarAccordionComponent {
  faChevronRight = faChevronRight
  faChevronDown = faChevronDown

  counts = [1,2,3,4]

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  router = inject(Router)

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  categoryBtnClicked() {
    this.router.navigate(['categories'])
  }
}
