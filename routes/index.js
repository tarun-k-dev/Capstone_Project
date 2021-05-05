const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');


// landing page
router.get('/', (req, res) => {
	res.render('index');
});

router.get('/landing', (req, res) => {
	res.render('landing');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/quiz', (req, res) => {
	res.render('quiz');
});

router.get('/11', (req, res) => {
	res.render('11');
});

router.get('/12', (req, res) => {
	res.render('12');
});

router.get('/13', (req, res) => {
	res.render('13');
});

router.get('/14', (req, res) => {
	res.render('14');
});

router.get('/15', (req, res) => {
	res.render('15');
});

router.get('/21', (req, res) => {
	res.render('21');
});

router.get('/22', (req, res) => {
	res.render('22');
});

router.get('/23', (req, res) => {
	res.render('23');
});

router.get('/24', (req, res) => {
	res.render('24');
});

router.get('/25', (req, res) => {
	res.render('25');
});

router.get('/31', (req, res) => {
	res.render('31');
});

router.get('/32', (req, res) => {
	res.render('32');
});

router.get('/33', (req, res) => {
	res.render('33');
});

router.get('/34', (req, res) => {
	res.render('34');
});

router.get('/35', (req, res) => {
	res.render('35');
});

router.get('/41', (req, res) => {
	res.render('41');
});

router.get('/42', (req, res) => {
	res.render('42');
});

router.get('/43', (req, res) => {
	res.render('43');
});

router.get('/44', (req, res) => {
	res.render('44');
});

router.get('/45', (req, res) => {
	res.render('45');
});

router.get('/46', (req, res) => {
	res.render('46');
});

router.get('/51', (req, res) => {
	res.render('51');
});

router.get('/52', (req, res) => {
	res.render('52');
});

router.get('/53', (req, res) => {
	res.render('53');
});

router.get('/54', (req, res) => {
	res.render('54');
});

router.get('/55', (req, res) => {
	res.render('55');
});

router.get('/61', (req, res) => {
	res.render('61');
});

router.get('/62', (req, res) => {
	res.render('62');
});

router.get('/63', (req, res) => {
	res.render('63');
});

router.get('/64', (req, res) => {
	res.render('64');
});

router.get('/65', (req, res) => {
	res.render('65');
});

router.get('/71', (req, res) => {
	res.render('71');
});

router.get('/72', (req, res) => {
	res.render('72');
});

router.get('/73', (req, res) => {
	res.render('73');
});

router.get('/74', (req, res) => {
	res.render('74');
});

router.get('/75', (req, res) => {
	res.render('75');
});

router.get('/81', (req, res) => {
	res.render('81');
});

router.get('/82', (req, res) => {
	res.render('82');
});

router.get('/83', (req, res) => {
	res.render('83');
});

router.get('/84', (req, res) => {
	res.render('84');
});

router.get('/85', (req, res) => {
	res.render('85');
});

router.get('/91', (req, res) => {
	res.render('91');
});

router.get('/92', (req, res) => {
	res.render('92');
});

router.get('/93', (req, res) => {
	res.render('93');
});

router.get('/94', (req, res) => {
	res.render('94');
});

router.get('/95', (req, res) => {
	res.render('95');
});

router.get('/96', (req, res) => {
	res.render('96');
});



// =====================
// AUTH ROUTES
// =====================

// REGISTER routes
// show register form
router.get('/register', (req, res) => {
	res.render('register', { err: '' });
});

// handle sign up logic
router.post('/register', (req, res) => {
	const newUser = new User({ username: req.body.username });
	User.register(newUser, req.body.password, (err, user) => {
		if (err) {
			return res.render('register', { error: err.message });
		}
		passport.authenticate('local')(req, res, () => {
			req.flash('success', 'Welcome ' + user.username);
			res.redirect('/campgrounds');
		});
	});
});

// LOGIN routes
// show login page
router.get('/login', (req, res) => {
	res.render('login');
});

// handle login logic
router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect : '/campgrounds',
		failureRedirect : '/login',
		successFlash    : `Welcome back!`,
		failureFlash    : true
	})
);

// LOGOUT route
router.get('/logout', (req, res) => {
	req.logout();
	req.flash('success', 'See you next time!');
	res.redirect('/campgrounds');
});

module.exports = router;
