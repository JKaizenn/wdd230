function displayMembers(members) {
    const gridView = document.querySelector('.grid-view');
    const listView = document.querySelector('.list-view');

    members.forEach(member => {
        let memberCard = `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `;
        gridView.innerHTML += memberCard;
        listView.innerHTML += `<div class="member-list-item">${member.name} - ${member.phone}</div>`;
    });
}
