document.getElementById('addExperience').addEventListener('click', function() {
    const container = document.getElementById('workExperienceContainer');
    const index = container.querySelectorAll('.work-experience-entry').length + 1;

    // Create a new set of input fields
    const newEntry = document.createElement('div');
    newEntry.classList.add('work-experience-entry');
    newEntry.innerHTML = `
        <label for="jobTitle${index}">Job Title:</label>
        <input type="text" id="jobTitle${index}" name="jobTitle[]" required>

        <label for="companyName${index}">Company:</label>
        <input type="text" id="companyName${index}" name="companyName[]" required>

        <label for="responsibilities${index}">Responsibilities:</label>
        <textarea id="responsibilities${index}" name="responsibilities[]" rows="4" required></textarea>

        <label for="achievements${index}">Achievements:</label>
        <textarea id="achievements${index}" name="achievements[]" rows="4" required></textarea>

        <label for="dates${index}">Dates:</label>
        <input type="text" id="dates${index}" name="dates[]" required>
    `;

    // Append the new entry to the container
    container.appendChild(newEntry);
});
