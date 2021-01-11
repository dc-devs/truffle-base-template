const HenFace = artifacts.require('HenFace');
const { INITIAL_TOKENS } = require('../constants/constants');

module.exports = async function (deployer) {
	await deployer.deploy(HenFace, INITIAL_TOKENS);
};
