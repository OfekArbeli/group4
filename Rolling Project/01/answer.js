allUsers = [];


function User(userName,password,age)
{
    allUsers.forEach(item => {
        if(item.userName === this.userName)
            return "Username is already taken";
    });
    this.userName = userName;
    this.password = password;
    this.age = age;
    this.updatePassword = function(newPassword){this.password=newPassword};
    this.updateAge = function(newAge){this.age=newAge};
    allUsers.push(this)
    console.log("User has been created");
}

function Groups(groupName)
{
    this.groupName = groupName;
    this.users = [];
    this.addUser = function(userProfile){
        for(var i=0;i<users.length;i++)
        {
            if(userProfile.userName==this.users[i].userName)
                return "User is already in this group";
        }
        this.users.push(userProfile);
        return "User has been added to the group";
    };
    this.removeUser = function(){
        for(var i=0;i<users.length;i++)
        {
            if(userProfile.userName==this.users[i])
            {
                this.users.splice(i,1);
                return "User has been removed from the group"
            }
        }
        return "User wasn't in the group";
    };
    this.getUserAndGroup = function(){
        var usersAndGroups = [groupName,users];
        return usersAndGroups;
    };
}

var ofek = new User ("ofek","1111",28);
var moshe = new User ("ofek","2222",28);
console.log (moshe)
console.log(ofek);

