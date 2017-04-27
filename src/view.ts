import { autoinject } from 'aurelia-framework';
import { RoutableComponentActivate } from 'aurelia-router';

@autoinject
export class View implements RoutableComponentActivate {

    private name?: string;

    public async activate(params: { name?: string }) {
        this.name = params.name;
    }

}
