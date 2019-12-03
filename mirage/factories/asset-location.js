import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  assetCategory(i) {
    return i % 2 === 0 ? 'Tool' : 'Equipment';
  },

  whenSeen() {
    let day = Math.floor(Math.random() * (25 - 1 + 1) + 1);
    let hour = Math.floor(Math.random() * (23 + 1));
    let minute = Math.floor(Math.random() * (59 + 1));
    return `2019-09-${day}T${hour}:${minute}:00`;
  },

  afterCreate(assetLocation, server) {
    let toUpdate = {};

    if (!assetLocation.asset) {
      toUpdate.asset = server.create('asset');
    }

    assetLocation.update(toUpdate);
  }
});
