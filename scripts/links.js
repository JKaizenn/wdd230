baseurl = "https://jKaizenn.github.io/wdd230/"
const linksURL = "https://Jkaizenn.github.io/wdd230/data/links.json";


async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

getLinks();

function displayLinks(data) {
    const linksContainer = document.getElementById('links');
    let linksHTML = '';
    data.forEach(link => {
        linksHTML += `
            <h2>${link.title}</h2>
            <p>${link.description}</p>
            <a href="${link.url}" target="_blank">${link.url}</a>
        `;
    });
    linksContainer.innerHTML = linksHTML;
}