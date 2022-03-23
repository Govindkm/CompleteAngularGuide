import { Component, EventEmitter, Output } from "@angular/core";
@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent{
@Output('navItem') item: EventEmitter<Component> = new EventEmitter<Component>();
constructor(){}
navigate(event){
    console.log(event);
    this.item.emit(event);
}

}