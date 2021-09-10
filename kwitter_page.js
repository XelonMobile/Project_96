const firebaseConfig = {
      apiKey: "AIzaSyBvMOlSaXwKpy6BEc6T97clEOmHOZavBKs",
      authDomain: "kwitter-880ed.firebaseapp.com",
      databaseURL: "https://kwitter-880ed-default-rtdb.firebaseio.com",
      projectId: "kwitter-880ed",
      storageBucket: "kwitter-880ed.appspot.com",
      messagingSenderId: "463158699127",
      appId: "1:463158699127:web:a7edb5d1bdded0e8811272"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  });

  document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
