//object constructor
function pis(id){
    var about = {
        Version: 0.01,
        Author: "Kevin Ferm",
        Created: "March 2016",
        Updated: "29/3-16"
    };

    if(id) {
        //Doesn't work without this for some reason??
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
                if(this.e[fields[i]].type == "text" || this.e[fields[i]].type == "hidden" || this.e[fields[i]].type == "password" || this.e[fields[i]].type == "textarea") {
                    //Do the checking here
                    console.log(this.e[fields[i]].value);
                } else if(this.e[fields[i]].type == "file") {
                    console.log("FILE TYPE");

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

   image: function(id) {
    if(input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            console.log(e);
            return e;
        }
        reader.readAsDataURL(input.files[0]);
    }
   }
};
