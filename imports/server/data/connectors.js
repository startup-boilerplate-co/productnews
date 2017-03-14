import mongoose from 'mongoose';
import RetroCards from './connector_retrocard';
import FortuneCookie from './connector_fortunecookie';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://machine:ventures@ds117849.mlab.com:17849/machine');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected'));

// const Connectors = Object.assign(FortuneCookie, RetroCards);
export { FortuneCookie, RetroCards };
// export default Connectors;
