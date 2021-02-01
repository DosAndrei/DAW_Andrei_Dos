import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NoteComponent } from "./note/note.component";
import { ToolsComponent } from "./tools/tools.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { FilterComponent } from "./filter/filter.component";
import { MatCardModule } from "@angular/material/card";
import { AddNoteComponent } from "./add-note/add-note.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { NoteService } from './note.service';
import { FiltersService } from './filters.service';
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: "add-note", component: AddNoteComponent },
  {
    path: "",
    component: HomeComponent,
  },
  { path: "**", redirectTo: "" },
];
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    FilterComponent,
    AddNoteComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [ NoteService, FiltersService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
