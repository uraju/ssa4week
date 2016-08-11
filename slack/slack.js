class User
{
    constructor(id, name,pwd,avatar,channels){
         this.id = id;
         this.name = name;
         this.pwd = pwd;
         this.avatar = avatar;
         this.channels = channels;

    }  

}

class Channel {
    constructor (id,name,members,messages,avatar){
        this.id = id;
        this.name = name;
        this.members = members;
        this.message = message;
        this.avatar= avatar;
    }

}


class Message{


}
exports.User = User;
exports.Channel = Channel;
exports.Message = Message;