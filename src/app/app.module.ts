import { AuthInterceptor } from './sheard/AuthInterceptor';
import { shoppingModule } from './shopping-list/shopping.module';
// import { recipeModule } from './recipes/recipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
// import{Routes,RouterModule}from '@angular/router';



import { AppComponent } from './app.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { styleBackground } from './Directive/styleBackground.directive';
import { BetterStyleChangeDirective } from './Directive/better-style-change.directive';
import { DirectiveStrucStructuralUnlessDirective } from './Directive/directive-struc-structural-unless.directive';
import { ToggleDropdwonDirective } from './Directive/toggle-dropdwon.directive';
import { RecipesService } from './services/recipes.service';
import { ShoppingListService } from './services/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerServiceService } from './servers/server-service.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthServiceService } from './auth/auth-service.service';
import { CanDeactivatGardService } from './servers/edit-server/can-deactivat-gard.service';
import { NotFoundComponent } from './Not-Found/not-found/not-found.component';
import { ErrorPageComponent } from './Not-Found/error-page/error-page.component';
import { ResolveService } from './servers/server/resolve.service';
import { AppRoutingModule } from './app-route.module';
// import { RecepieStrartComponent } from './recipes/recepie-strart/recepie-strart.component';
// import { RecepieEditComponent } from './recipes/recepie-edit/recepie-edit.component';
import {shrtenPipe} from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpServiceService } from './services/http-service.service';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { HomeRecipeComponent } from './home-recipe/home-recipe.component';
import { responseInterceptr } from './sheard/afterSendRequstIntercepter';

// const route:Routes=
// [
//   {path:'home',component:HomeComponent},
//   {path:'',component:HomeComponent},

// {path:'servers',component:ServersComponent,canActivate:[AuthGuardService],children:
//   [{path:':id',component:ServerComponent,resolve:{data:ResolveService}},
//     {path:':id/:edit',component:EditServerComponent ,canDeactivate:[CanDeactivatGardService]}]},

// {path:'users',component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
// {path:'not-found',component:ErrorPageComponent,data:{message:'This Page Not Found'}},
// {path:'**',redirectTo:'/not-found'},
// ]



@NgModule({
  declarations: [
    AppComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeDetailComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    HeaderComponent,
    styleBackground,
    BetterStyleChangeDirective,
    DirectiveStrucStructuralUnlessDirective,
    ToggleDropdwonDirective,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    ServerComponent,
    UserComponent,
    EditServerComponent,
    NotFoundComponent,
    ErrorPageComponent,
    // RecepieStrartComponent,
    // RecepieEditComponent,
    // shrtenPipe,
    FilterPipe,
    HomeRecipeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ReactiveFormsModule,
     NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // recipeModule,
    shoppingModule,
    // RouterModule.forRoot(route)
  ],
  providers: [
    RecipesService, ShoppingListService, ServerServiceService,
    AuthServiceService, AuthGuardService, CanDeactivatGardService,
     ResolveService, HttpServiceService,
     {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
     {provide:HTTP_INTERCEPTORS,useClass:responseInterceptr,multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
