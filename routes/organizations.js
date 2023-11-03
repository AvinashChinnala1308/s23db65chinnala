
const express = require('express');
const router = express.Router();

const organizations = [
  { 
    organizationName: 'Bosch Global Software Technologies',
    location: 'Hyderabad, India',
    industry: 'Technology',
    numberOfEmployees: 3000,
    revenue: 50000000,
    website: 'https://www.bosch-softwaretechnologies.com/en/our-company/about-us/'},
  { 
    organizationName: 'Wipro',
    location: 'Whitefields, India',
    industry: 'Technology',
    numberOfEmployees: 50000,
    revenue: 7000000, 
    website: 'https://www.wipro.com/' },
  { 
    organizationName: 'Apps Associates',
    location: 'Uppal, Inida',
    industry: 'Technology',
    numberOfEmployees: 5000,
    revenue: 7000000,
    website: 'https://appsassociates.com/'},
  { 
    organizationName: 'Epam',
    location: 'Inida',
    industry: 'MI',
    numberOfEmployees: 900,
    revenue: 3000000,
    website: 'https://www.epam.com/'}
  
];

router.get('/', (req, res) => {   
    res.render('organizations', { title: 'Search Results - Organizations', a: organizations });
  });
  
  module.exports = router;