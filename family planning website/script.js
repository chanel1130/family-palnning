let imgs = [];
let lastX = 0; // 鼠标上次的位置X
let lastY = 0; // 鼠标上次的位置Y
let threshold = 150; // 触发生成图片的移动距离
let canvas;

function preload(){
  imgs[0] = loadImage('assets/1.jpg');
  imgs[1] = loadImage('assets/2.jpeg');
  imgs[2] = loadImage('assets/3.jpeg');
  imgs[3] = loadImage('assets/4.jpg'); 
  imgs[4] = loadImage('assets/5.jpg');
  imgs[5] = loadImage('assets/6.jpg');
  imgs[6] = loadImage('assets/7.jpg');
  imgs[7] = loadImage('assets/8.jpg');
  imgs[8] = loadImage('assets/9.jpeg');
  imgs[9] = loadImage('pic/family planning.jpg');
  imgs[10] = loadImage('pic/india.jpg');
  imgs[11] = loadImage('pic/one is the best.jpg');
}
function setup() {
  // createCanvas(1600,800);
  createCanvas(windowWidth, windowHeight);
      background(255);

}


function draw() {


}



function mouseMoved() {
  // 计算鼠标与上次位置的距离
  let distance = dist(mouseX, mouseY, lastX, lastY);

  // 如果超过阈值，生成新图片
  if (distance > threshold) {
    // 随机选择一张图片
    let randomImg = random(imgs);
    let randomAlpha = random(100, 255); 
    tint(255, randomAlpha);  
    // 在鼠标位置绘制图片
    image(randomImg, mouseX, mouseY, randomImg.width / 4, randomImg.height / 4);

    // 更新鼠标上次的位置
    lastX = mouseX;
    lastY = mouseY;
  }
}