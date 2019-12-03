import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';

  pathForType(type) {
    // No pluralization
    return type;
  }
}
