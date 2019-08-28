function start(){
    var centerX = getHeight()/2;
    var centerY = getWidth()/2
    var redrect = new Rectangle(50,150);
    redrect.setColor(color.red);
    redrect.setPosition(centerX,centerY);
    add(redrect);
}