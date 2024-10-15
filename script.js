// Story Form Submission
document.getElementById('story-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const storyInput = document.getElementById('storyInput').value.trim();
    const storyText = document.getElementById('storyText').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Basic validation
    if (storyInput.length < 3) {
        formMessage.textContent = 'Story title must be at least 3 characters.';
        formMessage.style.color = 'red';
    } else if (storyText.length < 10) {
        formMessage.textContent = 'Story content must be at least 10 characters.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Story submitted successfully!';
        formMessage.style.color = 'green';

        // Reset form fields
        document.getElementById('storyInput').value = '';
        document.getElementById('storyText').value = '';
    }
});

// Comment Form Submission
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const commentInput = document.getElementById('commentInput').value.trim();
    const commentList = document.getElementById('commentList');

    if (commentInput.length > 0) {
        // Create a new comment element
        const newComment = document.createElement('div');
        newComment.textContent = commentInput;
        newComment.className = 'alert alert-secondary mt-2';

        // Append the new comment to the comment list
        commentList.appendChild(newComment);

        // Clear the input field
        document.getElementById('commentInput').value = '';
    }
});

// Load Experiences Button
document.getElementById('loadExperiences').addEventListener('click', function() {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = ''; // Clear the list

    const experiences = [
        "UI/UX design for e-commerce.",
        "Responsive web design with Bootstrap.",
        "Front-end development with React."
    ];

    // Loop through the experiences and create a list
    experiences.forEach(function(experience) {
        const experienceItem = document.createElement('div');
        experienceItem.textContent = experience;
        experienceItem.className = 'alert alert-info mt-2';
        experienceList.appendChild(experienceItem);
    });
});
