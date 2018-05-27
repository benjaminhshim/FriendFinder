$(document).ready(function() {

    function addUser() {
    
        $('#submit-btn').on('click', function() {
            event.preventDefault();
    
            var newFriend = {
                name: $('#name').val().trim(),
                photo: $('#photo').val().trim(),
                scores: [
                    $('#q1').val().trim(),
                    $('#q2').val().trim(),
                    $('#q3').val().trim(),
                    $('#q4').val().trim(),
                    $('#q5').val().trim(),
                    $('#q6').val().trim(),
                    $('#q7').val().trim(),
                    $('#q8').val().trim(),
                    $('#q9').val().trim(),
                    $('#q10').val().trim()
                ]
            };
            
            $.post('/api/friends', newFriend).done(data => {
                // alert(data.matchingName + ' ' + data.matchingPhoto);
                $('#exampleModalCenter').modal('show');
                $('.matching-name').html(data.matchingName);
                $('.matching-photo').html(data.matchingPhoto);


            });
            
        })
    }

    addUser();

})