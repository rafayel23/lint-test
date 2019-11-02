import { Component } from '@angular/core';

@Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
})
export class AppComponent {
        title = 'linting';

        x = 3;

        f() {
                if (x) {
                        return 10;
                }
        }
}
