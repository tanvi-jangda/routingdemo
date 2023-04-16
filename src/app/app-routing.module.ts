import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';

const routes: Routes = [
  {path:'first',component:FirstcompComponent},
  {path:'second',component:SecondcompComponent},
  {path:'',component:FirstcompComponent}, // defualt routing
  {path:'**',component:ThirdcompComponent} //wild card routing and should be always at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
