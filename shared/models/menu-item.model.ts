export interface MenuItem {
    _id?: string;
    name: string;
    description?: string;
    icon?: string;
    link?: string;
    subItems?: MenuItem[];
}