import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule ,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule



  ],
  providers:[DashboardService]
})
export class DefaultModule { }
