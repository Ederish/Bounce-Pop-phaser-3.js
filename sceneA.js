class SceneA extends Phaser.Scene { constructor() { super({key: "SceneA", active: true});}
preload(){
//---------------------------- Background ---------//
this.load.image('img1', 'assets/img/lofi-1.jpg');
this.load.image('img2', 'assets/img/lofi-2.jpg');
this.load.image('img3', 'assets/img/lofi-3.jpg');
this.load.image('img4', 'assets/img/lofi-4.png');
this.load.image('img5', 'assets/img/lofi-5.jpg');
this.load.image('img6', 'assets/img/lofi-6.jpg');
this.load.image('img7', 'assets/img/lofi-7.jpg');
this.load.image('img8', 'assets/img/lofi-8.jfif');
this.load.image('img9', 'assets/img/lofi-9.jpg');
this.load.image('img10', 'assets/img/lofi-10.jpg');
this.load.image('img11', 'assets/img/lofi-11.jpg');
this.load.image('img12', 'assets/img/lofi-12.jpg');
}
create(){
//----------------- Backgrond -----------------//
this.add.rectangle(400, 300, 800, 600, 0x8357eb);
//------------------- Select Levels -----------//
this.add.text(100, 40, ' LEVEL SELECT ',{ fontSize:'60px',fill:'#FFF',fontFamily: 'verdana, arial, sans-serif'}).setStroke('#000',10);
//---------------------------------- Grid Levels -----------------------------------//
var r1 = this.add.rectangle(200, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r2 = this.add.rectangle(400, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r3 = this.add.rectangle(600, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r4 = this.add.rectangle(200, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r5 = this.add.rectangle(400, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r6 = this.add.rectangle(600, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r7 = this.add.rectangle(200, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r8 = this.add.rectangle(400, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r9 = this.add.rectangle(600, 200, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r10 = this.add.rectangle(200, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r11 = this.add.rectangle(400, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
var r12 = this.add.rectangle(600, 400, 100, 100, 0x1eaafc).setStrokeStyle(4, 0xefc53f).setInteractive();
//---------------------------- squares position  and background Image --------------------------------------------------//
r1.setPosition(150,200).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img1').setDisplaySize(800, 600)); 
r2.setPosition(300,200).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img2').setDisplaySize(800, 600));
r3.setPosition(450,200).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img3').setDisplaySize(800, 600)); 
r4.setPosition(600,200).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img4').setDisplaySize(800, 600));
r5.setPosition(150,320).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img5').setDisplaySize(800, 600)); 
r6.setPosition(300,320).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img6').setDisplaySize(800, 600));
r7.setPosition(450,320).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img7').setDisplaySize(800, 600)); 
r8.setPosition(600,320).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img8').setDisplaySize(800, 600));
r9.setPosition(150,450).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img9').setDisplaySize(800, 600)); 
r10.setPosition(300,450).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img10').setDisplaySize(800, 600));
r11.setPosition(450,450).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img11').setDisplaySize(800, 600)); 
r12.setPosition(600,450).on('pointerdown', () => this.scene.add("SceneB", new SceneB)).on('pointerdown', () => this.add.image(400, 300, 'img12').setDisplaySize(800, 600));
//----------------------------------- Numbers position ---------------------------------------------//
this.add.text(140,150, '1',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(275,150, '2',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(420,150, '3',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(580,150, '4',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);

this.add.text(140,270, '5',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(275,270, '6',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(420,270, '7',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(580,270, '8',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);

this.add.text(140,400, '9',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(275,400, '10',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(420,400, '11',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
this.add.text(550,400, '12',{ fontSize:'60px',fill:'#FFF',fontFamily: 'Cursive'}).setStroke('#000',10);
//------------------------ Music Levels ----------------------------------------------------//
r1.on('pointerdown', () =>  songs.splice(0,1)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r2.on('pointerdown', () =>  songs.splice(0,2)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r3.on('pointerdown', () =>  songs.splice(0,3)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r4.on('pointerdown', () =>  songs.splice(0,4)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r5.on('pointerdown', () =>  songs.splice(0,5)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r6.on('pointerdown', () =>  songs.splice(0,6)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r7.on('pointerdown', () =>  songs.splice(0,7)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r8.on('pointerdown', () =>  songs.splice(0,8)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r9.on('pointerdown', () =>  songs.splice(0,9)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r10.on('pointerdown', () => songs.splice(0,10)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true); 
r11.on('pointerdown', () => songs.splice(0,11)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true);
r12.on('pointerdown', () => songs.splice(0,12)).on('pointerdown', () => songs[0].play()).on('pointerdown', () => menuMusic.pause()).on('pointerdown', () =>songs[0].loop= true);
}}