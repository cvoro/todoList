import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

// import {}

@Injectable()
export class UserService{

    constructor(private http: Http){}

    getAll(){
        return this.http.get('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/korisnikoveListe',this.jwt())
        .map((response: Response)=> response.json())
    }

    deleteUser(id){
        return this.http.delete('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/itemizListe/'+id, this.jwt())
        .map((response: Response) => response.json());
    }
    update(user) {
        return this.http.put('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/izmenaListe',user, this.jwt()).map((response: Response) => response.json());
    }
    addUser(user1) {
        return this.http.post('http://192.168.0.23:8111/todolist-0.0.1-SNAPSHOT/api/dodavanjeListe' ,user1, this.jwt()).map((response: Response) => response.json());
    }

    
    private jwt(){
        let id_token = localStorage.getItem('id_token');
        if(id_token){
            let headers = new Headers({'Authorization':  id_token});
            return new RequestOptions({headers: headers});
        }
    }
}