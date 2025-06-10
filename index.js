function validateform(){
 let name=document.getElementById("nam").value.trim();
 let email=document.getElementById("em").value.trim();
 let contact=document.getElementById("con").value.trim();
 let db=document.getElementById("dt").value;
 if(name===""){
   alert("Name is required.");
   return false;
  }
      if(name.length<8){
		  alert("Name should atleast be 8 characters");
		  return false;
	  }
	   
	  var ch=name.charCodeAt(0);
	  if(!(ch>=65 && ch<=90)){
		  alert("first letter of name should be capital");
		  return false;
	   }
	  
	  
	  var ch=name.split(" ");
		  if(ch.length!=3){
			  alert("Enter first name middle name and last name");
			  return false;
		  }
		  
		for(let part of ch){
		  if(!(part.charCodeAt(0)>=65 && part.charCodeAt(0)<=90)){
			  alert("First name,last name,middle name first letter should be capital");
			  return false;
		  }
		}
		
		
		
		let atindex=email.indexOf("@");
		let lastindex=email.lastIndexOf("@");
		
			if(atindex!=lastindex || atindex==email.length-1 || atindex<=0){
				alert("Invalid Email There should be only one @");
				return false;
			}
			
			let substr=email.substring(atindex+1);
			let dotidx=substr.indexOf(".");
			let lastdotidx=substr.lastIndexOf(".");
			
			if(dotidx!=lastdotidx || dotidx===-1){
				alert("There should be only one dot index..");
				return false;
			}
		     if(contact.length!==10){
				 alert("Contact should be of 10 digits..");
				 return false;
			 }	
			 for(let i=0;i<contact.length;i++){
				 if(!(contact.charCodeAt(i)>=48 && contact.charCodeAt(i)<=57)){
					 alert("Contact must be between 0-9");
					 return false;
				 }
			 }
			 if(db===""){
				 alert("Please enter date of birth");
				 return false;
			 }
			const birthyr=new Date(db).getFullYear();
	        const currentyr=new Date().getFullYear();
	        const age=currentyr-birthyr;
	        if(age<18){
		       alert("Registration failed must be 18 years old..");
			   return false;
	         }
		
          	return true;
	   
}
