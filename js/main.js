function mini() {
    let sidebar = document.getElementById('sidebar');
    let sub = document.getElementById('subside');
    let mini = document.getElementById('minimize');
    let main = document.getElementById('main');
    sidebar.style.cssText = 'width: 70px;';
    subside.style.display = 'none';
    mini.style.display = 'none';
    main.style.paddingLeft = '70px';
    document.getElementById('home').innerHTML = '<i class="fa-solid fa-house"></i>';
    document.getElementById('home').style.width = '17px';
    document.getElementById('table').innerHTML = '<i class="fa-solid fa-atom"></i>';
    document.getElementById('table').style.width = '17px';
    document.getElementById('info').innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    document.getElementById('info').style.width = '17px';
    document.getElementById('history').innerHTML = '<i class="fa-solid fa-landmark-dome"></i>';
    document.getElementById('history').style.width = '17px';
    document.getElementById('expand').style.display = 'flex';
}

function expand() {
    let sidebar = document.getElementById('sidebar');
    let sub = document.getElementById('subside');
    let mini = document.getElementById('minimize');
    let main = document.getElementById('main');
    sidebar.style.cssText = 'width: 230px;';
    subside.style.display = 'block';
    mini.style.display = 'flex';
    main.style.paddingLeft = '230px';
    document.getElementById('home').innerHTML = '<i class="fa-solid fa-house"></i><p style="margin: 0px; margin-left: 10px;">Home</p>';
    document.getElementById('home').style.width = '200px';
    document.getElementById('table').innerHTML = '<i class="fa-solid fa-atom"></i><p style="margin: 0px; margin-left: 10px;">Periodic Table</p>';
    document.getElementById('table').style.width = '200px';
    document.getElementById('info').innerHTML = '<i class="fa-solid fa-circle-info"></i><p style="margin: 0px; margin-left: 10px;">Info</p>';
    document.getElementById('info').style.width = '200px';
    document.getElementById('history').innerHTML = '<i class="fa-solid fa-landmark-dome"></i><p style="margin: 0px; margin-left: 10px;">History</p>';
    document.getElementById('history').style.width = '200px';
    document.getElementById('expand').style.display = 'none';
}

async function index(num) {
    const request = new Request('https://raw.githubusercontent.com/Raidlucky/Atomics/main/PeriodicTableJSON.json');
    const response = await fetch(request);
    const elements = await response.json();
    insertJson(elements, num);
    eleTheme(elements, num);
    nullCheck(elements, num);
    if (window.screen.width > 1670) {
        main.style.paddingRight = '330px';
    }
}

function insertJson(data, index) {
    index = index-1;
    document.getElementById('element').innerHTML = data["elements"][index]["name"].replace(/["]/g, '');
    document.getElementById('elementH').innerHTML = data["elements"][index]["name"].replace(/["]/g, '');
    document.getElementById('category').innerHTML = `Atomic Group: ${data["elements"][index]["category"].replace(/["]/g, '')}`;
    document.getElementById('summary').innerHTML = data["elements"][index]["summary"].replace(/["]/g, '');
    document.getElementById('atomicNum').innerHTML = `Atomic Number: ${data["elements"][index]["number"]}`;
    document.getElementById('aNum').innerHTML = data["elements"][index]["number"];
    document.getElementById('symbol').innerHTML = `Atomic Symbol: ${data["elements"][index]["symbol"].replace(/["]/g, '')}`;
    document.getElementById('protons').innerHTML = `Protons: ${data["elements"][index]["number"]}`;
    document.getElementById('neutrons').innerHTML = `Neutrons: ${Math.round((data["elements"][index]["atomic_mass"])-(data["elements"][index]["number"]))}`;
    document.getElementById('electrons').innerHTML = `Electrons: ${data["elements"][index]["number"]}`;
    document.getElementById('sym').innerHTML = data["elements"][index]["symbol"].replace(/["]/g, '');
    document.getElementById('atomicMass').innerHTML = `Mass: ${data["elements"][index]["atomic_mass"]}`;
    document.getElementById('aM').innerHTML = Math.round((data["elements"][index]["atomic_mass"])*100)/100;
    document.getElementById('discoverer').innerHTML = `Discovered by ${data["elements"][index]["discovered_by"].replace(/["]/g, '')}`;
    document.getElementById('source').href = data["elements"][index]["source"].replace(/["]/g, '');
    document.getElementById('sideInfo').style.display = 'flex';
    anime({
        targets: '.sideInfo',
        translateX: -330,
        easing: 'easeInOutExpo',
        delay: 0,
        duration: 600
    });
}

function eleTheme(data, index) {
    let group = JSON.stringify(data["elements"][index-1]["category"]).replace(/["]/g, '');
    let display = document.getElementById('displayE');
    if (group == 'diatomic nonmetal') {
        display.setAttribute('class', 'eleDiv reactiveN');
    } else if (group == 'alkali metal') {
        display.setAttribute('class', 'eleDiv alkaliM');
    } else if (group == 'alkaline earth metal') {
        display.setAttribute('class', 'eleDiv alkalineEM');
    } else if (group == 'transition metal') {
        display.setAttribute('class', 'eleDiv transitionM');
    } else if (group == 'lanthanide') {
        display.setAttribute('class', 'eleDiv Lanth');
    } else if (group == 'actinide') {
        display.setAttribute('class', 'eleDiv Acti');
    } else if (group == 'metalloid') {
        display.setAttribute('class', 'eleDiv Metalloids');
    } else if (group == 'post-transition metal') {
        display.setAttribute('class', 'eleDiv postTran');
    } else if (group == 'noble gas') {
        display.setAttribute('class', 'eleDiv nobleG');
    } else if (group == 'unknown') {
        display.setAttribute('class', 'eleDiv Unknown');
    }
}

function nullCheck(data, index) {
    let melt = JSON.stringify(data["elements"][index]["melt"]).replace(/["]/g, '');
    let boil = JSON.stringify(data["elements"][index]["boil"]).replace(/["]/g, '');
    if (melt == 'null') {
        document.getElementById('melt').innerHTML = 'Melting point: Unknown';
    } else {
        document.getElementById('melt').innerHTML = `Melting point: ${melt}°F`;
    }
    if (boil == 'null') {
        document.getElementById('Boil').innerHTML = 'Boiling point: Unknown';
    } else {
        document.getElementById('Boil').innerHTML = `Boiling point: ${boil}°F`;
    }
    
}

function closeSide() {
    document.getElementById('sideInfo').style.display = 'none';
    document.getElementById('sideInfo').style.transform = 'translateX(0px)';
    main.style.paddingRight = '0px';
}

mini();