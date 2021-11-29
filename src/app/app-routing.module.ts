import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent  } from './portal/portal.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  { path: "", component: PortalComponent },
  { path: "finished", component: FinishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
