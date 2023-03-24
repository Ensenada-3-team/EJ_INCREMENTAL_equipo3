//INCREMENTAL 14

sortFriends = () => {
    friendsArr = new Array()

    do {
        newFriend = prompt('Introduce el nombre de un amigo\nPara finalizar deja el campo vacío y pulsa "Aceptar"')
        if (newFriend !== null && newFriend !== '') {
                friendsArr.push(newFriend)
        }

    } while(newFriend !== '' && newFriend !== null)

    friendsSortedAlphabetically = friendsArr.sort() 

    alert(`Tus amigos por orden alfabético:\n${friendsSortedAlphabetically.join('\n')}`)
    console.table(friendsSortedAlphabetically)
};

//sortFriends()

