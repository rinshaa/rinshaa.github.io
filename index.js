$(document).ready(function(){
  var validate=$("#submit-form").validate({
    rules:{
      Name:{
        required:true,
        minlength:4
      },
      Place:{
        required:true,
        minlength:4
      },
      emailid:{
        required:true,
        email:true
      },

    },
    
   submitHandler:function(form){
      $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzyVm7p4q-LnOP1kLTEHWhbyEy2ka8jbSASa_0j1PkQg4FtueT_oFbH4qIXE9cvk_u8NA/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
          }
        })
      })   
    