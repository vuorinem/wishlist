import { autoinject, observable } from 'aurelia-framework';
import { RoutableComponentActivate, Router } from 'aurelia-router';

@autoinject
export class Edit implements RoutableComponentActivate {

    @observable private name?: string;

    constructor(private router: Router) {
    }

    public async activate(params: { name?: string }) {
        this.name = params.name;
    }

    private nameChanged() {
        this.router.navigateToRoute('edit', { name: this.name }, { trigger: false });
    }

}
