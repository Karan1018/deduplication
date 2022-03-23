$(document).ready(function() {
        $("#QusMsg1").click(function() {
          swal(
            "State of Domicile",
            "Please Select the State to Which You belong",
            "info"
          );
        });
        $("#QusMsg2").click(function() {
          swal(
            "Scholarship Category",
            "Please Select Pre Matric For Class 1-10 ; For Other Class / Course Select Post Matric / Top Class / MCM Option",
            "info"
          );
        });
        $("#QusMsg3").click(function() {
          swal(
            "Name of Student",
            "Please enter your name as in your aadhaar card/bank account",
            "info"
          );
        });
        $("#QusMsg4").click(function() {
          swal(
            "Scheme Type",
            "Please Select which ever scheme type you want to apply. Apply seperately for each type",
            "info"
          );
        });
        $("#QusMsg5").click(function() {
          swal(
            "Bank Account Number",
            "For Pre Matric Bank account can be in the name of student/father/mother/joint. For Post Matric/MCM/Top Class Bank account should be in the name of the student",
            "warning"
          );
        });
        $("#QusMsg6").click(function() {
          swal(
            "Mobile Number",
            "Mobile Number should be accessible to the student. All Status Updates will be sent only on this mobile number",
            "info"
          );
        });
      });
