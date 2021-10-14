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
      room_name = localStorage.getItem("room_name");
  
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