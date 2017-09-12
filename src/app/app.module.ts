// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Other Modules
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AuthServiceModule } from '@pluritech/auth-service';
import { ServerServiceModule } from '@pluritech/server-service';
import { Ng2MaskModule } from 'ng2-mask';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { ToasterModule } from 'angular2-toaster';
import { PaginationModule } from '@pluritech/pagination';
import { QuillModule } from 'ngx-quill';
import { Ng2TableModule } from '@pluritech/ng2-responsive-table';
import { DialogServiceModule } from '@pluritech/dialog-service';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { MainComponent } from './main/main.component';
import { LoaderComponent } from './loader/loader.component';

// Router config
import { AppRoutingModule } from './app-routing.module';

// Services
import { LoginService } from './providers/login.service';

// Guards
import { UnauthenticatedGuard } from './unauthenticated.guard';
import { AuthenticatedGuard } from './authenticated.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// Pipes
import { DatePipe } from '@angular/common';

// Configurations Files
import { configuration } from './configuration';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgotPasswordComponent,
    LoaderComponent,
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
    ToasterModule,
    QuillModule,
    Ng2TableModule,
    DialogServiceModule.forRoot()
  ],
  entryComponents: [],
  providers: [
    LoginService,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
