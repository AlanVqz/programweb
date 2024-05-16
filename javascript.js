let slideIndex = 0;
        showSlides();

        function showSlides() {
          const slides = document.querySelectorAll('#carousel img');
          
          for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
          }

          slideIndex++;
          
          if (slideIndex > slides.length) { slideIndex = 1; }
          
          slides[slideIndex - 1].classList.add('active');

          setTimeout(showSlides, 2000); 
        }
//Proyecto interactivo
        document.getElementById("commentForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var name = document.getElementById("name").value;
            var comment = document.getElementById("comment").value;
            addComment(name, comment);
            document.getElementById("commentForm").reset();
        });

        function addComment(name, comment) {
            var commentSection = document.getElementById("commentSection");
            var newComment = document.createElement("div");
            newComment.innerHTML = "<strong>" + name + ":</strong> " + comment;
            commentSection.appendChild(newComment);
        }
