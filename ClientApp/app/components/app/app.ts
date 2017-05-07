import { PLATFORM } from 'aurelia-framework';
import { RouterConfiguration } from 'aurelia-router';

export class App {
    public configureRouter(config: RouterConfiguration) {
        config.map([
            {
                route: '',
                redirect: 'create',
            },
            {
                route: 'create',
                moduleId: PLATFORM.moduleName('./routes/edit'),
            },
            {
                name: 'edit',
                route: 'edit/:name',
                moduleId: PLATFORM.moduleName('./routes/edit'),
            },
            {
                route: 'view/:name',
                moduleId: PLATFORM.moduleName('./routes/view'),
            },
        ]);
    }
}
