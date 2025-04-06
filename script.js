// Typing animation for name
const name = "Dechen Dorji";
const nameElement = document.getElementById('animated-name');
let i = 0;

function typeWriter() {
    if (i < name.length) {
        nameElement.textContent += name.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    } else {
        nameElement.classList.add('typing');
    }
}

// Portfolio filter functionality
function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update copyright year
function updateCopyrightYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    setTimeout(typeWriter, 1000);
    
    // Setup portfolio filter
    setupPortfolioFilter();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Update copyright year
    updateCopyrightYear();
});