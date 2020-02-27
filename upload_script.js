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


function upload(){
	var image=document.getElementById("image").files[0];
	var imageName=image.name;
	var storageRef=firebase.storage().ref('images/'+imageName);
	var uploadTask=storageRef.put(image);
	uploadTask.on('state_changed',function(snapshot){
		var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
		console.log("upload is"+progress+"done");
	},
		function(error){
			alert(error.message);},
			function(){
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
					alert("Image Uploaded");
					window.location.href = "explore.html";
				});
			});

}
	
