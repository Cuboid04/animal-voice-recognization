function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true}); //access the microphone
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1_QBKBTYa/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);//compares audio from microphone with model
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("sound_result").innerHTML = results[0].label;
    document.getElementById("sound_accuracy").innerHTML = (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("sound_result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("sound_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    if (results[0].label == "Dog") {
        document.getElementById("img_result_gif").src="dog.png";
    } else if (results[0].label == "Cat") {
        document.getElementById("img_result_gif").src="cat.png";
    } else if (results[0].label == "hamster") {
        document.getElementById("img_result_gif").src="hamster.png";
    }else{
        document.getElementById("img_result_gif").src="https://tse2.mm.bing.net/th?id=OIP.K56hU6dsHZREL-XUxAir3AEsDb&pid=Api&P=0";
    }
  }
}