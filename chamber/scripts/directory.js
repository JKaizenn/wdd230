document.addEventListener('DOMContentLoaded', () => {
    console.log("Document loaded, starting fetch");
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("JSON fetched successfully");
            return response.json();
        })
        .then(data => {
            console.log("Data received: ", data);
            const membersContainer = document.getElementById('members-container');
            let gridView = true;

            // Function to display the members
            function displayMembers() {
                console.log("Displaying members");
                membersContainer.innerHTML = '';  // Clear previous content
                data.forEach(member => {
                    let memberElement = document.createElement('div');
                    memberElement.className = gridView ? 'card' : 'list-item';

                    memberElement.innerHTML = `
                        <img src="images/${member.image}" alt="${member.name} Logo" class="member-logo">
                        <h2>${member.name}</h2>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                        <p>Membership Level: ${member.membershipLevel}</p>
                        <p>${member.additionalInfo || ""}</p>
                    `;
                    membersContainer.appendChild(memberElement);
                });
            }

            // Event listeners for toggling between grid and list view
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

            // Initial display
            displayMembers();
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
});
