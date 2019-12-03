import { JSONAPISerializer } from 'ember-cli-mirage';

export default class ApplicationSerializer extends JSONAPISerializer {
  typeKeyForModel(model) {
    // Keep things singular
    return model.modelName;
  }

  alwaysIncludeLinkageData = true;
}
