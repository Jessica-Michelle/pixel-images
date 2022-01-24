import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID Mw4PPVuAYKLNSSmtjmM4r7K0xEEzm7nubnSe2J9ed_8',
	},
});
