import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

export class AuthInterceptor implements HttpInterceptor
{
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
    {
        const copyReq=req.clone();
       return next.handle(copyReq);
    }
}