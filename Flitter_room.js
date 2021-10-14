var firebaseConfig = {
  apiKey: "AIzaSyDCGcFCpIVHF9X-wDysSZcNCvnC6hkyeCc",
  authDomain: "flitter-4346b.firebaseapp.com",
  databaseURL: "https://flitter-4346b-default-rtdb.firebaseio.com",
  projectId: "flitter-4346b",
  storageBucket: "flitter-4346b.appspot.com",
  messagingSenderId: "403697605283",
  appId: "1:403697605283:web:a5847fffab9fb601e7fd16",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Flitter_page.html";
}

function getData() 
{ 
  
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
    row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
  
   //End code
});});}}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "flitter_page.html";
}