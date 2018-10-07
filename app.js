
const yargs = require('yargs');
const geocode = require('./geocode');
const argv = yargs
.options({
    a : {
        alias : 'address',
        describe : 'Address of the location',
        string : true
    }
})
.help()
.argv;

const address = argv.a || 'SMVDU';
var encodedAddress = encodeURIComponent(address);

geocode.getCoord(encodedAddress);