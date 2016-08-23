import { MenuItems } from '../../shared/collections/menu-items.collection';
import { MenuItem } from '../../shared/models/menu-item.model';

declare var faker: Faker.FakerStatic;

export function mockMenus() {
    if (MenuItems.find().count() === 0) {
        faker.locale = 'it';

        for (let i = 0; i < 10; i++) {
            // noinspection TypeScriptValidateTypes
            // FIXME: use Astronomy Model
            MenuItems.insert(<MenuItem>{
                name: faker.lorem.sentence(1),
                icon: faker.random.arrayElement<string>([ 'explore', 'extension', 'event', 'build', 'android', 'account_balance', 'face', 'info' ]),
                link: faker.internet.url()
            });
        }
    }
}
