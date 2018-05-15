import { UtilsService } from './providers/utils/utils.service';
// Angular Modules
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Other Modules
import { AuthServiceModule } from '@pluritech/auth-service';
import { ServerServiceModule } from '@pluritech/server-service';
import { PaginationModule } from '@pluritech/pagination';
import { Ng2TableModule } from '@pluritech/ng2-responsive-table';
import { DialogServiceModule } from '@pluritech/dialog-service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { ToasterModule } from 'angular2-toaster';
import { NgxMaskModule } from 'ngx-mask';
import { QuillModule } from 'ngx-quill';

// Component
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';

// Parts
import { DashComponent } from './parts/dash/dash.component';

//  Pages
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';

// Router config
import { AppRoutingModule } from './app-routing.module';

// Services
import { LoginService } from './providers/login/login.service';

// Guards
import { UnauthenticatedGuard } from './guards/unauthenticated/unauthenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

// Configurations Files
import { configuration } from './configuration';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgotPasswordComponent,
    LoaderComponent,
    MainComponent,
    ContentLoaderComponent
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
    NgxMaskModule.forRoot(),
    PaginationModule,
    BootstrapModalModule,
    FileUploadModule,
    ToasterModule.forRoot(),
    QuillModule,
    Ng2TableModule,
    DialogServiceModule.forRoot()
  ],
  entryComponents: [],
  providers: [
    LoginService,
    AuthenticatedGuard,
    UnauthenticatedGuard,
    UtilsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    Object.defineProperty(applicationRef, '_rootComponents', {get: () => applicationRef['components']});
  }
}
