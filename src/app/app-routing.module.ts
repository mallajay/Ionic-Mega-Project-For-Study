import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "rxjs-vs-event-api",
    loadChildren: () =>
      import("./pages/rxjs-vs-event-api/rxjs-vs-event-api.module").then(
        (m) => m.RxjsVsEventApiPageModule
      ),
  },
  {
    path: "ionic-storage",
    loadChildren: () =>
      import("./pages/ionic-storage/ionic-storage.module").then(
        (m) => m.IonicStoragePageModule
      ),
  },
  {
    path: "searchable-select",
    loadChildren: () =>
      import("./pages/searchable-select/searchable-select.module").then(
        (m) => m.SearchableSelectPageModule
      ),
  },
  {
    path: "ion-skeleton",
    loadChildren: () =>
      import("./pages/ion-skeleton/ion-skeleton.module").then(
        (m) => m.IonSkeletonPageModule
      ),
  },
  {
    path: "image",
    loadChildren: () =>
      import("./pages/zoom-image/image/image.module").then(
        (m) => m.ImagePageModule
      ),
  },
  {
    path: "image-modal",
    loadChildren: () =>
      import("./pages/zoom-image/image-modal/image-modal.module").then(
        (m) => m.ImageModalPageModule
      ),
  },
  {
    path: "reactive-form",
    loadChildren: () =>
      import("./pages/reactive-form/reactive-form.module").then(
        (m) => m.ReactiveFormPageModule
      ),
  },
  {
    path: "rating",
    loadChildren: () =>
      import("./pages/bar-rating/rating/rating.module").then(
        (m) => m.RatingPageModule
      ),
  },
  {
    path: "swiper-api",
    loadChildren: () =>
      import("./pages/swiper-api/swiper-api.module").then(
        (m) => m.SwiperApiPageModule
      ),
  },
  {
    path: "reactive-form-two",
    loadChildren: () =>
      import("./pages/reactive-form-two/reactive-form-two.module").then(
        (m) => m.ReactiveFormTwoPageModule
      ),
  },
  {
    path: "accordian",
    loadChildren: () =>
      import("./pages/accordian-list/accordian/accordian.module").then(
        (m) => m.AccordianPageModule
      ),
  },
  {
    path: "accordian",
    loadChildren: () =>
      import("./pages/accordian-list/accordian/accordian.module").then(
        (m) => m.AccordianPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
