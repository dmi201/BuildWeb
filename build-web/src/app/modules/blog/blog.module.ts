import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';

// Definirea rutelor pentru modulul Blog
const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  // aici puteți adăuga rute suplimentare pentru componentele specifice blogului
];

@NgModule({
  declarations: [
    BlogComponent,
    // aici puteți adăuga alte componente specifice blogului
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes),
    // aici puteți adăuga alte module necesare, de exemplu, FormsModule, ReactiveFormsModule etc.
  ],
  providers: [
    // aici puteți adăuga orice servicii specifice modulului Blog
  ],
})
export class BlogModule {}
