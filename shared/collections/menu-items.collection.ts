import { MenuItem } from '/shared/models/menu-item.model';
import { MongoObservable } from 'meteor-rxjs';

export const MenuItems = new MongoObservable.Collection<MenuItem>('menu_items');
