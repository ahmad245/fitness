import { Injectable } from '@angular/core';

@Injectable()
export class ServerServiceService {
servers=[{id:1,name:'ahmad1',status:'runing'},{id:2,name:'ahmad2',status:'stoped'},{id:3,name:'ahmad3',status:'runing'}]
  constructor() { }
  getServers()
  {
    return this.servers;
  }
getServerById(id:number)
{
 return this.servers.find(a=>a.id===id);
}
updateServer(id:number,server:{name:string,status:string})
{
const serve=this.servers.find(a=>a.id===id);
if(serve)
{
  serve.name=server.name;
  serve.status=server.status;
}
}
}
