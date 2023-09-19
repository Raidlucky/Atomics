function elementOut() {

}

/*function background() {
    let backgroundC = window.getComputedStyle(document.body,null).getPropertyValue('background-color');
    if (backgroundC == 'rgb(255, 255, 255)') {
        console.log(true);
        document.getElementById('body').style.cssText = 'background-color: #1a1a1a;';
        document.getElementById('mainHeader').style.color = '#fff'
        document.getElementById('themeBtn').innerHTML = '<i class="fa-solid fa-sun"></i> Day'
    } else {
        document.getElementById('body').style.cssText = 'background-color: #fff;';
        document.getElementById('mainHeader').style.color = '#222222'
        document.getElementById('themeBtn').innerHTML = '<i class="fa-solid fa-moon"></i> Night'
    }
}*/

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
    document.getElementById('home').style.width = '20px';
    document.getElementById('table').innerHTML = '<i class="fa-solid fa-atom"></i>';
    document.getElementById('table').style.width = '20px';
    document.getElementById('info').innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    document.getElementById('info').style.width = '20px';
    document.getElementById('history').innerHTML = '<i class="fa-solid fa-landmark-dome"></i>';
    document.getElementById('history').style.width = '20px';
    document.getElementById('expand').style.display = 'flex'
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
    document.getElementById('expand').style.display = 'none'
}