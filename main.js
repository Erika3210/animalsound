https://teachablemachine.withgoogle.com/models/DOI79ZxyJ/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DOI79ZxyJ/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
    
}