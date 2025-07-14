import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "../localdata/userdata";

@Component({
    selector: 'app-user',
    templateUrl: './user.html',
    styleUrl: './user.css'
})

export class User{
    // @Input() id!: number;
    // @Input() name!: string;
    // @Input() avatar!: string;
    @Input() user!: IUser;
    @Input() selected!: boolean;
    @Output() select = new EventEmitter<number>();

    onUserSelect(){
        this.select.emit(this.user.id);
    }
}