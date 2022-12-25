import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'intro',
        children: [
          {
            path:'',
            loadChildren:() => import('../pages/intro/intro.module').then(m => m.IntroPageModule)
          }
        ]
      },
      {
        path:'youtube',
        children: [
          {
            path:'',
            loadChildren:() => import('../pages/youtube/youtube.module').then(m => m.YoutubePageModule)
          }
        ]
      },
      {
        path:'facebook',
        children: [
          {
            path:'',
            loadChildren:() => import('../pages/facebook/facebook.module').then(m => m.FacebookPageModule)
          }
        ]
      },
      {
        path:'twitter',
        children: [
          {
            path:'',
            loadChildren:() => import('../pages/twitter/twitter.module').then(m => m.TwitterPageModule)
          }
        ]
      },
      {
        path:'feed',
        children: [
          {
            path:'',
            loadChildren:() => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path:'',
      redirectTo:'youtube',
      pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
