// import functions and grab DOM elements
import { getRetainers } from './fetch-utils.js';
import { renderRetainerCard } from './render-utils.js'; 
// let state
const retainerListContainer = document.getElementById('retainer-list-container');
// set event listeners 

window.addEventListener('load', async () => {
    const retainers = await getRetainers();

    for (let retainer of retainers) {
        const retainerEl = renderRetainerCard(retainer);
        retainerListContainer.append(retainerEl);
    }
});

