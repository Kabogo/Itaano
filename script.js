document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
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
    
    // Gallery modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const tableType = document.getElementById('tableType').value;
            const bookingTime = document.getElementById('bookingTime').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            console.log('Booking Submitted:', {
                name,
                email,
                phone,
                tableType,
                bookingTime,
                message
            });
            
            // Show success message
            alert('Your table has been booked successfully! We will contact you shortly to confirm.');
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this data to a server
            console.log('Newsletter Subscription:', { email });
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }
    
    // Create floating bubbles
    const floatingBubbles = document.querySelector('.floating-bubbles');
    if (floatingBubbles) {
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('li');
            
            // Random size between 10px and 100px
            const size = Math.random() * 90 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 30s
            const duration = Math.random() * 20 + 10;
            bubble.style.animationDuration = `${duration}s`;
            
            // Random delay
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            
            floatingBubbles.appendChild(bubble);
        }
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.facility-card, .gallery-item, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.facility-card, .gallery-item, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
// Add to your existing script.js file

// League Data (in a real app, this would come from an API)
const leagueData = {
    premier: [
        { player: "Mike Johnson", played: 12, won: 10, lost: 2, points: 30, percentage: 83.3 },
        { player: "Sarah Williams", played: 12, won: 9, lost: 3, points: 27, percentage: 75.0 },
        { player: "David Chen", played: 12, won: 8, lost: 4, points: 24, percentage: 66.7 },
        { player: "Emma Rodriguez", played: 12, won: 7, lost: 5, points: 21, percentage: 58.3 },
        { player: "James Wilson", played: 12, won: 6, lost: 6, points: 18, percentage: 50.0 },
        { player: "Lisa Kim", played: 12, won: 5, lost: 7, points: 15, percentage: 41.7 },
        { player: "Robert Taylor", played: 12, won: 4, lost: 8, points: 12, percentage: 33.3 },
        { player: "Olivia Martinez", played: 12, won: 3, lost: 9, points: 9, percentage: 25.0 }
    ],
    championship: [
        { player: "Brian Adams", played: 10, won: 8, lost: 2, points: 24, percentage: 80.0 },
        { player: "Sophia Lee", played: 10, won: 7, lost: 3, points: 21, percentage: 70.0 },
        { player: "Kevin Brown", played: 10, won: 6, lost: 4, points: 18, percentage: 60.0 },
        { player: "Amanda Garcia", played: 10, won: 5, lost: 5, points: 15, percentage: 50.0 },
        { player: "Daniel Clark", played: 10, won: 4, lost: 6, points: 12, percentage: 40.0 },
        { player: "Jennifer Hall", played: 10, won: 3, lost: 7, points: 9, percentage: 30.0 }
    ],
    amateur: [
        { player: "Chris Evans", played: 8, won: 6, lost: 2, points: 18, percentage: 75.0 },
        { player: "Michelle Scott", played: 8, won: 5, lost: 3, points: 15, percentage: 62.5 },
        { player: "Jason King", played: 8, won: 4, lost: 4, points: 12, percentage: 50.0 },
        { player: "Nicole Green", played: 8, won: 3, lost: 5, points: 9, percentage: 37.5 },
        { player: "Steven White", played: 8, won: 2, lost: 6, points: 6, percentage: 25.0 }
    ],
    womens: [
        { player: "Jessica Adams", played: 10, won: 9, lost: 1, points: 27, percentage: 90.0 },
        { player: "Rachel Carter", played: 10, won: 8, lost: 2, points: 24, percentage: 80.0 },
        { player: "Megan Foster", played: 10, won: 7, lost: 3, points: 21, percentage: 70.0 },
        { player: "Lauren Hill", played: 10, won: 6, lost: 4, points: 18, percentage: 60.0 },
        { player: "Victoria Young", played: 10, won: 5, lost: 5, points: 15, percentage: 50.0 }
    ]
};

const fixturesData = [
    {
        date: "2023-06-15",
        time: "19:00",
        league: "premier",
        player1: "Mike Johnson",
        player2: "Sarah Williams"
    },
    {
        date: "2023-06-15",
        time: "20:30",
        league: "premier",
        player1: "David Chen",
        player2: "Emma Rodriguez"
    },
    {
        date: "2023-06-16",
        time: "18:00",
        league: "championship",
        player1: "Brian Adams",
        player2: "Sophia Lee"
    },
    {
        date: "2023-06-16",
        time: "19:30",
        league: "womens",
        player1: "Jessica Adams",
        player2: "Rachel Carter"
    },
    {
        date: "2023-06-17",
        time: "14:00",
        league: "amateur",
        player1: "Chris Evans",
        player2: "Michelle Scott"
    },
    {
        date: "2023-06-17",
        time: "15:30",
        league: "amateur",
        player1: "Jason King",
        player2: "Nicole Green"
    },
    {
        date: "2023-06-18",
        time: "20:00",
        league: "premier",
        player1: "James Wilson",
        player2: "Lisa Kim"
    },
    {
        date: "2023-06-19",
        time: "19:00",
        league: "championship",
        player1: "Kevin Brown",
        player2: "Amanda Garcia"
    }
];

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Update active tab button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show corresponding content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
        
        // If showing standings, update the table
        if (tabId === 'standings') {
            updateStandingsTable();
        }
        
        // If showing fixtures, update the list
        if (tabId === 'fixtures') {
            updateFixturesList();
        }
    });
});

