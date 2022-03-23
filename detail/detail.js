import { getRetainer } from '../fetch-utils.js';
import { renderRetainerDetail } from '../render-utils.js';

const retainerDetails = document.getElementById('retainer-detail-container');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);

    const retainerId = data.get('id');

    const retainer = await getRetainer(retainerId);

    const retainerDetailEl = renderRetainerDetail(retainer);
    retainerDetails.append(retainerDetailEl);
});