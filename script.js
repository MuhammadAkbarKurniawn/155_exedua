document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var favoriteAlbum = document.getElementById('favoriteAlbum').value;
    var concert = document.querySelector('input[name="concert"]:checked').value;
    var favoriteSongsArray = Array.from(document.querySelectorAll('input[name="favoriteSongs"]:checked'))
                                  .map(checkbox => checkbox.value);
    var favoriteSongs = favoriteSongsArray.join(', ');
    var otherSong = document.getElementById('otherSong').value;
    var comments = document.getElementById('comments').value;
    });
