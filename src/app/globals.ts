import { Injectable } from "@angular/core";
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreInterface } from './shared/store';
import { Store } from '@ngrx/store';
import { LOADUSERACTION } from './shared/component/stores/chatStore/actions.action';
import { AllDataSelector } from './shared/component/stores/chatStore/selectors.selector';
import { environment } from 'src/environments/environment';
import { ProfileService } from './modules/profiles/profile/profile.service';
import { ChatServiceService } from './shared/component/chat/chat-service.service';


@Injectable({
    providedIn: 'root'
})
export class Globals {

    constructor(public store:Store<StoreInterface>,
        private profileService:ProfileService,
        private chatService: ChatServiceService,
        public authservice: AuthService,private router: Router, private http: HttpClient){}

    public week = {1:'saturday' , 2:'sunday' , 3:'monday' , 4:'tuesday' , 5: 'wednesday' , 6:'thursday' , 7:'friday'};

    public searchData;

    public isLoading$: Observable<boolean>;

    public progressBar= false;

    public Arr = Array;

    public errorMsg;

    public formData: string;

    public modalDay;

    dateTimeList = {};

    public chat = false;

    public chatUserBox = false;

    public open = false;
    
    public chatUserdata;
    public chatId;
    public chatMessages;

    openChatBox(id)
    {
        this.profileService.get_profile_api(id).subscribe(
            (data) => {
                this.chatUserdata = JSON.parse(JSON.stringify(data)).data;
            }
        );

        this.chatService.createChat(id , this.userData.user_type.user_type_name).subscribe(
            (data) => {
                console.log(data);

                this.chatId = JSON.parse(JSON.stringify(data)).data.id;
                this.chatMessages=JSON.parse(JSON.stringify(data)).data.messages;
            }
        );

        this.chatUserBox = true;
        this.open = true;
    }

    closeChatBox()
    {
        this.chatUserBox = false;
        this.open = false;
    }

    start(){
        this.progressBar = true ;
    }

    stop(){
        this.progressBar = false ;
    }

    get userData(){
        return this.authservice.userData;
    }

   
}
