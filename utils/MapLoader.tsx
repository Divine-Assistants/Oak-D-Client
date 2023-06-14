import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyD5BtEK5I1yt8xZ0TizhMfR7O2Nj_iD_AQ',
  version: 'weekly',
  libraries: ['places'],
});

export default loader;