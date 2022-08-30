//спиннер
import { Spinner } from 'spin.js';
import { opts } from './opts-spinner';
import { ref } from './data/refs';

const spinner = new Spinner(opts).spin(ref.spinner);

export { spinner };
