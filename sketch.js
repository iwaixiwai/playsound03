let sound; // サウンドオブジェクトを格納する変数
let playButton, stopButton; // プレイとストップのボタン用の変数

// preload関数でサウンドファイルを読み込む
function preload() {
//  sound = loadSound('Elepla_hanenbow.mp3');
}

// setup関数でキャンバスとUIを作成する
function setup() {
  createCanvas(20, 20); // キャンバスを作成
 const osc = new p5.Oscillator('sine')
 
  // プレイボタンを作成
  playButton = createButton('Play');
  playButton.position(20, 20);
  playButton.size(200, 40);
  playButton.style('background-color', '#00a0fF'); // 背景色を緑に設定
  playButton.style('color', '#FFFFFF'); // 文字色を白に設定
//addClassメソッドを使用してクラスを追加することもできます
  //playButton.addClass('my-class');
  // プレイボタンがクリックされたらサウンドを再生
  playButton.mousePressed(() => {
   osc.start()
//  sound.play();
  });

  // ストップボタンを作成
  stopButton = createButton('Stop');
  stopButton.position(20, 70);
  stopButton.size(200, 40);
  stopButton.style('background-color', '#FF0000'); // 背景色を赤に設定
  stopButton.style('color', '#FFFFFF'); // 文字色を白に設定
  // ストップボタンがクリックされたらサウンドを停止
  stopButton.mousePressed(() => {
 osc.stop()
//    sound.stop();
  });
}
