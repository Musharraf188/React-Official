function Chapter1 (user){
    return user.firstName + ' ' + user.lastName
}

const user={
   firstName:"Musharrf",
   lastName :"Sayyad"
}

const elememt=(
    <h1>
        Hello,{Chapter1(user)}!
    </h1>
)
export default Chapter1;
