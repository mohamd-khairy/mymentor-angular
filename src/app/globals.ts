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
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class Globals {

    constructor(public store: Store<StoreInterface>, public db: AngularFirestore,
        private profileService: ProfileService,
        private chatService: ChatServiceService,
        public authservice: AuthService, private router: Router, private http: HttpClient,
        private toastr: ToastrService
    ) {
    }

    public week = { 1: 'saturday', 2: 'sunday', 3: 'monday', 4: 'tuesday', 5: 'wednesday', 6: 'thursday', 7: 'friday' };

    public searchData;

    public isLoading$: Observable<boolean>;

    public progressBar = false;

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
    public backendchatId;

    ChatGroupCollection: AngularFirestoreCollection;
    ChatGroupCollection2: AngularFirestoreCollection;
    NotificationCollection: AngularFirestoreCollection;
    itemCollection: AngularFirestoreCollection;

    public hatGroup: Observable<any>;
    public items: Observable<any[]>;
    public notifications: Observable<any[]>;

    public openChatTime;

    openChatBox(id) {

        this.profileService.get_profile_api(id).subscribe(
            (data) => {

                this.chatUserdata = JSON.parse(JSON.stringify(data)).data;

            }
        );

        this.chatService.createChat(id, this.userData.user_type.user_type_name).subscribe(
            (data) => {
                this.backendchatId = JSON.parse(JSON.stringify(data)).data.id;
            }
        );

        let user1 = id;
        let user2 = this.userData.id;

        this.ChatGroupCollection = this.db.collection('chat_groups',
            ref => ref.where('user1', '==', user1).where('user2', '==', user2));

        this.ChatGroupCollection2 = this.db.collection('chat_groups',
            ref => ref.where('user2', '==', user1).where('user1', '==', user2));


        this.ChatGroupCollection.snapshotChanges().subscribe(res => {
            if (res.length > 0) {
                res.map(action => {
                    this.chatId = action.payload.doc.id;
                    this.getMessages();

                });
            }
            else {
                this.ChatGroupCollection2.snapshotChanges().subscribe(res => {
                    if (res.length > 0) {
                        res.map(action => {
                            this.chatId = action.payload.doc.id;
                            this.getMessages();

                        });
                    } else {
                        this.ChatGroupCollection.add({ user1, user2 }).then(docRef => {
                            this.chatId = docRef.id;
                            this.getMessages();

                        })
                    }
                });
            }
        });

        this.openChatTime = moment(new Date()).format("MMM d, h:mm A");
        this.chatUserBox = true;
        this.open = true;
    }


    add_notification(data) {

        this.NotificationCollection = this.db.collection('notifications');
        this.NotificationCollection.add(data).then(docRef => { })
    }

    get_notifications() {
        this.NotificationCollection = this.db.collection('notifications', ref =>
            ref.where('readed', '==', false).where('user_id', '==', this.userData.id));
        this.notifications = this.NotificationCollection.valueChanges();



        this.NotificationCollection.snapshotChanges().subscribe(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                if (data.created_at == moment(new Date()).format("YYYY/MM/DD hh:mm:ss")) {
                    this.toastr.info(data.title);
                }
            });
        });

    }

    read_notification(id) {
        this.NotificationCollection = this.db.collection('notifications', ref => ref.where('id', '==', id));
        this.NotificationCollection.snapshotChanges().subscribe((res: any) => {
            let id = res[0].payload.doc.id;
            this.NotificationCollection.doc(id).update({ readed: true });
        });
    }


    getMessages() {
        this.itemCollection = this.db.collection('chats', ref => ref.orderBy('created_at', 'asc').where('chat_id', '==', this.chatId));
        this.items = this.itemCollection.valueChanges();
    }

    closeChatBox() {
        this.chatUserBox = false;
        this.open = false;
    }

    start() {
        this.progressBar = true;
    }

    stop() {
        this.progressBar = false;
    }

    get userData() {
        return this.authservice.userData;
    }

}
