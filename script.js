// GitHub username
const username = 'abhinajao';

// Function to fetch GitHub profile data
async function fetchGitHubProfile() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub profile');
        }
        const data = await response.json();
        
        // Update profile image
        const profileImage = document.getElementById('profile-image');
        profileImage.src = data.avatar_url;
        
        // Update name
        const profileName = document.getElementById('profile-name');
        profileName.textContent = data.name || username;

    } catch (error) {
        console.error('Error:', error);
    }
}

// Fetch profile data when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubProfile);
