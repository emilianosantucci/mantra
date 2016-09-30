import { MenuItems } from '/shared/collections/menu-items.collection';
import { MenuItem } from '/shared/models/menu-item.model';

declare var faker: Faker.FakerStatic;

export function mockMenus() {
    if (MenuItems.find().fetch().length === 0) {
        faker.locale = 'it';

        for (let i = 0; i < 10; i++) {
            // FIXME: use MenuItemDataModel
            //noinspection TypeScriptValidateTypes
            MenuItems.insert(<MenuItem>{
                name: faker.lorem.words(1),
                icon: faker.random.arrayElement<string>(['explore', 'extension', 'event', 'build', 'android', 'account_balance', 'face', 'info']),
                link: faker.internet.url()
            });
        }
    }

}
