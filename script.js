var base64_encrypt = function(string){
    return btoa(string)
  };
  
  var base64_decrypt = function(string){
    return atob (string)
  };

  function crypt(){
      var text=document.getElementById("text").ariaValueMax;
      var encrypted=base64_encrypt(text);
      document.getElementById("encrypted").innerHTML=encrypted;
  }

  function decrypt(){
    var text=document.getElementById("text2").ariaValueMax;
    var decrypted=base64_decrypt(text);
    document.getElementById("decryptes").innerHTML=decrypted;
}
