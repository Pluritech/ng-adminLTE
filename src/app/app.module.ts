import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AuthServiceModule } from '@pluritech/auth-service';
import { ServerServiceModule } from '@pluritech/server-service';
import { Ng2MaskModule } from 'ng2-mask';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { ToasterModule } from 'angular2-toaster';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { DashComponent } from './dash/dash.component';

import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './providers/login.service';

import { UnauthenticatedGuard } from './unauthenticated.guard';
import { AuthenticatedGuard } from './authenticated.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationModule } from '@pluritech/pagination';

import { DatePipe } from '@angular/common';

import { ConfirmComponent } from './dialog-modals/confirm/confirm.component';
import { AlertComponent } from './dialog-modals/alert/alert.component';
import { PromptComponent } from './dialog-modals/prompt/prompt.component';
import { MainComponent } from './main/main.component';

import { configuration } from './configuration';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    DashComponent,
    ForgotPasswordComponent,
    LoaderComponent,
    ConfirmComponent,
    AlertComponent,
    PromptComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    AuthServiceModule.forRoot(configuration.localStorageKey),
    ServerServiceModule.forRoot(),
    ReactiveFormsModule,
    Ng2MaskModule,
    PaginationModule,
    BootstrapModalModule,
    FileUploadModule,
    ToasterModule
  ],
  entryComponents: [
    ConfirmComponent,
    AlertComponent,
    PromptComponent
  ],
  providers: [
    LoginService,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
