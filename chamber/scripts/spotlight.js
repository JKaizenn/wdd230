async function loadSpotlights() {
    try {
        const response = await fetch('data/members.json'); // Replace with the correct path
        const members = await response.json();

        // Filter members by membership level (Silver or Gold)
        const spotlightMembers = members.filter(member =>
            member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold'
        );

        // Randomly select 3 members from the filtered list
        const selectedMembers = getRandomMembers(spotlightMembers, 3); // Set the count to 3

        // Get the spotlight container
        const spotlightContainer = document.getElementById('spotlightContainer');
        spotlightContainer.innerHTML = ''; // Clear existing spotlight content

        // Display selected members in the spotlight section
        selectedMembers.forEach(member => {
            const spotlightDiv = document.createElement('div');
            spotlightDiv.classList.add('spotlight');
            spotlightDiv.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.additionalInfo}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(spotlightDiv);
        });
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

// Utility function to get random members
function getRandomMembers(members, count) {
    let shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

loadSpotlights();
