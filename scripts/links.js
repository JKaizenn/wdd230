const baseURL = 'https://jkaizenn.github.io/wdd230/';
const linksURL = baseURL + 'data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);  // Add this line to see if the data is being fetched
        displayLinks(data.weeks);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


function displayLinks(weeks) {
    const linksContainer = document.getElementById('displayLinks');
    let linksHTML = '';

    weeks.forEach(week => {
        linksHTML += `<h3>${week.week}</h3><ul>`;
        week.links.forEach(link => {
            linksHTML += `<li><a href="${link.url}">${link.title}</a></li>`;
        });
        linksHTML += '</ul>';
    });

    linksContainer.innerHTML = linksHTML;
}

// Call the function to get links data
getLinks();
