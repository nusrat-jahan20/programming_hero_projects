const getEvenFriend = (array) => {
    const newFriends = [];
    
    for(let i = 0; i < array.length; i++) {
        const element = array[i];

        if(element.length % 2 == 0) {
            newFriends.push(element);
        }
        else {
            continue;
        }
    }
    return newFriends;
}

const friends = ['arjina', 'rita', 'ete','himu', 'tanny', 'marjuka', 'titi', 'nishat'];

console.log(getEvenFriend(friends));

