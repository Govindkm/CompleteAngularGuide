import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepting the request: ', req);
        //Adding a auth key to the request object(check the network tab to see the added header auth)
        const modifiedReq = req.clone({headers:req.headers.append('auth', 'key')});
        console.log('Modified header in new request: ', modifiedReq);
        return next.handle(modifiedReq).pipe(tap(event=>{
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log('Response Recieved: ', event);
            }
        }))
    }
}