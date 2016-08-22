import { MenuItem } from '../models/menu-item.model';

export let MenuItems = new Mongo.Collection<MenuItem>('menu_items');
