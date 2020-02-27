  var firebaseConfig = {
    apiKey: "AIzaSyClwTUAgNkeATuuKedk3SJjPDb8FObrNvo",
    authDomain: "scale-vr-2b272.firebaseapp.com",
    databaseURL: "https://scale-vr-2b272.firebaseio.com",
    projectId: "scale-vr-2b272",
    storageBucket: "scale-vr-2b272.appspot.com",
    messagingSenderId: "795904121533",
    appId: "1:795904121533:web:8fdb6e3e881dbe143a75d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function showimage(){

    var storage = firebase.storage();
    var storageRef = storage.ref();


    $('#List').find('tbody').html('');

    var i=0;
    storageRef.child('images/').listAll().then(function(result){
     result.items.forEach(function(imageRef){
    //console.log("Image referrence" +imageRef.toString());
    i++;
    displayImage(i,imageRef);

  });

   });
    function displayImage(row,images){
     images.getDownloadURL().then(function(url){
      console.log(url);
      let new_html='';
      new_html +='<tr>';
      new_html+='<td>';
      new_html+=' <a-scene><a-assets><img id="panorama" src="'+url+'" crossorigin /></a-assets><a-sky src="#panorama" rotation="0 -90 0"></a-sky></a-scene>';
      new_html+='</td>';
      new_html+='</tr>'
      $('#List').find('tbody').append(new_html);
    });
   }
 }



 