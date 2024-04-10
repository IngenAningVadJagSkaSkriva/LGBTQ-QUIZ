var troll = () => {
    window.open('hidden.html','','HEIGHT=10,WIDTH=10');
}
var troll2 = () => {
    let w = window.open('','','HEIGHT=10,WIDTH=10');
    w.document.write('<script src="window.js"></script><img src="gay.png" style="HEIGHT: 100%; WIDTH: 100%;">');
}
