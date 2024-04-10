var troll = () => {
    window.open('hidden.html','','HEIGHT=1,WIDTH=1');
}
var troll2 = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<script src="window.js"></script><img src="gay.png" style="HEIGHT: 100%; WIDTH: 100%;">');
}
