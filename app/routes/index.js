import Route from '@ember/routing/route';
import RSVP from 'rsvp';


export default class IndexRoute extends Route{
  model() {
    return RSVP.hash({
      assetLocations: this.store.findAll('asset-location'),
      //  PROBLEM: If uncommented then my factories work as expected. Otherwise none get generated
      // This can be validated via the inspector + the rendered HTML.
      // assets: this.store.findAll('asset'),
    });
  }
}
