document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded, starting fetch");
    fetch('/data/members.json')
        .then(response => {
            console.log("JSON fetched successfully");
            return response.json();
        })
        .then(data => {
            console.log("Data received: ", data);
            const membersContainer = document.getElementById('members-container');
            let gridView = true;

            function displayMembers() {
                console.log("Displaying members");
                membersContainer.innerHTML = '';  // Clear previous content
                data.forEach(member => {
                    let memberElement = document.createElement('div');
                    memberElement.className = gridView ? 'card' : 'list-item';

                    memberElement.innerHTML = `
                        <img src="../images/${member.icon}" alt="${member.name} Logo" class="member-logo">
                        <h2>${member.name}</h2>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p>Membership Level: ${member.membershipLevel}</p>
                        <p>${member.additionalInfo}</p>
                    `;
                    membersContainer.appendChild(memberElement);
                });
            }

            document.getElementById('grid-view').addEventListener('click', () => {
                gridView = true;
                membersContainer.className = 'grid-view';
                displayMembers();
            });

            document.getElementById('list-view').addEventListener('click', () => {
                gridView = false;
                membersContainer.className = 'list-view';
                displayMembers();
            });

            displayMembers();  // Initial display
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
});
e