export function renderRetainerCard(retainer) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('retainer-card');

    p.textContent = retainer.name;
    img.src = retainer.image;
    a.href = `./detail/?id=${retainer.id}`;

    div.append(p, img);
    a.append(div);

    return a;
}

export function renderRetainerDetail(retainer) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('h3');
    const specialEl = document.createElement('p');
    const strengthEl = document.createElement('p');
    const attackEl = document.createElement('p');
    const backgroundEl = document.createElement('p');

    div.classList.add('retainer-detail');
    
    nameEl.textContent = retainer.name;
    nameEl.classList.add('name');

    img.src = retainer.image;

    specialEl.textContent = `Specialty: ${retainer.specialty}`;
    strengthEl.textContent = `Strength: ${retainer.Strength}`;
    attackEl.textContent = `Attack: ${retainer.Attack}`;
	
    backgroundEl.textContent = retainer.Background;
    backgroundEl.classList.add('background-story');
	
    div.append(nameEl, img, specialEl, strengthEl, attackEl, backgroundEl);

    return div;
}
