//object constructor
function pis(id){
    var about = {
        Version: 0.01,
        Author: "Kevin Ferm",
        Created: "March 2016",
        Updated: "31/3-16"
    };

    if(id) {
        //Create instance of function
        if(window == this) {
            return new pis(id);
        }

        this.e = document.getElementById(id);
        return this;
    } else {
        return about;
    }
}

//methods
pis.prototype = {

   submit: function(fields) {
      // implementation
      if(fields) {
        //Search fields that are named in the array
        for (var i = fields.length - 1; i >= 0; i--) {
            if(this.e[fields[i]]) {
                if(this.e[fields[i]].type == "text" || this.e[fields[i]].type == "hidden" ||
                   this.e[fields[i]].type == "password" || this.e[fields[i]].type == "textarea") {
                    //Do the checking here
                    console.log(this.emailCheck(this.e[fields[i]].value));
                    if(this.emailCheck(this.e[fields[i]].value)) {
                        alert("There is an email address contained in your message, are you sure you want to post this? - " + this.e[fields[i]].value);
                    }
                    if(this.genderCheck(this.e[fields[i]].value)) {
                        alert("There is an email address contained in your message, are you sure you want to post this? - " + this.e[fields[i]].value);
                    }
                    if(this.phoneCheck(this.e[fields[i]].value)) {
                        alert("There is an email address contained in your message, are you sure you want to post this? - " + this.e[fields[i]].value);
                    }
                    console.log(this.e[fields[i]].value);
                } else if(this.e[fields[i]].type == "file") {
                    console.log("FILE TYPE");
                    this.readImage(this.e[fields[i]]);

                } else {
                    console.log(fields[i] + " has no value");
                }
            } else {
                console.log("There is no such field as: " + fields[i]);
            }
        };
      } else {
        //Search all

      }
      console.log(this.e);
      //this.e.submit();
      return this;
   },

   readImage: function(input) {
    if(input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            //console.log(e.target.result);
            base64Decode(e.target.result);
            return e;
        }
        reader.readAsDataURL(input.files[0]);
    }
   },

   emailCheck: function(input) {
    var pattern = /^(\w|\-|\_|\.)+\@((\w|\-|\_)+\.)+[a-zA-Z]{2,}$/;
    return pattern.test(input);
   },

   genderCheck: function(input) {
    var pattern = /^(fe)?male$/;
    return pattern.test(input);
   },

   phoneCheck: function(input) {
    var pattern = /^([+]47)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/
   }
};

function base64Decode(base64) {
    var data = base64.split(",");
    var imgtype = data[0].match(/:([^}]*);/)[1];
    var decoded = atob(data[1]);
    var buffer = new ArrayBuffer(decoded.length);
    var view = new Uint8Array(buffer);
    for (var i = decoded.length - 1; i >= 0; i--) {
        view[i] = decoded.charCodeAt(i);
    };

    console.log(view);
}
