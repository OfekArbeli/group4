
var allUsers = [];
function createUser(userName,password,age){
    if(allUsers.every(item => {return item.userName !== userName}))
    {
        allUsers.push(new User (userName,password,age));
        return "User created"; 
    }
    else
    {
        return "User already exist";
    }
}

function deleteUser(userName){
    indexOfUser = allUsers.findIndex(item => {return item.userName === userName});
    if(indexOfUser>-1)
    {
        allUsers.splice(indexOfUser,1);
        return "User removed"; 
    }
    else
    {
        return "User doesn't exist";
    }
}

function getUsers(){
    var result =[];
    allUsers.forEach(item => {result.push(item.userName)});
    return result;
}

function User(userName,password,age)
{
    this.userName = userName;
    this.password = password;
    this.age = age;
}

User.prototype.updatePassword = function(newPassword){this.password=newPassword};
User.prototype.setAge = function(newAge){this.age=newAge};

// function Groups(groupName)
// {
//     this.groupName = groupName;
//     this.users = [];
//     this.addUser = function(userProfile){
//         for(var i=0;i<users.length;i++)
//         {
//             if(userProfile.userName==this.users[i].userName)
//                 return "User is already in this group";
//         }
//         this.users.push(userProfile);
//         return "User has been added to the group";
//     };
//     this.removeUser = function(){
//         for(var i=0;i<users.length;i++)
//         {
//             if(userProfile.userName==this.users[i])
//             {
//                 this.users.splice(i,1);
//                 return "User has been removed from the group"
//             }
//         }
//         return "User wasn't in the group";
//     };
//     this.getUserAndGroup = function(){
//         var usersAndGroups = [groupName,users];
//         return usersAndGroups;
//     };
// }

var x = createUser("ofek","2222",28);
var b = createUser("Moshe","2222",28);
var z = deleteUser("ofek");
var y = createUser("ofek","2222",28);
console.log(x);
console.log(z);
console.log(y);
console.log(getUsers());

