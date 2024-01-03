Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML = '<img id="snap" src="' + pic + '">'
    })
}

function check(){
    pic = document.getElementById("snap");
    image_model.classify(pic,getresults)
}

function getresults(e,r){
    if (e){
        console.error(e)
        
    }
    else {
        console.log(r)
        document.getElementById("result_object_name").innerHTML = r[0].label
        document.getElementById("result_object_accuracy").innerHTML = r[0].confidence.toFixed(3)
    }
}
//add model.json at the end of new teachable machine
image_model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mBBxGYGra/model.json",model_loaded);

function model_loaded(){
    console.log("model loaded successfully")
}