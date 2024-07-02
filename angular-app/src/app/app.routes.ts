import { Routes } from "@angular/router";
import { DisplayComponent } from "./display/display.component";
import { TransDetailsComponent } from "./shared/trans-details/trans-details.component";

const routeConfigurations: Routes = [
    {
      path: '',
      component: DisplayComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: TransDetailsComponent,
      title: 'Home details',
    },
  ];

  export default routeConfigurations;