// Standings table functionality
function updateStandingsTable() {
    const leagueSelect = document.getElementById('league-select');
    const standingsBody = document.getElementById('standings-data');
    const league = leagueSelect.value;
    
    // Clear current data
    standingsBody.innerHTML = '';
    
    // Add new data
    leagueData[league].forEach((player, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.player}</td>
            <td>${player.played}</td>
            <td>${player.won}</td>
            <td>${player.lost}</td>
            <td>${player.points}</td>
            <td>${player.percentage}%</td>
        `;
        
        standingsBody.appendChild(row);
    });
}

// Fixtures list functionality
function updateFixturesList() {
    const leagueFilter = document.getElementById('league-filter');
    const dateFilter = document.getElementById('date-filter');
    const fixturesContainer = document.getElementById('fixtures-data');
    const league = leagueFilter.value;
    const dateRange = dateFilter.value;
    
    // Clear current data
    fixturesContainer.innerHTML = '';
    
    // Filter fixtures
    let filteredFixtures = [...fixturesData];
    
    if (league !== 'all') {
        filteredFixtures = filteredFixtures.filter(f => f.league === league);
    }
    
    if (dateRange === 'this-week') {
        // Filter for this week's fixtures (simplified for demo)
        filteredFixtures = filteredFixtures.filter(f => {
            const fixtureDate = new Date(f.date);
            const today = new Date();
            const nextWeek = new Date(today);
            nextWeek.setDate(today.getDate() + 7);
            return fixtureDate >= today && fixtureDate <= nextWeek;
        });
    } else if (dateRange === 'this-month') {
        // Filter for this month's fixtures (simplified for demo)
        filteredFixtures = filteredFixtures.filter(f => {
            const fixtureDate = new Date(f.date);
            const today = new Date();
            return fixtureDate.getMonth() === today.getMonth() && 
                   fixtureDate.getFullYear() === today.getFullYear();
        });
    } else {
        // Upcoming - filter out past fixtures
        filteredFixtures = filteredFixtures.filter(f => {
            const fixtureDate = new Date(f.date);
            const today = new Date();
            return fixtureDate >= today;
        });
    }
    
    // Sort by date
    filteredFixtures.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Add fixtures to DOM
    if (filteredFixtures.length === 0) {
        fixturesContainer.innerHTML = '<p class="no-fixtures">No fixtures match your selected criteria.</p>';
        return;
    }
    
    filteredFixtures.forEach(fixture => {
        const fixtureDate = new Date(fixture.date);
        const formattedDate = fixtureDate.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
        
        const fixtureItem = document.createElement('div');
        fixtureItem.className = 'fixture-item';
        
        fixtureItem.innerHTML = `
            <div class="fixture-date">${formattedDate}</div>
            <div class="fixture-teams">
                <span class="fixture-player">${fixture.player1}</span>
                <span class="fixture-vs">vs</span>
                <span class="fixture-player">${fixture.player2}</span>
            </div>
            <div class="fixture-league">${getLeagueName(fixture.league)}</div>
            <div class="fixture-time">${fixture.time}</div>
        `;
        
        fixturesContainer.appendChild(fixtureItem);
    });
}

function getLeagueName(leagueKey) {
    const leagueNames = {
        premier: 'Premier League',
        championship: 'Championship League',
        amateur: 'Amateur League',
        womens: "Women's League"
    };
    return leagueNames[leagueKey] || leagueKey;
}

// League form submission
const leagueForm = document.getElementById('leagueForm');
if (leagueForm) {
    leagueForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('league-name').value;
        const email = document.getElementById('league-email').value;
        const phone = document.getElementById('league-phone').value;
        const league = document.getElementById('league-preference').value;
        const experience = document.getElementById('league-experience').value;
        
        // Here you would typically send this data to a server
        console.log('League Application:', {
            name,
            email,
            phone,
            league,
            experience
        });
        
        // Show success message
        alert('Thank you for your application! Our league coordinator will contact you within 48 hours.');
        
        // Reset form
        leagueForm.reset();
    });
}

// Event listeners for filters
document.getElementById('league-select')?.addEventListener('change', updateStandingsTable);
document.getElementById('league-filter')?.addEventListener('change', updateFixturesList);
document.getElementById('date-filter')?.addEventListener('change', updateFixturesList);

// Initialize the tables when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateStandingsTable();
    updateFixturesList();
});