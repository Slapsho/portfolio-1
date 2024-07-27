document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const errorMessage = document.getElementById("error-message");
    const textarea = document.getElementById("textarea");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const surname = document.getElementById("surname").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || surname === "" || message === "") {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
        addComment(name, surname, message);
        form.reset();
      }
    });
  
    function addComment(name, surname, message) {
      const commentDiv = document.createElement("div");
      commentDiv.className = "flex space-x-4 text-sm text-gray-500 py-10 border-t border-gray-200";
  
      const innerDiv = document.createElement("div");
      innerDiv.className = "flex-1";
      
      const author = document.createElement("h3");
      author.className = "font-medium text-gray-900";
      author.textContent = `${name} ${surname}`;
      
      const commentText = document.createElement("div");
      commentText.className = "prose prose-sm mt-4 max-w-none text-gray-500";
      const commentPara = document.createElement("p");
      commentPara.textContent = message;
      
      commentText.appendChild(commentPara);
      innerDiv.appendChild(author);
      innerDiv.appendChild(commentText);
      commentDiv.appendChild(innerDiv);
  
      textarea.appendChild(commentDiv);
    }
  });