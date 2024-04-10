function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var troll = () => {
    window.open('hidden.html','','HEIGHT='+RB(0,screen.height)+',WIDTH='+RB(0,screen.width));
}
var troll2 = () => {
    let w = window.open('','','HEIGHT='+RB(0,screen.height)+',WIDTH='+RB(0,screen.width));
    w.document.write('<script src="window.js"></script><img src="gay.png" style="HEIGHT: 100%; WIDTH: 100%;">');
}
