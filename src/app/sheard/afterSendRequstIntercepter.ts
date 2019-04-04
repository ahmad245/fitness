import { Observable } from 'rxjs/Observable';
import { HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import 'rxjs/add/operator/do';
export class responseInterceptr implements HttpInterceptor
{
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
    {
        return next.handle(req).do(event=>
            {
                console.log(event);
            })
    }
}